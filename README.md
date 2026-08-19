# 🌍 LinguaEdu · 多语种沉浸式学习平台

> 让世界语言触手可及 — 一站式英语 / 日语 / 韩语 / 法语 / 德语 / 西班牙语 在线学习平台

**立即体验（线上已部署）**：👉 **<https://linguaedu-1.onrender.com/>**（Render 静态站 + 离线模式，首次打开即可浏览全部课程与直播课内容，注册登录走本地 LocalStorage，无需等待后端）

**架构说明**：支持两种部署模式
- ✅ **纯静态站点（离线降级）**：直接部署 `public/` 目录即可运行（Render Static Site / GitHub Pages / Vercel / Nginx 等），注册、登录、学习进度、XP、成就、社区发帖全部通过浏览器 LocalStorage 持久化。
- 🧱 **带后端完整版**：纯前端 SPA + Node.js/Express 后端 + PostgreSQL 云数据库（Neon / Supabase / Railway / Render 等均可），30+ REST API 与 13 张业务表全部启用。

**项目目标**：打造一个集**分级课程体系、互动式学习、AI 情景对话、智能学习计划、考试水平测试、学习成就激励、名师直播课堂、语言学习社区**于一体的沉浸式多语学习平台，对标 CEFR / JLPT / TOPIK 主流国际标准。

---

## 一、线上使用速览

无需部署，直接打开 **<https://linguaedu-1.onrender.com/>** 即可使用。

| 你想做什么 | 入口位置 | 说明 |
|---|---|---|
| 🔍 **浏览课程 / 考试指南** | 首页 / 导航栏「课程中心」「📘 考试指南」「📋 备考规划」 | **无需登录**，24 门分级课程 + 6 大语种 + 8 种考试备考专项，直接查阅 |
| 🎥 **看名师直播课** | 导航栏「直播」 | 国内 B 站 + 国际 YouTube 双平台，22 门公开课；YouTube 课通过"新标签打开"方式播放，避免 Google 登录限制 |
| ✨ **免费注册账号** | 右上角「免费注册」 | 纯前端离线模式（LocalStorage），10 秒完成注册，保存 XP、笔记、进度、成就、发帖记录 |
| 📊 **查看学习中心** | 登录后 → 导航栏「学习中心」 | 总 XP / 连续打卡 / 能力雷达图 / 继续上次学习 / 学习路径 / 学习记录 |
| 🏆 **考级与成就** | 登录后 → 导航栏「成就」 | 雅思 6.0→6.5 / JLPT N3→N2 / TOPIK 3→4 考级进度；🥉青铜/🥈白银/🥇黄金/💎钻石徽章等级体系；个人成就墙 |
| 💬 **学习社区** | 登录后 → 导航栏「社区」 | 官方「精品学习心得」专区 + 用户自由分享 + 按语言标签 + 评论 + **一键发帖** |
| 📝 **课堂学习笔记 / 讨论** | 任意直播间页面下方 | 每节课独立本地持久化，下次进入自动加载；完成 YouTube 直播课点击「标记完成学习 +50 XP」立即奖励经验 |

> 💡 小贴士：当前线上版本（Render 静态站）所有数据保存在你本机浏览器 LocalStorage 中；清除浏览器数据会丢失本地 XP/笔记/发帖，若希望数据跨设备同步，建议按「九、部署到公网」配置 PostgreSQL 后端 + JWT 鉴权的 Web Service 模式。

---

