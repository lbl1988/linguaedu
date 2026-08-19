require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'lingua-edu-secret-key-2026';
const PORT = process.env.PORT || 3000;

// ─── 稳健地查找 public/ 静态目录 ───
// 在 Render / Docker / 本地开发中 __dirname / process.cwd() 可能不同，
// 统一用多个候选路径探测，找到真正包含 index.html 的那个。
function resolvePublicDir() {
  const candidates = [
    path.resolve(process.cwd(), 'public'),
    path.resolve(__dirname, '..', 'public'),
    path.resolve(__dirname, '..', '..', 'public'),
    path.resolve(process.cwd())              // 兼容：运行 cwd 本身就是 public 的情况
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p) && fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'index.html'))) {
        return p;
      }
    } catch (_) { /* 忽略，继续尝试下一个 */ }
  }
  return null;
}

function resolveRootDir() {
  // 项目根（有 package.json / server/ / public/ 等文件夹）
  const candidates = [
    path.resolve(process.cwd()),
    path.resolve(__dirname, '..'),
    path.resolve(__dirname, '..', '..')
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(path.join(p, 'package.json')) ||
          fs.existsSync(path.join(p, 'server', 'index.js'))) {
        return p;
      }
    } catch (_) {}
  }
  return path.resolve(__dirname, '..');
}

const PUBLIC_DIR = resolvePublicDir();
const ROOT_DIR = resolveRootDir();

const app = express();
app.use(cors());
app.use(express.json());

// ─────────────────────────────────────────────────────
// 🔒 安全先行：绝对禁止访问源代码 / 敏感配置文件
// ─────────────────────────────────────────────────────
const SENSITIVE_RE = new RegExp(
  '(^|/)(' + [
    'server', 'node_modules', '.git', '.github', '.vscode', '.idea',
    'scripts', 'tests', '__tests__', 'coverage', '.husky'
  ].join('|') + ')(/|$)',
  'i'
);
const SENSITIVE_EXTS_RE = /\.(js|mjs|cjs|ts|json|md|env|env\.[^./]+|log|yml|yaml|toml|sql|ini|config\.[^.]+)$/i;
const EXPLICIT_SENSITIVE_FILES = new Set([
  '/package.json', '/package-lock.json', '/yarn.lock', '/pnpm-lock.yaml',
  '/.env', '/.env.local', '/.env.production', '/.env.development',
  '/.gitignore', '/.gitattributes', '/README.md', '/DEPLOY.md',
  '/commit_msg.txt', '/tsconfig.json', '/jsconfig.json', '/.eslintrc',
  '/.eslintrc.js', '/.prettierrc', '/Dockerfile', '/render.yaml'
]);

app.use((req, res, next) => {
  const p = decodeURIComponent(req.path.split('?')[0]);
  if (EXPLICIT_SENSITIVE_FILES.has(p) ||
      SENSITIVE_RE.test(p) ||
      (SENSITIVE_EXTS_RE.test(p) && !/\.html?$/i.test(p))) {
    return res.status(403).type('text/plain').send('Forbidden');
  }
  next();
});

// ─── 显式首页路由（优先级最高，绕过 static 中间件） ───
function resolveIndexHtml() {
  const tries = [
    PUBLIC_DIR ? path.join(PUBLIC_DIR, 'index.html') : null,
    path.join(ROOT_DIR, 'public', 'index.html'),
    path.join(ROOT_DIR, 'index.html')
  ].filter(Boolean);
  for (const t of tries) {
    if (t && fs.existsSync(t)) return t;
  }
  return null;
}
function resolveHtmlFile(name) {
  const tries = [
    PUBLIC_DIR ? path.join(PUBLIC_DIR, name) : null,
    path.join(ROOT_DIR, 'public', name),
    path.join(ROOT_DIR, name)
  ].filter(Boolean);
  for (const t of tries) {
    if (t && fs.existsSync(t)) return t;
  }
  return null;
}

