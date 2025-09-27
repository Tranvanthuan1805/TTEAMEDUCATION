# 🗄️ HƯỚNG DẪN SETUP DATABASE CHO EDUPLATFORM

## 📋 Bước 1: Cài đặt MySQL

### Option 1: XAMPP (Khuyến nghị cho Windows)

1. **Download XAMPP:** https://www.apachefriends.org/download.html
2. **Cài đặt và khởi động:**
   - Mở XAMPP Control Panel
   - Click **Start** cho Apache và MySQL
   - Đảm bảo cả 2 service đang chạy (màu xanh lá)

### Option 2: MySQL Server standalone

1. **Download MySQL:** https://dev.mysql.com/downloads/mysql/
2. **Cài đặt với cấu hình:**
   - Port: 3306 (mặc định)
   - Username: root
   - Password: để trống hoặc đặt password

## 📊 Bước 2: Tạo Database

### Cách 1: Sử dụng phpMyAdmin (XAMPP)

1. **Mở phpMyAdmin:** http://localhost/phpmyadmin
2. **Tạo database mới:**

   - Click "New" ở sidebar trái
   - Tên database: `courseplatform`
   - Collation: `utf8mb4_unicode_ci`
   - Click "Create"

3. **Import SQL Script:**
   - Chọn database `courseplatform`
   - Click tab "Import"
   - Choose File: `database/setup_local.sql`
   - Click "Go"

### Cách 2: MySQL Command Line

```bash
# Đăng nhập MySQL
mysql -u root -p

# Tạo database
CREATE DATABASE courseplatform;

# Sử dụng database
USE courseplatform;

# Import script
source C:/path/to/your/project/database/setup_local.sql;
```

### Cách 3: MySQL Workbench

1. **Download MySQL Workbench:** https://dev.mysql.com/downloads/workbench/
2. **Kết nối database:**
   - Host: localhost
   - Port: 3306
   - Username: root
   - Password: (để trống hoặc password của bạn)
3. **Chạy script:**
   - Mở file `database/setup_local.sql`
   - Click Execute (⚡)

## ⚙️ Bước 3: Cấu hình Backend

### 1. Cấu hình file .env

```env
# Database Local
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=courseplatform
PORT=3000
```

**Lưu ý:** Thay `DB_PASSWORD` nếu bạn có đặt password cho MySQL

### 2. Cài đặt dependencies

```bash
cd backend-nodejs
npm install
```

### 3. Chạy backend

```bash
npm run dev
```

## ✅ Bước 4: Kiểm tra kết nối

### Backend sẽ tự động:

1. **Kết nối database** khi khởi động
2. **Tạo bảng** nếu chưa có
3. **Insert dữ liệu mẫu** lần đầu chạy

### Test endpoints:

- **Health check:** http://localhost:3000/api/health
- **Courses:** http://localhost:3000/api/courses
- **Blog:** http://localhost:3000/api/blog

### Logs sẽ hiển thị:

```
✅ Database connected successfully to: courseplatform
📋 Creating database tables...
✅ Database tables created successfully
📊 Inserting sample data...
✅ Sample data inserted successfully
🚀 Server running on port 3000
```

## 🔧 Troubleshooting

### Lỗi "Connection refused"

```bash
# Kiểm tra MySQL service
# XAMPP: Start MySQL trong Control Panel
# Standalone: Khởi động MySQL service
```

### Lỗi "Access denied"

```bash
# Kiểm tra username/password trong .env
# Thử đăng nhập MySQL command line
mysql -u root -p
```

### Lỗi "Database not found"

```bash
# Tạo database manual
mysql -u root -p
CREATE DATABASE courseplatform;
```

### Port 3306 đã được sử dụng

```bash
# Đổi port MySQL trong XAMPP config
# Hoặc cập nhật DB_PORT trong .env
```

## 📈 Dữ liệu mẫu sau khi setup:

### 👥 Users (5 users)

- admin@eduplatform.com (ADMIN)
- instructor1@eduplatform.com (INSTRUCTOR)
- student1@eduplatform.com (STUDENT)

### 📚 Courses (6 courses)

- JavaScript từ cơ bản đến nâng cao (Có phí)
- Thiết kế UI/UX chuyên nghiệp (Miễn phí)
- Marketing Digital toàn diện (Có phí)
- Python cho Data Science (Có phí)
- Photoshop cơ bản miễn phí (Miễn phí)
- React.js Complete Guide (Có phí)

### 📝 Blog Posts (4 bài viết)

- 10 Xu hướng công nghệ sẽ thay đổi tương lai
- Cách học lập trình hiệu quả
- Thiết kế UX/UI: Những nguyên tắc cơ bản
- Data Science với Python

### 🎓 Sample Data

- Lessons cho các khóa học
- Enrollments (đăng ký khóa học)
- Course reviews và ratings

## 🎯 Kết quả cuối cùng:

✅ **Database:** courseplatform với đầy đủ bảng và dữ liệu  
✅ **Backend API:** Chạy tại http://localhost:3000  
✅ **Frontend:** Kết nối được với backend  
✅ **Sample Data:** Sẵn sàng để test

**Happy Coding! 🎉**