## 二、项目亮点速览

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
| 📊 **学习中心 Dashboard** | 导航栏 | 今日 XP、总学习时长、连续打卡天数、能力雷达图、继续上次学习卡片、学习路径选择（标准/快速/精讲）、学习记录表 |
| 🎯 **水平测试 Placement** | 首页快捷入口 | 15–20 题自适应测试，给出当前 CEFR / JLPT / TOPIK 级别建议、生成专属路径 |
| 📅 **学习计划 Study Plan** | 首页快捷入口 | 设定目标考试、周数、每周学习课数，生成自动排期表并支持每日打卡 |
| 🎭 **AI 情景对话** | 首页快捷入口 | 10+ 生活/商务情景（机场/餐厅/面试/酒店），脚本化练习与自由对话模式 |
| 📝 **单元测试 Unit Test** | 每课程 → 每单元末 | 每单元 20 题，生成错题标签分析、薄弱点建议、通过后自动解锁结课证书 |
| 🎥 **名师直播课堂** | 导航栏 | YouTube（缩略图+新标签播放，无 Google 登录限制）+ Bilibili 双平台，22 门课程，支持讨论区（本地持久化）、学习笔记（本地持久化）、相关推荐、+50 XP 完成打卡按钮 |
| 📈 **学习报告 Report** | 首页快捷入口 | 每周/每月学习时长、课时完成率、XP 趋势、薄弱能力项建议 |
| 🏆 **成就页（考级+徽章）** | 导航栏「成就」 | **考级进度卡**（雅思/JLPT/TOPIK 目标→当前→进度→考试日期）+ **徽章等级体系**（🥉青铜/🥈白银/🥇黄金/💎钻石按 XP 解锁）+ **我的成就墙**（首课完成/连签7天/学霸等） |
| 🎖️ **证书中心** | 首页快捷入口 | 完成课程即生成 PNG 电子证书（含编号/日期/成绩），可下载分享 |
| 🔔 **学习提醒** | 首页快捷入口 | 站内提醒设置、每日固定时段触发学习计划打卡 |
| 💬 **社区（精品+自由发帖）** | 导航栏「社区」 | **精品学习心得专区**（官方精选 3 篇：雅思 8.0 / JLPT N1 / TOPIK 4 冲刺）+ **最新分享** + 一键发布新帖（7 种语言标签）+ 评论系统（均本地持久化） |

### 3.3 纯静态站离线模式 & LocalStorage 数据清单

即使没有后端 PostgreSQL，以下功能也能 100% 工作（数据全部保存在浏览器 `localStorage.*lingua_*` 下）：

| Key | 用途 |
|---|---|
| `lingua_users` | 离线注册的用户表（密码 btoa 哈希） |
| `lingua_token` / `lingua_active_token` | 7 天会话 Token |
| `lingua_user` | 当前登录用户（总 XP、等级、母语、目标语言） |
| `lingua_progress` | 课程/课时级完成进度 + score |
| `lingua_certificates` | 个人结课证书列表 |
| `lingua_posts` | 社区所有帖子（含精品 + 用户自己发的分享 + 评论） |
| `live_note_<id>` | 每节直播课的学习笔记 |
| `live_chat_<id>` | 每节直播课的讨论区消息（课堂讨论） |
| `live_watched_<id>` | 直播课完成状态（已完成的不再重复 +XP） |
| `lingua_reminder` | 学习提醒开关与时间 |

