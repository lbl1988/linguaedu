require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'lingua-edu-secret-key-2026';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// PostgreSQL 连接池 —— 支持云端数据库（Neon / Supabase / Render / Railway 等）
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

pool.on('error', (err) => {
  console.error('数据库连接错误:', err);
});

// ─── 数据库初始化 ───
async function initDB() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        native_language TEXT DEFAULT 'zh',
        target_language TEXT DEFAULT 'en',
        level TEXT DEFAULT 'beginner',
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS progress (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        course_id TEXT NOT NULL,
        lesson_id TEXT NOT NULL,
        completed INTEGER DEFAULT 0,
        score INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS achievements (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        title TEXT NOT NULL,
        description TEXT,
        icon TEXT DEFAULT '🏆',
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        language TEXT,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        post_id INTEGER NOT NULL REFERENCES posts(id),
        user_id INTEGER NOT NULL REFERENCES users(id),
        content TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS learning_stats (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        study_date TEXT NOT NULL,
        minutes INTEGER DEFAULT 0,
        xp INTEGER DEFAULT 0
      );
    `);
    console.log('✅ 数据库表初始化完成');
  } finally {
    client.release();
  }
}

// ─── 用户认证 ───
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, email, password, native_language, target_language } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: '用户名、邮箱和密码不能为空' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: '密码至少6位' });
    }
    const exists = await pool.query('SELECT id FROM users WHERE username = $1 OR email = $2', [username, email]);
    if (exists.rows.length > 0) {
      return res.status(400).json({ error: '用户名或邮箱已被注册' });
    }
    const hashed = bcrypt.hashSync(password, 10);
    const result = await pool.query(
      'INSERT INTO users (username, email, password, native_language, target_language) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [username, email, hashed, native_language || 'zh', target_language || 'en']
    );
    const id = result.rows[0].id;
    const token = jwt.sign({ id, username }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id, username, email, native_language: native_language || 'zh', target_language: target_language || 'en' } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    const result = await pool.query('SELECT * FROM users WHERE username = $1 OR email = $2', [login, login]);
    const user = result.rows[0];
    if (!user) {
      return res.status(400).json({ error: '用户不存在' });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({ error: '密码错误' });
    }
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, username: user.username, email: user.email, native_language: user.native_language, target_language: user.target_language, level: user.level } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: '未登录' });
  }
  try {
    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (e) {
    res.status(401).json({ error: 'token无效' });
  }
}

// ─── 用户资料 ───
app.get('/api/user/profile', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query('SELECT id, username, email, native_language, target_language, level, created_at FROM users WHERE id = $1', [req.user.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: '用户不存在' });
    res.json(result.rows[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/user/profile', authMiddleware, async (req, res) => {
  try {
    const { native_language, target_language, level } = req.body;
    const sets = [];
    const params = [];
    let idx = 1;
    if (native_language !== undefined) { sets.push(`native_language=$${idx++}`); params.push(native_language); }
    if (target_language !== undefined) { sets.push(`target_language=$${idx++}`); params.push(target_language); }
    if (level !== undefined) { sets.push(`level=$${idx++}`); params.push(level); }
    if (sets.length > 0) {
      params.push(req.user.id);
      await pool.query(`UPDATE users SET ${sets.join(',')} WHERE id=$${idx}`, params);
    }
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── 课程 ───
app.get('/api/courses', (req, res) => {
  const lang = req.query.language;
  const { courses } = require('./data/courses');
  const filtered = lang ? courses.filter(c => c.language === lang) : courses;
  res.json(filtered);
});

app.get('/api/courses/:courseId', (req, res) => {
  const { courses } = require('./data/courses');
  const course = courses.find(c => c.id === req.params.courseId);
  if (!course) return res.status(404).json({ error: '课程不存在' });
  res.json(course);
});

app.get('/api/courses/:courseId/lessons/:lessonId', (req, res) => {
  const { courses } = require('./data/courses');
  const course = courses.find(c => c.id === req.params.courseId);
  if (!course) return res.status(404).json({ error: '课程不存在' });
  const lesson = course.lessons.find(l => l.id === req.params.lessonId);
  if (!lesson) return res.status(404).json({ error: '课时不存在' });
  res.json(lesson);
});

// ─── 学习进度 ───
app.post('/api/progress', authMiddleware, async (req, res) => {
  try {
    const { course_id, lesson_id, completed, score } = req.body;
    const existing = await pool.query('SELECT * FROM progress WHERE user_id=$1 AND course_id=$2 AND lesson_id=$3',
      [req.user.id, course_id, lesson_id]);
    if (existing.rows.length > 0) {
      await pool.query('UPDATE progress SET completed=$1, score=$2 WHERE id=$3',
        [completed ? 1 : 0, score || 0, existing.rows[0].id]);
    } else {
      await pool.query('INSERT INTO progress (user_id, course_id, lesson_id, completed, score) VALUES ($1, $2, $3, $4, $5)',
        [req.user.id, course_id, lesson_id, completed ? 1 : 0, score || 0]);
    }
    const today = new Date().toISOString().slice(0, 10);
    const stats = await pool.query('SELECT * FROM learning_stats WHERE user_id=$1 AND study_date=$2', [req.user.id, today]);
    if (stats.rows.length > 0) {
      await pool.query('UPDATE learning_stats SET minutes=minutes+5, xp=xp+$1 WHERE id=$2', [score || 10, stats.rows[0].id]);
    } else {
      await pool.query('INSERT INTO learning_stats (user_id, study_date, minutes, xp) VALUES ($1, $2, 5, $3)',
        [req.user.id, today, score || 10]);
    }
    await checkAchievements(req.user.id);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/progress', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM progress WHERE user_id=$1', [req.user.id]);
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/stats', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM learning_stats WHERE user_id=$1 ORDER BY study_date DESC LIMIT 30', [req.user.id]);
    const stats = result.rows;
    const totalXp = stats.reduce((s, r) => s + (r.xp || 0), 0);
    const totalMinutes = stats.reduce((s, r) => s + (r.minutes || 0), 0);
    const streak = calculateStreak(stats.map(s => s.study_date));
    res.json({ stats, totalXp, totalMinutes, streak });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

function calculateStreak(dates) {
  if (dates.length === 0) return 0;
  const dateSet = new Set(dates);
  let streak = 0;
  let cursor = new Date();
  while (true) {
    const key = cursor.toISOString().slice(0, 10);
    if (dateSet.has(key)) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

// ─── 成就系统 ───
async function checkAchievements(userId) {
  const completedResult = await pool.query('SELECT COUNT(*) as c FROM progress WHERE user_id=$1 AND completed=1', [userId]);
  const completedCount = parseInt(completedResult.rows[0].c);
  const xpResult = await pool.query('SELECT COALESCE(SUM(xp),0) as t FROM learning_stats WHERE user_id=$1', [userId]);
  const totalXp = parseInt(xpResult.rows[0].t);
  const achievements = [];
  if (completedCount >= 1) achievements.push({ title: '初学者起步', description: '完成第一节课', icon: '🌱' });
  if (completedCount >= 5) achievements.push({ title: '勤奋学员', description: '完成5节课', icon: '📚' });
  if (completedCount >= 20) achievements.push({ title: '学习达人', description: '完成20节课', icon: '🎓' });
  if (completedCount >= 50) achievements.push({ title: '知识先锋', description: '完成50节课', icon: '⭐' });
  if (totalXp >= 100) achievements.push({ title: '百分学员', description: '获得100经验值', icon: '✨' });
  if (totalXp >= 500) achievements.push({ title: '经验大师', description: '获得500经验值', icon: '💎' });
  for (const a of achievements) {
    const exists = await pool.query('SELECT id FROM achievements WHERE user_id=$1 AND title=$2', [userId, a.title]);
    if (exists.rows.length === 0) {
      await pool.query('INSERT INTO achievements (user_id, title, description, icon) VALUES ($1, $2, $3, $4)',
        [userId, a.title, a.description, a.icon]);
    }
  }
}

app.get('/api/achievements', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM achievements WHERE user_id=$1 ORDER BY created_at DESC', [req.user.id]);
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── 个性化推荐 ───
app.get('/api/recommendations', authMiddleware, async (req, res) => {
  try {
    const { courses } = require('./data/courses');
    const userResult = await pool.query('SELECT * FROM users WHERE id=$1', [req.user.id]);
    const user = userResult.rows[0];
    const progressResult = await pool.query('SELECT course_id, lesson_id, completed FROM progress WHERE user_id=$1', [req.user.id]);
    const completedSet = new Set(progressResult.rows.filter(p => p.completed).map(p => `${p.course_id}-${p.lesson_id}`));
    const target = user.target_language;
    const level = user.level;
    const matched = courses
      .filter(c => c.language === target && c.level === level)
      .map(c => ({
        ...c,
        nextLesson: c.lessons.find(l => !completedSet.has(`${c.id}-${l.id}`)) || c.lessons[0]
      }));
    res.json(matched);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── 社区 ───
app.post('/api/community/posts', authMiddleware, async (req, res) => {
  try {
    const { title, content, language } = req.body;
    if (!title || !content) return res.status(400).json({ error: '标题和内容必填' });
    const result = await pool.query('INSERT INTO posts (user_id, title, content, language) VALUES ($1, $2, $3, $4) RETURNING id',
      [req.user.id, title, content, language || 'en']);
    res.json({ id: result.rows[0].id, success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/community/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT p.*, u.username FROM posts p JOIN users u ON p.user_id = u.id ORDER BY p.created_at DESC LIMIT 100');
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/community/posts/:id/comments', authMiddleware, async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) return res.status(400).json({ error: '评论内容不能为空' });
    const result = await pool.query('INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3) RETURNING id',
      [req.params.id, req.user.id, content]);
    res.json({ id: result.rows[0].id, success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/community/posts/:id/comments', async (req, res) => {
  try {
    const result = await pool.query('SELECT c.*, u.username FROM comments c JOIN users u ON c.user_id = u.id WHERE c.post_id=$1 ORDER BY c.created_at ASC',
      [req.params.id]);
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── 前端路由 ───
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// ─── 启动 ───
initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🌐 LinguaEdu Platform running at http://localhost:${PORT}`);
    if (process.env.DATABASE_URL) {
      console.log('✅ 已连接云数据库 PostgreSQL');
    } else {
      console.log('⚠️  未设置 DATABASE_URL，请配置 .env 文件连接云数据库');
    }
  });
}).catch(err => {
  console.error('❌ 数据库初始化失败:', err.message);
  console.error('请检查 DATABASE_URL 环境变量是否正确配置');
  process.exit(1);
});
