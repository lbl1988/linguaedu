# 🌍 LinguaEdu · 多语种沉浸式学习平台

> 让世界语言触手可及 — 一站式英语 / 日语 / 韩语 / 法语 / 德语 / 西班牙语 在线学习平台

**线上部署（兼容模式）**：纯前端 SPA + Node.js/Express 后端 + PostgreSQL 云数据库（Neon / Supabase / Railway / Render 等均可）。

**项目目标**：打造一个集**分级课程体系、互动式学习、AI 情景对话、智能学习计划、考试水平测试、学习成就激励、名师直播课堂、语言学习社区**于一体的沉浸式多语学习平台，对标 CEFR / JLPT / TOPIK 主流国际标准。

---

## 一、项目亮点速览

| 亮点 | 说明 |
|---|---|
| 🎯 **对标国际标准** | 英语 CEFR（A1–C2） / 日语 JLPT（N5–N1） / 韩语 TOPIK（1–6 级） / 法德西 DELE/DALF/歌德 全覆盖 |
| 📚 **分级课程体系** | 每门语言 A1–C2 六级课程结构，每级 6 单元，每单元 4 课（词汇/语法/对话/练习） |
| 🎮 **互动式学习** | 单词卡 SRS 间隔重复、选择题、拖曳搭配、口语跟读（Web Speech API）、AI 情景对话 |
| 📊 **进度追踪** | 学习数据仪表盘、能力雷达图（听/说/读/写/词汇）、XP 经验值、每日学习时长 |
| 🏅 **成就 & 证书** | 成就徽章系统、单元测试、结课电子证书（可下载 PNG）、学习报告自动生成 |
| 🎥 **名师双平台直播** | 🌐 YouTube 国际名师（Rachel's English、Japanese Ammo 等）+ 🇨🇳 B 站国内名师（英语兔、叶子先生酱、韩语养乐多等） |
| 👥 **社区 & 语伴** | 发帖、评论、语伴广场、找学习搭子、经验分享 |
| 🧠 **AI 辅助功能** | 水平测试自动分级、个性化学习计划生成、每日学习提醒 |
| 🧱 **云原生架构** | 后端 Express + JWT 认证 + PostgreSQL 持久化，支持 Render/Railway/Fly.io 一键部署 |

---

## 二、支持学习的语言 & 考试体系

LinguaEdu 目前重点支持 6 大主流外语，每门语言都有完整的分级课程、对应考试备考内容、名师直播资源。

| 语言 | 对应国际考试标准 | 完整分级 / 目标词汇量 | 考试备考专项 |
|---|---|---|---|
| 🇬🇧 **英语** | CEFR A1–C2 / IELTS / TOEFL / CET-4/6 / 剑桥五级 | A1（1000）→ C2（12000+） | 雅思 6.5+、托福 90+ 目标备考 |
| 🇯🇵 **日语** | JLPT N5–N1 / J-TEST | N5（800 词）→ N1（10000+ 词） | JLPT N2 / N1 冲刺 |
| 🇰🇷 **韩语** | TOPIK I（1–2 级）+ TOPIK II（3–6 级） | 1 级（800）→ 6 级（13000+） | TOPIK 4 / TOPIK 5 / 6 冲刺 |
| 🇫🇷 **法语** | CEFR / DELF（A1–B2）+ DALF（C1–C2） / TCF / TEF | A1（1000）→ C2（12000+） | DELF B2 / DALF C1 备考 |
| 🇩🇪 **德语** | CEFR / 歌德证书 A1–C2 / TestDaF / DSH | A1（1000）→ C2（12000+） | 德福 TDN4 / DSH-2 备考 |
| 🇪🇸 **西班牙语** | CEFR / DELE（A1–C2） / SIELE | A1（1000）→ C2（12000+） | DELE B2 / C1 备考 |

