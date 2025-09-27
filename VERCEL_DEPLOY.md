# EduPlatform - Vercel Deployment Guide

## 🚀 Deploy to Vercel

### Bước 1: Chuẩn bị dự án

1. **Push code lên GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/eduplatform.git
git push -u origin main
```

2. **Cài đặt dependencies:**

```bash
npm install
```

### Bước 2: Deploy trên Vercel

1. **Truy cập https://vercel.com/**
2. **Import dự án từ GitHub**
3. **Cấu hình project:**
   - Framework Preset: `Other`
   - Root Directory: `./` (root)
   - Build Command: `npm run build`
   - Output Directory: `frontend`

### Bước 3: Cấu hình Environment Variables (Tùy chọn)

Nếu bạn có database production, thêm các biến môi trường trong Vercel Dashboard:

```
DB_HOST=your-production-host
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=courseplatform
```

### Bước 4: Kiểm tra deployment

- **Frontend:** https://your-app.vercel.app
- **API Health Check:** https://your-app.vercel.app/api/health
- **Courses API:** https://your-app.vercel.app/api/courses
- **Blog API:** https://your-app.vercel.app/api/blog

## 🔧 Cấu trúc dự án Vercel

```
├── api/                    # Vercel Serverless Functions
│   ├── courses.js         # Courses API endpoint
│   ├── blog.js            # Blog API endpoint
│   └── health.js          # Health check endpoint
├── frontend/              # Static frontend files
│   ├── index.html
│   ├── css/
│   └── js/
├── vercel.json           # Vercel configuration
├── package.json          # Dependencies
└── README.md
```

## 📡 API Endpoints

### Courses

- `GET /api/courses` - Get all courses
- `GET /api/courses?category=programming` - Filter by category
- `GET /api/courses?search=javascript` - Search courses
- `GET /api/courses/{id}` - Get course by ID

### Blog

- `GET /api/blog` - Get all blog posts
- `GET /api/blog?category=technology` - Filter by category
- `GET /api/blog/{id}` - Get blog post by ID

### Health Check

- `GET /api/health` - API status check

## 🗄️ Database Options

### Option 1: Serverless Database (Khuyến nghị)

- **PlanetScale** (MySQL compatible)
- **Supabase** (PostgreSQL)
- **Neon** (PostgreSQL)

### Option 2: Traditional Database

- **Railway** (MySQL/PostgreSQL)
- **Heroku Postgres**
- **AWS RDS**

### Option 3: Mock Data (Hiện tại)

API sẽ sử dụng sample data nếu không kết nối được database.

## 🎯 Tính năng

- ✅ **Responsive Design**: Hoạt động trên mọi thiết bị
- ✅ **Serverless API**: Tự động scale với Vercel
- ✅ **CORS Support**: Frontend và API cùng domain
- ✅ **Error Handling**: Fallback to sample data
- ✅ **Performance**: Optimized for production

## 🛠️ Development

### Local Development

```bash
npm run dev
# hoặc
vercel dev
```

### Test Production Build

```bash
vercel --prod
```

## 📞 Hỗ trợ

Nếu gặp vấn đề khi deploy:

1. Kiểm tra Vercel deployment logs
2. Verify các file API endpoints
3. Test API endpoints trước khi deploy
4. Kiểm tra environment variables

Happy coding! 🎉