> 设计原则：**先能用，后完备** — 线上部署先保证内容浏览与学习体验闭环；配置好后端后，所有 /api/* 调用会自动从 LocalStorage 切回 PostgreSQL，无需改动前端代码。

---

## 四、技术栈 & 架构

项目为**双模式架构**，既能作为纯静态 SPA 零后端运行，也能搭配 Express + PostgreSQL 启用完整后端能力：

```
模式 A · 纯静态站（离线降级）                    模式 B · 完整版（带后端）
─────────────────────────────                   ─────────────────────────────
用户浏览器                                        用户浏览器
   │                                                │
   ▼                                                ▼
┌──────────────────────┐                    ┌─────────────────────────────────────────────┐
│ public/index.html     │                    │ Express (Node.js) 服务端                     │
│  • FALLBACK_COURSES   │◀── 内嵌兜底数据 ──▶│  • 静态资源服务 (public/ 目录)               │
│    + FALLBACK_FILTERS │                    │  • RESTful API (/api/*)                      │
│  • api.get() 自动降级 │                    │  • JWT Token 无状态认证                      │
│    fetch失败 → 返回   │                    │  • bcryptjs 密码哈希                         │
│    内嵌兜底 + LocalDB │                    │  • 多路径探测 public/ + 安全中间件           │
│  • LocalStorage 持久化│                    └───────────────────────┬─────────────────────┘
└──────────────────────┘                                            │
        │                                                           ▼
        └── 可部署到：Render Static Site /          ┌─────────────────────────┐
            GitHub Pages / Vercel / Nginx          │   PostgreSQL 云数据库    │
                                                   │   Neon / Supabase /      │
                                                   │   Render / Railway 等    │
                                                   └─────────────────────────┘
```

| 层级 | 技术选型 |
|---|---|
| **前端** | 纯静态 SPA（单文件 `index.html` 内嵌 Tailwind CDN + 原生 JS，0 打包 0 npm 依赖） |
| **UI** | Tailwind CSS（CDN） + Font Awesome 6 icons + 原生 CSS 动画 |
| **后端** | Node.js 18+ · Express.js 4.x · CORS 支持 · 数据库连接失败时**降级启动**仍可提供静态页面 |
| **认证** | JWT（`jsonwebtoken`，7 天有效期）+ 密码 bcryptjs 10 轮哈希；静态站模式使用 LocalStorage |
| **数据库** | PostgreSQL（`pg` 驱动），支持所有兼容 PostgreSQL 的云数据库 |
| **部署** | Render（Web Service 或 Static Site 二选一）/ Railway / Fly.io / GitHub Pages / 任何支持 Node.js 的平台；也可用 Docker 自托管 |
| **静态站发布配置** | 项目根目录内置 `render.yaml`，声明 Static Site → `public/` Publish Directory |

> 前端设计为**无构建零依赖 SPA**，直接由 Express.static 提供服务，省去 Vite/webpack 构建步骤，适合快速部署与二次开发。
> 当 `/api/*` 请求失败（静态站或后端挂了）时，前端会自动切到 `FALLBACK_*` 内嵌数据 + LocalStorage 模式，保证用户能浏览课程、注册账号、完成学习闭环。

---

## 五、项目结构

```
linguaedu/
├── public/
│   ├── index.html              # 主站 SPA（内嵌所有页面 + 业务逻辑 + FALLBACK_COURSES/FALLBACK_FILTERS）
│   │                           # Pages: 首页/登录/注册/课程中心/课程详情/课时学习
│   │                           #        /Dashboard/成就/社区/水平测试/学习计划
│   │                           #        /情景对话/单元测试/直播列表/直播间
│   │                           #        /证书中心/学习报告/提醒设置
│   ├── guide.html              # 🆕 v2026.8 · 考试认证指南（复制自项目根，静态站可访问）
│   └── plan.html               # 🆕 v2026.8 · 三阶段备考规划方案（复制自项目根，静态站可访问）
├── server/
│   ├── index.js                # Express 服务端入口
│   │                           # • 数据库失败时降级启动（static 模式）
│   │                           # • 多路径探测 public/ 目录
│   │                           # • 安全中间件屏蔽敏感路径
│   │                           # • 13 张表初始化 + 30+ REST API
│   └── data/
│       └── courses.js          # 课程数据（24 门分级课程 + 考试专项 + 情景剧本）
├── guide.html                  # 🆕 v2026.8 · 考试认证指南（独立静态页源码）
├── plan.html                   # 🆕 v2026.8 · 三阶段备考规划方案（独立静态页源码）
├── render.yaml                 # 🆕 v2026.8 · Render 静态站部署声明（Publish: public/）
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

### 方式 1：零配置 · 直接打开 / 纯静态预览（最快，无需数据库、无需 npm）

```bash
# 克隆后直接双击 public/index.html 即可体验完整功能
# 或用任意静态服务器（任选其一）
npx serve public/                 # 访问 http://localhost:3000
# 或
python -m http.server 3000 --directory public
```

即可浏览所有课程 + 注册/登录（LocalStorage）+ 成就/社区/学习中心 XP 体系闭环；相当于 https://linguaedu-1.onrender.com/ 的本地副本。

### 方式 2：带后端完整模式（Express + PostgreSQL，数据跨设备同步）

#### 前置条件
- Node.js ≥ 18
- 一个**可连接的 PostgreSQL 实例**（本地 Docker 安装或云端免费版皆可，见下）
  - 如果暂时没有 PostgreSQL，也可以只配 `JWT_SECRET`，Express 会自动以"降级模式"启动，只提供静态资源（效果等同于方式 1），数据库连通后会自动恢复 API。

#### 获取免费 PostgreSQL（2 分钟）
- **Neon**（最简单推荐）：https://neon.tech → GitHub 登录 → New Project → 复制 `Connection String`
- **Supabase**：https://supabase.com → New Project → Project Settings → Database → Connection String
- **Render**（部署 + 数据库二合一）：https://render.com → New PostgreSQL

#### 本地启动

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
# JWT_SECRET=一个足够长的随机字符串（生产环境必改！）

# 4. 启动
npm start
# 正常：✅ 数据库表初始化完成 / 🌐 LinguaEdu Platform running at http://localhost:3000
# 降级：⚠️  数据库未就绪，已以静态资源模式启动（仍可正常浏览）
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

完整部署步骤（含 Neon/Supabase 云数据库 + Render/Railway/Fly.io 三种 Web Service 方案）详见 [DEPLOY.md](DEPLOY.md)。

本项目支持 **两种 Render 部署方案**，当前在线体验站 <https://linguaedu-1.onrender.com/> 采用「方案 A · 静态站」。

### 方案 A：Render 静态站（零后端，最快 30 秒上线） ← 线上当前方案

`render.yaml` 已内置在仓库根目录，连接 GitHub 后 Render 会自动识别：

```yaml
services:
  - type: static
    name: linguaedu
    buildCommand: ""           # 无需构建
    publishDir: public/        # SPA + guide.html + plan.html 全部在此
```

**部署步骤**：
1. Push 代码到 GitHub
2. https://render.com → **New → Static Site** → 选仓库
3. Build Command 留空 · **Publish Directory: `public`**
4. Create → 10 秒内即可得到 `https://<项目名>.onrender.com`
5. 🎉 立即获得：课程浏览 + 注册 + XP + 成就 + 社区发帖（全部 LocalStorage 持久化）

### 方案 B：Render Web Service（带 PostgreSQL 后端，数据跨设备同步）

1. Push 代码到你的 GitHub 仓库
2. https://render.com → **New → Web Service** → 选仓库
3. **Build Command**: `npm install` · **Start Command**: `node server/index.js`
4. 添加环境变量：
   - `DATABASE_URL`：Neon / Supabase / Render PostgreSQL 连接串
   - `JWT_SECRET`：随机长字符串（openssl rand -hex 32 生成）
5. Create → 等待 1–3 分钟部署完成，获得 `https://你的项目.onrender.com` 公网地址

> 💡 方案 B 优势：所有 `/api/*` 调用自动走 PostgreSQL + JWT，跨设备登录 XP、进度、证书、帖子一致；数据库失败时 Express 也会以降级模式启动，不影响静态内容访问。

---

## 十、考试与备考参考（LinguaEdu 独家）

这部分的详细内容请直接访问两个独立静态页（线上版地址）：

| 页面 | 线上直接访问 | 源码 | 内容概览 |
|---|---|---|---|
| 📘 考试认证指南 | <https://linguaedu-1.onrender.com/guide.html> | `public/guide.html` | CEFR 6 级能力描述表 + 词汇量参考；IELTS 6.5 ≈ TOEFL 90 ≈ FCE ≈ CET-6 及格 分数对照；JLPT N5–N1 五级卡片（学时/词汇/语法）；TOPIK 1–6 级与留学要求；法/德/西 DELF/德福/DELE 简介；通用报名 6 步；6 条黄金备考法则 |
| 📋 备考规划方案 | <https://linguaedu-1.onrender.com/plan.html> | `public/plan.html` | 6 大踩坑误区（死背单词/听力突击/裸考上考场等）；三阶段（基础 50% / 专项 35% / 冲刺 15%）详细任务与资源；在职每日 2 小时分段日程；周末 6–8 小时模考安排；8 类备考工具；快速提分 8 大招 |

---

## 十一、更新日志（重点）

### v2026.8.x · 线上可用性 + 体验收口（当前线上已生效）
- 🌐 **线上固定访问地址**：<https://linguaedu-1.onrender.com/>（Render 静态站，README 顶部置顶）
- 🧱 **双模式架构落地**：前端内嵌 `FALLBACK_COURSES/FALLBACK_FILTERS`；`api.get()` fetch 失败自动降级，保证无后端时完整浏览 24 门课 + 22 门直播课
- 🛡️ **后端降级启动**：`server/index.js` 数据库连接失败不再崩溃，自动以静态资源模式启动 + 多路径探测 `public/` + 安全中间件屏蔽敏感文件
- ✍️ **LocalStorage 离线认证**：纯静态站模式下注册、登录、XP、进度、证书、提醒全部工作；对应 3.3 节完整 key 清单
- 📊 **三页面内容差异化重写**：
  - Dashboard：总 XP + 连签 + 能力雷达 + 继续学习 + 学习路径（标准/快速/精讲）+ 学习记录表
  - Achievements：考级进度（雅思/JLPT/TOPIK）+ 徽章等级体系（🥉🥈🥇💎）+ 我的成就墙
  - Community：官方精品学习心得专区（3 篇精选）+ 最新分享 + 一键发帖 + 评论
- 🎥 **YouTube 播放方案**：取消 iframe 嵌入（会触发 Google 登录限制），改为显示 `img.youtube.com` 视频缩略图 + "新标签打开 YouTube"按钮 + "标记完成学习 +50 XP" 完成打卡
- 🪙 **XP 徽章统一刷新**：导航栏 XP 在每次 `render()` 时通过 `/api/stats`（或离线 stats()）重新拉取，切换任何页面都不再停留在"加载中…"
- 📄 **静态站入口补齐**：`guide.html` / `plan.html` 同步复制到 `public/`，Render Static Site 模式下也能直接访问
- ⚙️ **Render 静态站声明**：新增 `render.yaml`（type: static，publishDir: public/），一键完成零后端部署

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

- 🎥 **视频资源**：直播课堂板块的 YouTube / B 站视频均为嵌入或链接跳转第三方内容，版权归 UP 主 / 原作者所有，仅供学习交流使用。YouTube 课程通过"缩略图 + 新标签打开"方式访问，无需在本站登录 Google 账号。
- 🌐 **考试信息**：JLPT / TOPIK / IELTS / 剑桥 / 歌德 / 塞万提斯等考试具体时间、考点、报名方式请以各官方机构最新公告为准，`guide.html` 信息仅供参考。
- 🔒 **密码安全**：生产环境（Web Service 模式）务必修改 `.env` 中的 `JWT_SECRET`，避免默认密钥泄漏导致会话伪造；静态站模式下密码使用浏览器 btoa 哈希，仅用于单机离线验证，请勿与真实账号密码复用。
- 💾 **数据备份**：
  - **PostgreSQL 后端（方案 B）**：所有用户数据存储在 PostgreSQL，建议定期 `pg_dump` 备份（Neon 自带 Point-in-time 恢复，Supabase 有每日自动备份）。
  - **静态站（方案 A / 线上体验版）**：所有数据保存在浏览器 LocalStorage（`lingua_*` 系列 Key），**换浏览器或清除浏览器数据会丢失**。需要跨设备长期保存的用户，请按「九、部署方案 B」自建后端。
- 📱 **移动端**：全站响应式布局，手机端可直接使用；但口语跟读、AI 情景对话建议用支持 Web Speech API 的浏览器（Chrome / Edge / Safari）。
- 🔗 **静态站 404 兜底说明**：`render.yaml` 发布的静态站使用 hash 路由（`#/dashboard` 等），直接分享 `#/` 前缀的链接到任何浏览器都能正确跳转到对应页面；不要去掉 `#/`。

---

## License

MIT License © 2026 LinguaEdu Platform