### 新增独立页面（v2026.8 更新）
- 📘 **[考试认证指南 guide.html](guide.html)**：CEFR / 雅思 / 托福 / JLPT / TOPIK / DELF / DALF / 歌德 / DELE 级别对照表、报名时间、用途介绍、通用 6 步报名流程、6 条黄金备考法则
- 📋 **[备考规划方案 plan.html](plan.html)**：3–12 个月三阶段（基础夯实期 → 专项突破期 → 冲刺模考期）、在职党每日 2 小时示范日程、6 大误区规避、工具推荐、快速提分 8 大招

---

## 三、功能模块一览

### 3.1 访客模式（无需登录）
- **首页**：Hero 宣传区、3 大特色卡片、6 大语言入口、功能介绍
- **课程中心**：浏览所有公开课程、按语言/难度筛选、查看课程详情与目录
- **名师直播课堂**：YouTube 国际 & B 站国内 双平台切换，22 门精选名师公开课
- **考试指南 & 备考规划**：独立静态页参考（见上一节）
- **注册 / 登录**：邮箱注册、JWT Token 7 天会话

### 3.2 登录后专属功能

| 模块 | 入口位置 | 核心能力 |
|---|---|---|
| 📊 **学习中心 Dashboard** | 导航栏 | 今日 XP、总学习时长、连续打卡天数、能力雷达图、继续上次学习卡片、最近成绩 |
| 🎯 **水平测试 Placement** | 首页快捷入口 | 15–20 题自适应测试，给出当前 CEFR / JLPT / TOPIK 级别建议、生成专属路径 |
| 📅 **学习计划 Study Plan** | 首页快捷入口 | 设定目标考试、周数、每周学习课数，生成自动排期表并支持每日打卡 |
| 🎭 **AI 情景对话** | 首页快捷入口 | 10+ 生活/商务情景（机场/餐厅/面试/酒店），脚本化练习与自由对话模式 |
| 📝 **单元测试 Unit Test** | 每课程 → 每单元末 | 每单元 20 题，生成错题标签分析、薄弱点建议、通过后自动解锁结课证书 |
| 🎥 **名师直播课堂** | 导航栏 | YouTube + Bilibili 双平台，22 门课程，支持讨论区、学习笔记、相关推荐 |
| 📈 **学习报告 Report** | 首页快捷入口 | 每周/每月学习时长、课时完成率、XP 趋势、薄弱能力项建议 |
| 🏅 **成就墙 Achievements** | 导航栏 | 解锁式成就徽章（首课完成/7 天连签/首证书/词汇达人等）+ 成就进度条 |
| 🎖️ **证书中心** | 首页快捷入口 | 完成课程即生成 PNG 电子证书（含编号/日期/成绩），可下载分享 |
| 🔔 **学习提醒** | 首页快捷入口 | 站内提醒设置、每日固定时段触发学习计划打卡 |
| 👥 **社区** | 导航栏 | 发帖/评论/语言标签过滤、经验分享、语伴招募 |

---

## 四、技术栈 & 架构

```
用户浏览器 (PC/Mobile)
    │
    ▼
┌─────────────────────────────────────────────┐
│ Express (Node.js) 服务端                     │
│  • 静态资源服务 (public/ 目录)               │
│  • RESTful API (/api/*)                      │
│  • JWT Token 无状态认证                      │
│  • bcryptjs 密码哈希                         │
└───────────────────────┬─────────────────────┘
                        │
                        ▼
          ┌─────────────────────────┐
          │   PostgreSQL 云数据库    │
          │   Neon / Supabase /      │
          │   Render / Railway 等    │
          └─────────────────────────┘
```

| 层级 | 技术选型 |
|---|---|
| **前端** | 纯静态 SPA（单文件 `index.html` 内嵌 Tailwind CDN + 原生 JS，0 打包 0 npm 依赖） |
| **UI** | Tailwind CSS（CDN） + Font Awesome 6 icons + 原生 CSS 动画 |
| **后端** | Node.js 18+ · Express.js 4.x · CORS 支持 |
| **认证** | JWT（`jsonwebtoken`，7 天有效期）+ 密码 bcryptjs 10 轮哈希 |
| **数据库** | PostgreSQL（`pg` 驱动），支持所有兼容 PostgreSQL 的云数据库 |
| **部署** | Render / Railway / Fly.io / 任何支持 Node.js 的平台；也可用 Docker 自托管 |