app.get(['/', '/index.html'], (req, res) => {
  const f = resolveIndexHtml();
  if (f) return res.sendFile(f);
  res.status(500).type('text/plain').send(
    'LinguaEdu: 未找到 index.html，请确认部署结构包含 public/index.html。' +
    '当前 PUBLIC_DIR=' + JSON.stringify(PUBLIC_DIR) + ' ROOT_DIR=' + JSON.stringify(ROOT_DIR)
  );
});

// 考试指南 / 备考规划（多路径查找，同时支持 public 内副本和项目根原文件）
app.get('/guide.html', (req, res) => {
  const f = resolveHtmlFile('guide.html');
  if (f) return res.sendFile(f);
  res.status(404).send('Guide page not found');
});
app.get('/plan.html', (req, res) => {
  const f = resolveHtmlFile('plan.html');
  if (f) return res.sendFile(f);
  res.status(404).send('Plan page not found');
});
app.get('/guide', (req, res) => res.redirect('/guide.html'));
app.get('/plan', (req, res) => res.redirect('/plan.html'));

// ─── 静态资源目录：只会服务 PUBLIC_DIR 下的文件 ───
if (PUBLIC_DIR) {
  app.use(express.static(PUBLIC_DIR, {
    index: false,        // 首页已由显式路由接管，避免 static 自动干涉 "/"
    dotfiles: 'ignore',
    extensions: ['html', 'htm']
  }));
  console.log('📂 静态目录:', PUBLIC_DIR);
} else {
  console.warn('⚠️  未找到 public/ 目录，将仅通过显式路由提供 HTML 页面；请确认部署文件完整。');
}

// ─── PostgreSQL 连接池（可降级为无DB模式） ───
let dbReady = false;
let dbError = null;
let pool = null;

if (process.env.DATABASE_URL) {
  try {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: /^postgres:\/\//.test(process.env.DATABASE_URL) &&
           !/localhost|127\.0\.0\.1/.test(process.env.DATABASE_URL)
        ? { rejectUnauthorized: false }
        : false
    });
    pool.on('error', (err) => {
      console.error('PostgreSQL Pool 错误:', err.message);
      dbReady = false;
      dbError = err.message;
    });
  } catch (e) {
    console.warn('⚠️  创建 Pool 失败，将以"无数据库降级模式"启动:', e.message);
    pool = null;
  }
} else {
  console.warn('⚠️  DATABASE_URL 环境变量未设置 —— 正在以"无数据库降级模式"启动');
  console.warn('    访客可以：浏览课程、观看直播、查看考试指南/备考规划');
  console.warn('    访客不可用：注册、登录、学习进度、笔记、社区（需要 PostgreSQL）');
}

// ─── 降级桩：未配置 DATABASE_URL 时，让 pool.query/pool.connect 返回可读错误而非崩溃 ───
if (!pool) {
  pool = {
    query: function () {
      return Promise.reject(new Error(
        'DB_NOT_AVAILABLE: PostgreSQL DATABASE_URL 未配置。' +
        '请在部署平台 Environment Variables 中添加 DATABASE_URL。' +
        '当前处于降级模式，仅静态内容可正常访问。'
      ));
    },
    connect: function () {
      return Promise.reject(new Error('DB_NOT_AVAILABLE: DATABASE_URL 未设置'));
    },
    on: function () {}
  };
}

// DB 就绪检查中间件 - 所有需要 DB 的路由统一使用
function requireDB(req, res, next) {
  if (!dbReady) {
    return res.status(503).json({
      error: '数据库服务暂不可用',
      hint: dbError || '请在部署平台（Render / Railway 等）的 Environment Variables 中配置 DATABASE_URL（PostgreSQL 连接串）',
      doc: '详细配置见 README.md 第 7 节「快速开始」'
    });
  }
  next();
}

