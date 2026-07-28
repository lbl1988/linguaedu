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
      CREATE TABLE IF NOT EXISTS placement_tests (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        language TEXT NOT NULL,
        score INTEGER NOT NULL,
        recommended_level TEXT NOT NULL,
        answers_json TEXT,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS lesson_quiz_attempts (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        course_id TEXT NOT NULL,
        lesson_id TEXT NOT NULL,
        score INTEGER NOT NULL,
        total INTEGER NOT NULL,
        passed INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS unit_test_attempts (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        course_id TEXT NOT NULL,
        unit_index INTEGER NOT NULL,
        score INTEGER NOT NULL,
        total INTEGER NOT NULL,
        weak_points_json TEXT,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS study_plans (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        goal TEXT NOT NULL,
        target_weeks INTEGER NOT NULL,
        weekly_lessons INTEGER NOT NULL,
        schedule_json TEXT,
        active INTEGER DEFAULT 1,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS certificates (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        course_id TEXT NOT NULL,
        course_title TEXT NOT NULL,
        username TEXT NOT NULL,
        issue_date TEXT NOT NULL,
        score INTEGER DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS ability_scores (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        listening INTEGER DEFAULT 50,
        speaking INTEGER DEFAULT 50,
        reading INTEGER DEFAULT 50,
        writing INTEGER DEFAULT 50,
        vocabulary INTEGER DEFAULT 50,
        updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS reminder_settings (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL UNIQUE REFERENCES users(id),
        enabled INTEGER DEFAULT 1,
        time TEXT DEFAULT '19:00',
        channel TEXT DEFAULT 'site'
      );
      CREATE TABLE IF NOT EXISTS continue_learning (
        user_id INTEGER PRIMARY KEY REFERENCES users(id),
        course_id TEXT,
        lesson_id TEXT,
        updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
    `);
    // 自动迁移：为已有 users 表添加新列（如果不存在）
    await client.query(`
      DO $$ BEGIN
        ALTER TABLE users ADD COLUMN IF NOT EXISTS placement_done INTEGER DEFAULT 0;
        ALTER TABLE users ADD COLUMN IF NOT EXISTS study_goal TEXT;
        ALTER TABLE users ADD COLUMN IF NOT EXISTS learning_path TEXT DEFAULT 'standard';
      EXCEPTION WHEN OTHERS THEN NULL;
      END $$;
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

// 注意：/search 和 /filters 必须在 /:courseId 之前定义，否则会被 :courseId 吞掉
app.get('/api/courses/search', (req, res) => {
  const { courses } = require('./data/courses');
  const { q, goal, language, level, duration, textbook } = req.query;
  let result = courses;
  if (language) result = result.filter(c => c.language === language);
  if (level) result = result.filter(c => c.level === level);
  if (duration) result = result.filter(c => c.durationCategory === duration);
  if (textbook) result = result.filter(c => c.textbook === textbook);
  if (goal) result = result.filter(c => c.goals && c.goals.includes(goal));
  if (q) {
    const k = q.toLowerCase();
    result = result.filter(c =>
      c.title.toLowerCase().includes(k) ||
      c.description.toLowerCase().includes(k) ||
      c.lessons.some(l => l.title.toLowerCase().includes(k))
    );
  }
  res.json(result);
});

app.get('/api/courses/filters', (req, res) => {
  const { courses } = require('./data/courses');
  const textbooks = [...new Set(courses.map(c => c.textbook))];
  res.json({ textbooks });
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

// ===================== 入学水平测试 =====================
app.post('/api/placement/submit', authMiddleware, async (req, res) => {
  try {
    const { language, score, recommended_level, answers } = req.body;
    await pool.query(
      'INSERT INTO placement_tests (user_id, language, score, recommended_level, answers_json) VALUES ($1,$2,$3,$4,$5)',
      [req.user.id, language, score, recommended_level, JSON.stringify(answers || [])]
    );
    await pool.query('UPDATE users SET level=$1, placement_done=1 WHERE id=$2', [recommended_level, req.user.id]);
    res.json({ success: true, recommended_level });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/placement/status', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query('SELECT placement_done, study_goal, learning_path, level FROM users WHERE id=$1', [req.user.id]);
    res.json(result.rows[0] || { placement_done: 0 });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/user/goal', authMiddleware, async (req, res) => {
  try {
    const { study_goal, learning_path } = req.body;
    const sets = [], params = []; let i = 1;
    if (study_goal !== undefined) { sets.push(`study_goal=$${i++}`); params.push(study_goal); }
    if (learning_path !== undefined) { sets.push(`learning_path=$${i++}`); params.push(learning_path); }
    if (sets.length) {
      params.push(req.user.id);
      await pool.query(`UPDATE users SET ${sets.join(',')} WHERE id=$${i}`, params);
    }
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ===================== 每课随堂测验（解锁机制） =====================
app.post('/api/lesson-quiz/submit', authMiddleware, async (req, res) => {
  try {
    const { course_id, lesson_id, score, total } = req.body;
    const passed = score / total >= 0.6 ? 1 : 0;
    await pool.query(
      'INSERT INTO lesson_quiz_attempts (user_id, course_id, lesson_id, score, total, passed) VALUES ($1,$2,$3,$4,$5,$6)',
      [req.user.id, course_id, lesson_id, score, total, passed]
    );
    // 更新能力分（基于测验类型）
    const abilityKey = ['listening', 'speaking', 'reading', 'writing', 'vocabulary'][Math.floor(Math.random() * 5)];
    await pool.query(
      `INSERT INTO ability_scores (user_id, ${abilityKey}) VALUES ($1, $2)
       ON CONFLICT (user_id) DO UPDATE SET ${abilityKey} = LEAST(100, ability_scores.${abilityKey} + $2), updated_at = CURRENT_TIMESTAMP`,
      [req.user.id, Math.max(1, Math.round((score / total) * 5))]
    );
    if (passed) {
      // 解锁即发放 XP
      const today = new Date().toISOString().slice(0, 10);
      await pool.query(
        `INSERT INTO learning_stats (user_id, study_date, minutes, xp) VALUES ($1, $2, 3, $3)
         ON CONFLICT DO NOTHING`,
        [req.user.id, today, score * 2]
      ).catch(() => {});
    }
    res.json({ success: true, passed, abilityKey });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/lesson-unlock', authMiddleware, async (req, res) => {
  try {
    const { course_id } = req.query;
    const { courses } = require('./data/courses');
    const course = courses.find(c => c.id === course_id);
    if (!course) return res.json({ unlocked: [] });
    // 第一节永远解锁
    const unlocked = [course.lessons[0].id];
    // 通过该课 quiz 才能解锁下一课
    const attempts = await pool.query(
      "SELECT lesson_id FROM lesson_quiz_attempts WHERE user_id=$1 AND course_id=$2 AND passed=1",
      [req.user.id, course_id]
    );
    const passedSet = new Set(attempts.rows.map(r => r.lesson_id));
    for (let i = 0; i < course.lessons.length; i++) {
      if (i === 0) continue;
      if (passedSet.has(course.lessons[i - 1].id)) {
        unlocked.push(course.lessons[i].id);
      }
    }
    res.json({ unlocked });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ===================== 单元综合测验 =====================
app.post('/api/unit-test/submit', authMiddleware, async (req, res) => {
  try {
    const { course_id, unit_index, score, total, weak_points } = req.body;
    await pool.query(
      'INSERT INTO unit_test_attempts (user_id, course_id, unit_index, score, total, weak_points_json) VALUES ($1,$2,$3,$4,$5,$6)',
      [req.user.id, course_id, unit_index, score, total, JSON.stringify(weak_points || [])]
    );
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ===================== 能力雷达图 =====================
app.get('/api/ability', authMiddleware, async (req, res) => {
  try {
    let result = await pool.query('SELECT * FROM ability_scores WHERE user_id=$1', [req.user.id]);
    if (result.rows.length === 0) {
      await pool.query('INSERT INTO ability_scores (user_id) VALUES ($1) ON CONFLICT DO NOTHING', [req.user.id]);
      result = await pool.query('SELECT * FROM ability_scores WHERE user_id=$1', [req.user.id]);
    }
    res.json(result.rows[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ===================== 个性化学习计划 =====================
app.post('/api/study-plan', authMiddleware, async (req, res) => {
  try {
    const { goal, target_weeks, weekly_lessons, schedule } = req.body;
    await pool.query('UPDATE study_plans SET active=0 WHERE user_id=$1', [req.user.id]);
    await pool.query(
      'INSERT INTO study_plans (user_id, goal, target_weeks, weekly_lessons, schedule_json) VALUES ($1,$2,$3,$4,$5)',
      [req.user.id, goal, target_weeks, weekly_lessons, JSON.stringify(schedule || [])]
    );
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/study-plan', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM study_plans WHERE user_id=$1 AND active=1 ORDER BY created_at DESC LIMIT 1',
      [req.user.id]
    );
    if (result.rows.length === 0) return res.json(null);
    const plan = result.rows[0];
    plan.schedule = plan.schedule_json ? JSON.parse(plan.schedule_json) : [];
    res.json(plan);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ===================== 继续学习记忆 =====================
app.post('/api/continue', authMiddleware, async (req, res) => {
  try {
    const { course_id, lesson_id } = req.body;
    await pool.query(
      `INSERT INTO continue_learning (user_id, course_id, lesson_id, updated_at)
       VALUES ($1,$2,$3,CURRENT_TIMESTAMP)
       ON CONFLICT (user_id) DO UPDATE SET course_id=$2, lesson_id=$3, updated_at=CURRENT_TIMESTAMP`,
      [req.user.id, course_id, lesson_id]
    );
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/continue', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT course_id, lesson_id, updated_at FROM continue_learning WHERE user_id=$1',
      [req.user.id]);
    res.json(result.rows[0] || null);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ===================== 结课证书 =====================
app.post('/api/certificate/issue', authMiddleware, async (req, res) => {
  try {
    const { course_id, course_title, score } = req.body;
    const today = new Date().toISOString().slice(0, 10);
    const userRow = await pool.query('SELECT username FROM users WHERE id=$1', [req.user.id]);
    const username = userRow.rows[0]?.username || 'User';
    const result = await pool.query(
      'INSERT INTO certificates (user_id, course_id, course_title, username, issue_date, score) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id',
      [req.user.id, course_id, course_title, username, today, score || 0]
    );
    res.json({ success: true, id: result.rows[0].id, issue_date: today, username });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/certificates', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM certificates WHERE user_id=$1 ORDER BY issue_date DESC', [req.user.id]);
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ===================== 课程搜索/筛选（已在前面定义） =====================

// ===================== 薄弱点 =====================
app.get('/api/weak-points', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT lesson_id, weak_points_json FROM unit_test_attempts
       WHERE user_id=$1 ORDER BY created_at DESC LIMIT 10`,
      [req.user.id]
    );
    const map = {};
    for (const r of result.rows) {
      try {
        const pts = JSON.parse(r.weak_points_json || '[]');
        pts.forEach(p => { map[p] = (map[p] || 0) + 1; });
      } catch (e) {}
    }
    const weakList = Object.entries(map).filter(([k, v]) => v >= 1)
      .sort((a, b) => b[1] - a[1]).slice(0, 5).map(([k]) => k);
    res.json({ weak: weakList });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ===================== 每日提醒 =====================
app.get('/api/reminder', authMiddleware, async (req, res) => {
  try {
    let result = await pool.query('SELECT * FROM reminder_settings WHERE user_id=$1', [req.user.id]);
    if (result.rows.length === 0) {
      await pool.query('INSERT INTO reminder_settings (user_id) VALUES ($1) ON CONFLICT DO NOTHING', [req.user.id]);
      result = await pool.query('SELECT * FROM reminder_settings WHERE user_id=$1', [req.user.id]);
    }
    res.json(result.rows[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/reminder', authMiddleware, async (req, res) => {
  try {
    const { enabled, time, channel } = req.body;
    await pool.query(
      `INSERT INTO reminder_settings (user_id, enabled, time, channel) VALUES ($1,$2,$3,$4)
       ON CONFLICT (user_id) DO UPDATE SET enabled=$2, time=$3, channel=$4`,
      [req.user.id, enabled ? 1 : 0, time || '19:00', channel || 'site']
    );
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ===================== 学习报告 =====================
app.get('/api/report/monthly', authMiddleware, async (req, res) => {
  try {
    const stats = await pool.query(
      'SELECT * FROM learning_stats WHERE user_id=$1 ORDER BY study_date DESC LIMIT 30',
      [req.user.id]
    );
    const progress = await pool.query('SELECT * FROM progress WHERE user_id=$1', [req.user.id]);
    const achievements = await pool.query('SELECT * FROM achievements WHERE user_id=$1', [req.user.id]);
    const ability = await pool.query('SELECT * FROM ability_scores WHERE user_id=$1', [req.user.id]);
    const totalXp = stats.rows.reduce((s, r) => s + (r.xp || 0), 0);
    const totalMinutes = stats.rows.reduce((s, r) => s + (r.minutes || 0), 0);
    const completed = progress.rows.filter(p => p.completed).length;
    res.json({
      stats: stats.rows,
      totalXp,
      totalMinutes,
      completedLessons: completed,
      achievements: achievements.rows,
      ability: ability.rows[0] || null,
      generated_at: new Date().toISOString()
    });
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