> 前端设计为**无构建零依赖 SPA**，直接由 Express.static 提供服务，省去 Vite/webpack 构建步骤，适合快速部署与二次开发。

---

## 五、项目结构

```
linguaedu/
├── public/
│   └── index.html              # 主站 SPA（内嵌所有页面 + 业务逻辑，164KB）
│                               # Pages: 首页/登录/注册/课程中心/课程详情/课时学习
│                               #        /Dashboard/成就/社区/水平测试/学习计划
│                               #        /情景对话/单元测试/直播列表/直播间
│                               #        /证书中心/学习报告/提醒设置
├── server/
│   ├── index.js                # Express 服务端入口（31KB）
│   │                             # 13 张表初始化 + 30+ REST API
│   └── data/
│       └── courses.js          # 课程数据（69KB）
│                               # 英/日/韩 × A1/C2/N5-N1/1-6级 × 分级课程 + 课时 + 练习题库
├── guide.html                  # 🆕 v2026.8 · 考试认证指南（独立静态页）
├── plan.html                   # 🆕 v2026.8 · 三阶段备考规划方案（独立静态页）
├── DEPLOY.md                   # 公网部署指南（Neon/Supabase + Render/Railway/Fly.io）
├── .env.example                # 环境变量模板（DATABASE_URL / JWT_SECRET / PORT）
├── package.json                # 后端依赖（express / pg / bcryptjs / jsonwebtoken / cors / dotenv）
├── package-lock.json
├── commit_msg.txt              # 上次主要更新日志
├── .gitignore
└── README.md                   # 本文档
```

---

## 六、数据模型（13 张表）

| 表名 | 用途 | 关键字段 |
|---|---|---|
| `users` | 用户账户 | id, username, email, password(bcrypt), native_language, target_language, level, placement_done, study_goal |
| `progress` | 课时级进度 | user_id, course_id, lesson_id, completed, score |
| `achievements` | 成就徽章 | user_id, title, description, icon |
| `posts` + `comments` | 社区帖子与评论 | user_id, title, content, language; 评论 post_id/user_id/content |
| `learning_stats` | 每日学习统计 | user_id, study_date, minutes, xp（驱动 XP 徽章与打卡） |
| `placement_tests` | 水平测试记录 | user_id, language, score, recommended_level, answers_json |
| `lesson_quiz_attempts` | 随堂测验 | user_id, course_id, lesson_id, score, total, passed |
| `unit_test_attempts` | 单元测试 | user_id, course_id, unit_index, score, weak_points_json |
| `study_plans` | 学习计划 | user_id, goal, target_weeks, weekly_lessons, schedule_json, active |
| `certificates` | 结课证书 | user_id, course_id, course_title, username, issue_date, score |
| `ability_scores` | 能力雷达 | user_id, listening/speaking/reading/writing/vocabulary 五维 |
| `reminder_settings` | 学习提醒 | user_id, enabled, time, channel |
| `continue_learning` | 继续学习卡片 | user_id, course_id, lesson_id, updated_at |

所有表在服务首次启动时由 `server/index.js` 中 `initDB()` 自动 `CREATE TABLE IF NOT EXISTS` 创建，无需手动迁移。

---

## 七、快速开始

### 前置条件
- Node.js ≥ 18
- 一个**可连接的 PostgreSQL 实例**（本地 Docker 安装或云端免费版皆可，见下）

### 获取免费 PostgreSQL（2 分钟）
- **Neon**（最简单推荐）：https://neon.tech → GitHub 登录 → New Project → 复制 `Connection String`
- **Supabase**：https://supabase.com → New Project → Project Settings → Database → Connection String
- **Render**（部署 + 数据库二合一）：https://render.com → New PostgreSQL