// ─── 数据库初始化 ───
async function initDB() {
  if (!pool) {
    console.warn('ℹ️  跳过数据库初始化（DATABASE_URL 未配置），降级模式启动');
    return false;
  }
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
        user_id INTEGER NOT NULL,
        study_date TEXT NOT NULL,
        minutes INTEGER DEFAULT 0,
        xp INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
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
        user_id INTEGER NOT NULL REFERENCES users(id) UNIQUE,
        listening INTEGER DEFAULT 50,
        speaking INTEGER DEFAULT 50,
        reading INTEGER DEFAULT 50,
        writing INTEGER DEFAULT 50,
        vocabulary INTEGER DEFAULT 50,
        updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS reminder_settings (
        user_id INTEGER PRIMARY KEY REFERENCES users(id),
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
    dbReady = true;
    return true;
  } finally {
    client.release();
  }
}

// ─── 用户认证 ───
app.post('/api/auth/register', requireDB, async (req, res) => {
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

app.post('/api/auth/login', requireDB, async (req, res) => {
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
app.get('/api/user/profile', authMiddleware, requireDB, async (req, res) => {
  try {
    const result = await pool.query('SELECT id, username, email, native_language, target_language, level, created_at FROM users WHERE id = $1', [req.user.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: '用户不存在' });
    res.json(result.rows[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/user/profile', authMiddleware, requireDB, async (req, res) => {
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

// ─── 课程（100% 内存数据，不依赖 DB） ───
function loadCourses() {
  // 本地 require 缓存，出错时返回空数组兜底
  try {
    const m = require('./data/courses');
    return m.courses || [];
  } catch (e) {
    console.error('❌ 加载 courses.js 失败:', e.message);
    return [];
  }
}

app.get('/api/courses', (req, res) => {
  try {
    const lang = req.query.language;
    const courses = loadCourses();
    const filtered = lang ? courses.filter(c => c.language === lang) : courses;
    res.json(filtered);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// 注意：/search 和 /filters 必须在 /:courseId 之前定义，否则会被 :courseId 吞掉
app.get('/api/courses/search', (req, res) => {
  try {
    const courses = loadCourses();
    const { q, goal, language, level, duration, textbook } = req.query;
    let result = courses.slice();
    if (language) result = result.filter(c => c.language === language);
    if (level) result = result.filter(c => c.level === level);
    if (duration) result = result.filter(c => c.durationCategory === duration);
    if (textbook) result = result.filter(c => c.textbook === textbook);
    if (goal) result = result.filter(c => c.goals && c.goals.includes(goal));
    if (q) {
      const k = String(q).toLowerCase();
      result = result.filter(c =>
        (c.title || '').toLowerCase().includes(k) ||
        (c.description || '').toLowerCase().includes(k) ||
        Array.isArray(c.lessons) && c.lessons.some(l => (l.title || '').toLowerCase().includes(k))
      );
    }
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/courses/filters', (req, res) => {
  try {
    const courses = loadCourses();
    const textbooks = [...new Set(courses.map(c => c.textbook).filter(Boolean))];
    res.json({ textbooks });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/courses/:courseId', (req, res) => {
  try {
    const courses = loadCourses();
    const course = courses.find(c => c.id === req.params.courseId);
    if (!course) return res.status(404).json({ error: '课程不存在' });
    res.json(course);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/courses/:courseId/lessons/:lessonId', (req, res) => {
  try {
    const courses = loadCourses();
    const course = courses.find(c => c.id === req.params.courseId);
    if (!course) return res.status(404).json({ error: '课程不存在' });
    const lesson = (course.lessons || []).find(l => l.id === req.params.lessonId);
    if (!lesson) return res.status(404).json({ error: '课时不存在' });
    res.json(lesson);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── 学习进度（需 DB） ───
app.post('/api/progress', authMiddleware, requireDB, async (req, res) => {
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

app.get('/api/progress', authMiddleware, requireDB, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM progress WHERE user_id=$1', [req.user.id]);
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/stats', authMiddleware, requireDB, async (req, res) => {
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
  if (!dates || dates.length === 0) return 0;
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
  try {
    const completedResult = await pool.query('SELECT COUNT(*) as c FROM progress WHERE user_id=$1 AND completed=1', [userId]);
    const completedCount = parseInt(completedResult.rows[0].c) || 0;
    const xpResult = await pool.query('SELECT COALESCE(SUM(xp),0) as t FROM learning_stats WHERE user_id=$1', [userId]);
    const totalXp = parseInt(xpResult.rows[0].t) || 0;
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
  } catch (_) { /* 成就发放不阻塞主流程 */ }
}

app.get('/api/achievements', authMiddleware, requireDB, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM achievements WHERE user_id=$1 ORDER BY created_at DESC', [req.user.id]);
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── 个性化推荐 ───
app.get('/api/recommendations', authMiddleware, requireDB, async (req, res) => {
  try {
    const courses = loadCourses();
    const userResult = await pool.query('SELECT * FROM users WHERE id=$1', [req.user.id]);
    const user = userResult.rows[0];
    if (!user) return res.json([]);
    const progressResult = await pool.query('SELECT course_id, lesson_id, completed FROM progress WHERE user_id=$1', [req.user.id]);
    const completedSet = new Set(progressResult.rows.filter(p => p.completed).map(p => `${p.course_id}-${p.lesson_id}`));
    const target = user.target_language;
    const level = user.level;
    const matched = courses
      .filter(c => c.language === target && c.level === level)
      .map(c => ({
        ...c,
        nextLesson: (c.lessons || []).find(l => !completedSet.has(`${c.id}-${l.id}`)) || (c.lessons && c.lessons[0]) || null
      }));
    res.json(matched);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── 社区 ───
app.post('/api/community/posts', authMiddleware, requireDB, async (req, res) => {
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
  if (!dbReady) {
    // 降级：不需要登录即可看社区（返回空）
    return res.json([]);
  }
  try {
    const result = await pool.query('SELECT p.*, u.username FROM posts p JOIN users u ON p.user_id = u.id ORDER BY p.created_at DESC LIMIT 100');
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/community/posts/:id/comments', authMiddleware, requireDB, async (req, res) => {
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
  if (!dbReady) return res.json([]);
  try {
    const result = await pool.query('SELECT c.*, u.username FROM comments c JOIN users u ON c.user_id = u.id WHERE c.post_id=$1 ORDER BY c.created_at ASC',
      [req.params.id]);
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ===================== 入学水平测试 =====================
app.post('/api/placement/submit', authMiddleware, requireDB, async (req, res) => {
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

app.get('/api/placement/status', authMiddleware, requireDB, async (req, res) => {
  try {
    const result = await pool.query('SELECT placement_done, study_goal, learning_path, level FROM users WHERE id=$1', [req.user.id]);
    res.json(result.rows[0] || { placement_done: 0 });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/user/goal', authMiddleware, requireDB, async (req, res) => {
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
app.post('/api/lesson-quiz/submit', authMiddleware, requireDB, async (req, res) => {
  try {
    const { course_id, lesson_id, score, total } = req.body;
    const passed = score / total >= 0.6 ? 1 : 0;
    await pool.query(
      'INSERT INTO lesson_quiz_attempts (user_id, course_id, lesson_id, score, total, passed) VALUES ($1,$2,$3,$4,$5,$6)',
      [req.user.id, course_id, lesson_id, score, total, passed]
    );
    const abilityKey = ['listening', 'speaking', 'reading', 'writing', 'vocabulary'][Math.floor(Math.random() * 5)];
    await pool.query(
      `INSERT INTO ability_scores (user_id, ${abilityKey}) VALUES ($1, $2)
       ON CONFLICT (user_id) DO UPDATE SET ${abilityKey} = LEAST(100, ability_scores.${abilityKey} + $2), updated_at = CURRENT_TIMESTAMP`,
      [req.user.id, Math.max(1, Math.round((score / total) * 5))]
    );
    if (passed) {
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
    const courses = loadCourses();
    const course = courses.find(c => c.id === course_id);
    if (!course) return res.json({ unlocked: [] });
    const unlocked = [course.lessons[0].id];
    if (dbReady) {
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
    }
    res.json({ unlocked });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ===================== 单元综合测验 =====================
app.post('/api/unit-test/submit', authMiddleware, requireDB, async (req, res) => {
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
app.get('/api/ability', authMiddleware, requireDB, async (req, res) => {
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
app.post('/api/study-plan', authMiddleware, requireDB, async (req, res) => {
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

app.get('/api/study-plan', authMiddleware, requireDB, async (req, res) => {
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
app.post('/api/continue', authMiddleware, requireDB, async (req, res) => {
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

app.get('/api/continue', authMiddleware, requireDB, async (req, res) => {
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
app.post('/api/certificate/issue', authMiddleware, requireDB, async (req, res) => {
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

app.get('/api/certificates', authMiddleware, requireDB, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM certificates WHERE user_id=$1 ORDER BY issue_date DESC', [req.user.id]);
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ===================== 薄弱点 =====================
app.get('/api/weak-points', authMiddleware, requireDB, async (req, res) => {
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
app.get('/api/reminder', authMiddleware, requireDB, async (req, res) => {
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

app.put('/api/reminder', authMiddleware, requireDB, async (req, res) => {
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
app.get('/api/report/monthly', authMiddleware, requireDB, async (req, res) => {
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

// ─── 前端路由（SPA 兜底：找不到的 GET 请求都返回主应用） ───
app.get('*', (req, res) => {
  // 明确的静态 API 路径不触发 SPA 兜底
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API 路由不存在', path: req.path });
  }
  const candidates = [
    PUBLIC_DIR ? path.join(PUBLIC_DIR, req.path) : null,
    path.join(ROOT_DIR, 'public', req.path),
    path.join(ROOT_DIR, req.path)
  ].filter(Boolean);
  // 首先尝试真实文件
  for (const c of candidates) {
    try {
      if (fs.existsSync(c) && fs.statSync(c).isFile()) {
        return res.sendFile(c);
      }
    } catch (_) {}
  }
  // 否则返回主应用 index.html 交给前端路由
  const idx = resolveIndexHtml();
  if (idx) return res.sendFile(idx);
  res.status(404).send('LinguaEdu: 页面不存在，且未找到 index.html 主应用入口文件。请检查部署结构。');
});

// ─── 启动（任何情况下都尝试启动，确保网站至少能访问静态内容） ───
async function startServer() {
  try {
    const ok = await initDB();
    if (ok) {
      dbReady = true;
    }
  } catch (err) {
    console.warn('⚠️  数据库初始化异常（降级启动）:', err.message);
    dbReady = false;
    dbError = err.message;
  }

  // 启动前预加载一次课程（提前暴露语法错误）
  try {
    const n = loadCourses().length;
    console.log(`📘 预加载课程数据：${n} 门课程`);
  } catch (e) {
    console.error('❌ 课程数据预加载失败：', e.message);
  }

  app.listen(PORT, () => {
    console.log('');
    console.log('╔══════════════════════════════════════════════════════════════╗');
    console.log('║            🌐 LinguaEdu Platform 启动成功                    ║');
    console.log('╠══════════════════════════════════════════════════════════════╣');
    console.log(`║  📍 访问地址:   http://localhost:${PORT}`.padEnd(62) + '║');
    console.log(`║  💾 数据库:     ${dbReady ? '✅ PostgreSQL 已连接' : '⚠️  降级模式（未配置 DATABASE_URL）'}`.padEnd(62) + '║');
    console.log(`║  📂 静态目录:   ${PUBLIC_DIR || '⚠️  未找到，使用显式路由兜底'}`.padEnd(62) + '║');
    console.log(`║  📘 考试指南:   http://localhost:${PORT}/guide.html`.padEnd(62) + '║');
    console.log(`║  📋 备考规划:   http://localhost:${PORT}/plan.html`.padEnd(62) + '║');
    if (!dbReady) {
      console.log('║                                                              ║');
      console.log('║  提示：注册/登录/进度/社区功能需 PostgreSQL，配置方法见 README  ║');
    }
    console.log('╚══════════════════════════════════════════════════════════════╝');
    console.log('');
  });
}

startServer();
