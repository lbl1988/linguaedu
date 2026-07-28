# LinguaEdu 公网部署指南

本项目已从本地 SQLite 迁移到 **PostgreSQL 云数据库**，支持部署到公网让全球用户访问。

---

## 一、获取免费云数据库（2分钟）

### 方案 A: Neon（推荐，最简单）

1. 打开 https://neon.tech 注册账号（可用 GitHub 登录）
2. 点击 **New Project** → 创建数据库
3. 在 Dashboard 找到 **Connection String**，复制类似：
   ```
   postgresql://neondb:password@ep-xxx-xxx.aws.neon.tech/linguaedu?sslmode=require
   ```
4. 保存好这个连接字符串

### 方案 B: Supabase

1. 打开 https://supabase.com 注册
2. 创建新项目 → 设置数据库密码
3. 在 **Project Settings → Database** 找到连接字符串

### 方案 C: Railway

1. 打开 https://railway.app 注册
2. New Project → Provision PostgreSQL
3. 在 Variables 标签页找到 `DATABASE_URL`

---

## 二、本地连接云数据库测试

```bash
# 1. 复制环境变量模板
cp .env.example .env

# 2. 编辑 .env，填入你的云数据库连接字符串
#    DATABASE_URL=postgresql://用户名:密码@主机地址:5432/数据库名

# 3. 启动
npm start
```

看到以下输出说明连接成功：
```
✅ 数据库表初始化完成
🌐 LinguaEdu Platform running at http://localhost:3000
✅ 已连接云数据库 PostgreSQL
```

---

## 三、部署到公网

### 方案 A: Render（推荐，免费）

1. 将代码推送到 GitHub 仓库
2. 打开 https://render.com → **New → Web Service**
3. 连接你的 GitHub 仓库
4. 配置：
   - **Build Command**: `npm install`
   - **Start Command**: `node server/index.js`
5. 添加环境变量：
   - `DATABASE_URL` = 你的云数据库连接字符串
   - `JWT_SECRET` = 一个随机密钥字符串
6. 点击 **Create Web Service**
7. 等待部署完成，获得公网地址如 `https://linguaedu.onrender.com`

### 方案 B: Railway

1. 打开 https://railway.app → **New Project → Deploy from GitHub**
2. 选择仓库
3. 添加环境变量 `DATABASE_URL` 和 `JWT_SECRET`
4. 自动构建部署，获得公网地址

### 方案 C: Fly.io

```bash
# 安装 flyctl
npm install -g flyctl

# 登录并部署
fly launch
fly deploy
```

---

## 四、环境变量说明

| 变量名 | 必填 | 说明 |
|--------|------|------|
| `DATABASE_URL` | ✅ | PostgreSQL 云数据库连接字符串 |
| `JWT_SECRET` | 推荐 | JWT 签名密钥，生产环境务必修改 |
| `PORT` | 否 | 服务端口，部署平台自动注入 |

---

## 五、架构说明

```
用户浏览器 (全球)
    ↓ HTTPS
公网部署平台 (Render/Railway/Fly.io)
    ↓ Node.js + Express
云数据库 (Neon/Supabase/PostgreSQL)
```

- **数据库**: PostgreSQL（云端，持久化存储）
- **后端**: Node.js + Express（部署平台托管）
- **前端**: 静态 HTML/JS（由 Express 直接服务）
- **认证**: JWT Token（无状态，适合分布式部署）