### 本地启动

```bash
# 1. 克隆 & 进入项目
git clone https://github.com/lbl1988/linguaedu.git
cd linguaedu

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp .env.example .env
# 然后编辑 .env，把 DATABASE_URL 替换成你自己的 PostgreSQL 连接串
# DATABASE_URL=postgresql://用户名:密码@ep-xxx.region.aws.neon.tech/linguaedu?sslmode=require

# 4. 启动
npm start
# 控制台看到：✅ 数据库表初始化完成 / 🌐 LinguaEdu Platform running at http://localhost:3000
```

浏览器打开 **http://localhost:3000**，注册账号即可开始学习。

---

## 八、REST API 速览（30+ endpoints）

所有需要登录的接口需加 Header：`Authorization: Bearer <token>`。

### 认证 `/api/auth/*`
| Method | Path | 说明 |
|---|---|---|
| POST | `/api/auth/register` | 注册：username/email/password/native_language/target_language → token+user |
| POST | `/api/auth/login` | 登录：login(用户名或邮箱)+password → token+user |
| GET  | `/api/auth/me` | 鉴权：获取当前用户信息 |

### 课程 `/api/courses*`
| Method | Path | 说明 |
|---|---|---|
| GET | `/api/courses` | 全部课程（支持 `?language=en` 查询） |
| GET | `/api/courses/:id` | 单课程详情 + 全部课时 |
| GET | `/api/courses/:id/lessons/:lessonId` | 单课时内容（词汇/语法/对话/练习） |
| POST | `/api/courses/:id/lessons/:lessonId/quiz` | 提交随堂测验 → 成绩 + 自动写 progress |

### 学习进度 & 数据
| Method | Path | 说明 |
|---|---|---|
| GET | `/api/stats` | Dashboard XP、总时长、连续打卡 |
| GET | `/api/continue` | 继续上次学习 → course_id + lesson_id |
| GET | `/api/ability` | 能力雷达图 5 维分数 |
| GET | `/api/report?range=week` | 学习报告（周/月） |
| GET | `/api/certificates` | 我的证书列表 |
| POST | `/api/unit-tests` | 提交单元测试 → 自动判定是否颁发证书 |

### 考试与计划
| Method | Path | 说明 |
|---|---|---|
| POST | `/api/placement` | 提交水平测试答案 → 推荐级别 + 写 placement_tests |
| POST | `/api/study-plans` | 创建学习计划 → 生成 schedule_json |
| PUT | `/api/study-plans/:id/daily` | 打卡每日计划 |
| GET | `/api/achievements` | 我的全部成就 + 自动解锁 |

### 社区与提醒
| Method | Path | 说明 |
|---|---|---|
| GET / POST | `/api/posts` | 社区帖子列表 + 发布（支持 `?language=ja` 过滤） |
| GET / POST | `/api/posts/:id/comments` | 帖子评论列表 + 评论 |
| GET / PUT | `/api/reminders` | 提醒设置查询 + 更新 |

详细 HTTP 状态码与返回结构，可直接启动后在浏览器 DevTools Network 面板查看实际请求体。

---

## 九、部署到公网

完整部署步骤（含 Neon/Supabase 云数据库 + Render/Railway/Fly.io 三种方案）详见 [DEPLOY.md](DEPLOY.md)。

**最快路径（Render 免费部署）**：
1. Push 代码到你的 GitHub 仓库
2. https://render.com → **New → Web Service** → 选仓库
3. **Build Command**: `npm install` · **Start Command**: `node server/index.js`
4. 添加环境变量：`DATABASE_URL`（连接串） + `JWT_SECRET`（随机长字符串）
5. Create → 等待 1–3 分钟部署完成，获得 `https://你的项目.onrender.com` 公网地址

---

## 十、考试与备考参考（LinguaEdu 独家）

这部分的详细内容请直接访问两个独立静态页：

| 页面 | 文件 | 内容概览 |
|---|---|---|
| 📘 考试认证指南 | `guide.html` | CEFR 6 级能力描述表 + 词汇量参考；IELTS 6.5 ≈ TOEFL 90 ≈ FCE ≈ CET-6 及格 分数对照；JLPT N5–N1 五级卡片（学时/词汇/语法）；TOPIK 1–6 级与留学要求；法/德/西 DELF/德福/DELE 简介；通用报名 6 步；6 条黄金备考法则 |
| 📋 备考规划方案 | `plan.html` | 6 大踩坑误区（死背单词/听力突击/裸考上考场等）；三阶段（基础 50% / 专项 35% / 冲刺 15%）详细任务与资源；在职每日 2 小时分段日程；周末 6–8 小时模考安排；8 类备考工具；快速提分 8 大招 |

---

## 十一、更新日志（重点）

### v2026.8 · 考试备考大版本
- 🆕 新增独立静态页 `guide.html`（全球主流语言考试认证全指南）
- 🆕 新增独立静态页 `plan.html`（三阶段备考方案 + 在职每日日程 + 误区规避）
- 📚 扩充课程数据 `server/data/courses.js`，所有语言课程增加"考试专项"单元
- 📘 完整重写 `README.md`，补齐：功能模块表 / 6 语言考试体系 / 13 张数据模型 / 30+ API 清单 / 快速开始 / 部署指南
- 🎥 保留并延续名师直播双平台（YouTube 国际 + B 站国内 22 门精选课）

### 更早版本
- **feat(直播课堂)**：名师双平台体系（YouTube 11 门国际课 + B 站 11 门国内课），支持语言 + 平台双重筛选、笔记本地持久化、讨论区、相关推荐
- **feat(落地功能补充清单)**：测评 / 引导 / 体验 / 导航 / 认证 五大模块全部上线（placement test、study plan、scenario、reminders、certificates、unit test、dashboard XP/雷达图等）
- **init**：LinguaEdu 多语种在线教育平台首个版本，Express + PostgreSQL

---

## 十二、开发 & 贡献指南

欢迎 Fork & PR！推荐贡献方向：

1. **内容贡献**：新增意大利语 / 俄语 / 阿拉伯语等小语种分级课程（`server/data/courses.js` 中按现有结构添加对象即可）
2. **功能贡献**：生词本导出 Anki、语音识别口语评分（集成 Whisper API）、语伴匹配算法优化
3. **考试专项**：继续完善更多语种（如 DELE 分级详细介绍、德福 TDN 分数对应）、真题解析页面
4. **部署相关**：Dockerfile、docker-compose（含 postgres）、一键 flyctl launch 脚本

本地开发建议：
```bash
npm run dev    # package.json 中 start/dev 都指向 node server/index.js，可按需替换成 nodemon
```

---

## 十三、说明与免责

- 🎥 **视频资源**：直播课堂板块的 YouTube / B 站视频均为嵌入第三方内容，版权归 UP 主 / 原作者所有，仅供学习交流使用。
- 🌐 **考试信息**：JLPT / TOPIK / IELTS / 剑桥 / 歌德 / 塞万提斯等考试具体时间、考点、报名方式请以各官方机构最新公告为准，`guide.html` 信息仅供参考。
- 🔒 **密码安全**：生产环境务必修改 `.env` 中的 `JWT_SECRET`，避免默认密钥泄漏导致会话伪造。
- 💾 **数据备份**：所有用户数据存储在 PostgreSQL，建议定期 `pg_dump` 备份（Neon 自带 Point-in-time 恢复，Supabase 有每日自动备份）。
- 📱 **移动端**：全站响应式布局，手机端可直接使用；但口语跟读、AI 情景对话建议用支持 Web Speech API 的浏览器（Chrome / Edge / Safari）。

---

## License

MIT License © 2026 LinguaEdu Platform
