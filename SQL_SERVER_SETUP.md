# 🔧 Hướng dẫn kết nối SQL Server Management Studio

## BƯỚC 1: Cài đặt SQL Server và SSMS

### 1.1 Tải SQL Server Developer Edition (Miễn phí)
- Truy cập: https://www.microsoft.com/en-us/sql-server/sql-server-downloads
- Chọn **Developer** (miễn phí cho dev)
- Tải và cài đặt SQL Server 2022

### 1.2 Tải SQL Server Management Studio (SSMS)
- Truy cập: https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms
- Tải SSMS mới nhất
- Cài đặt SSMS

## BƯỚC 2: Cấu hình SQL Server

### 2.1 Kích hoạt SQL Server Authentication
1. Mở **SQL Server Configuration Manager**
2. Chọn **SQL Server Services** → Start **SQL Server**
3. Mở SSMS và connect với **Windows Authentication**
4. Right-click server → **Properties** → **Security**
5. Chọn **SQL Server and Windows Authentication mode**
6. Restart SQL Server service

### 2.2 Tạo Login và Database
```sql
-- Tạo login mới
CREATE LOGIN [eduplatform] WITH PASSWORD='EduPlatform2024!';

-- Tạo database
CREATE DATABASE course_platform_db;

-- Gán quyền
USE course_platform_db;
CREATE USER [eduplatform] FOR LOGIN [eduplatform];
ALTER ROLE db_owner ADD MEMBER [eduplatform];
```

## BƯỚC 3: Cập nhật config Node.js

### 3.1 Cài đặt SQL Server driver
```bash
npm install mssql
```

### 3.2 Cập nhật database.js cho SQL Server
```javascript
const sql = require('mssql');

const config = {
    server: 'localhost', // hoặc tên server
    database: 'course_platform_db',
    user: 'eduplatform',
    password: 'EduPlatform2024!',
    port: 1433,
    options: {
        encrypt: false, // true nếu dùng Azure
        trustServerCertificate: true
    }
};
```

## BƯỚC 4: Connection String cho SSMS

### Thông tin kết nối:
- **Server Name**: `localhost` hoặc `(local)`
- **Authentication**: SQL Server Authentication
- **Login**: `eduplatform`
- **Password**: `EduPlatform2024!`
- **Database**: `course_platform_db`

## BƯỚC 5: Tạo Tables cho SQL Server

```sql
-- Tạo bảng users
CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(50) UNIQUE NOT NULL,
    email NVARCHAR(100) UNIQUE NOT NULL,
    password NVARCHAR(255) NOT NULL,
    full_name NVARCHAR(100),
    avatar NVARCHAR(MAX),
    phone NVARCHAR(20),
    role NVARCHAR(20) DEFAULT 'user',
    is_active BIT DEFAULT 1,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);

-- Tạo bảng courses
CREATE TABLE courses (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(200) NOT NULL,
    description NVARCHAR(MAX),
    content NVARCHAR(MAX),
    thumbnail NVARCHAR(MAX),
    price DECIMAL(10,2) DEFAULT 0.00,
    is_free BIT DEFAULT 0,
    is_published BIT DEFAULT 0,
    category NVARCHAR(100),
    level NVARCHAR(20) DEFAULT 'Beginner',
    duration INT DEFAULT 0,
    instructor_id INT,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (instructor_id) REFERENCES users(id)
);

-- Tạo bảng lessons
CREATE TABLE lessons (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(200) NOT NULL,
    content NVARCHAR(MAX),
    video_url NVARCHAR(MAX),
    order_index INT DEFAULT 0,
    duration INT DEFAULT 0,
    is_free BIT DEFAULT 0,
    course_id INT NOT NULL,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Tạo bảng enrollments
CREATE TABLE enrollments (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    enrolled_at DATETIME2 DEFAULT GETDATE(),
    progress DECIMAL(5,2) DEFAULT 0.00,
    status NVARCHAR(20) DEFAULT 'active',
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    UNIQUE (user_id, course_id)
);

-- Tạo bảng blog_posts
CREATE TABLE blog_posts (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(200) NOT NULL,
    summary NVARCHAR(MAX),
    content NVARCHAR(MAX),
    thumbnail NVARCHAR(MAX),
    slug NVARCHAR(250) UNIQUE,
    is_published BIT DEFAULT 0,
    author_id INT,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (author_id) REFERENCES users(id)
);
```

## BƯỚC 6: Insert dữ liệu mẫu

```sql
-- Thêm users mẫu
INSERT INTO users (username, email, password, full_name, role) VALUES 
('admin', 'admin@tteam.edu.vn', '$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iAt6Z5EHsM8lE9P1PQF6m3SNelWW', 'T TEAM Admin', 'admin'),
('instructor1', 'instructor1@tteam.edu.vn', '$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iAt6Z5EHsM8lE9P1PQF6m3SNelWW', 'Nguyễn Văn A', 'instructor'),
('user1', 'user1@tteam.edu.vn', '$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iAt6Z5EHsM8lE9P1PQF6m3SNelWW', 'Trần Thị B', 'user');

-- Thêm courses mẫu
INSERT INTO courses (title, description, price, is_free, is_published, category, level, duration, instructor_id) VALUES 
('JavaScript từ cơ bản đến nâng cao', 'Học JavaScript từ những kiến thức cơ bản nhất đến các kỹ thuật nâng cao', 299000, 0, 1, 'Lập trình', 'Beginner', 1200, 2),
('HTML & CSS Responsive Design', 'Tạo website responsive đẹp mắt với HTML5 và CSS3', 0, 1, 1, 'Thiết kế', 'Beginner', 800, 2),
('React.js cho người mới bắt đầu', 'Xây dựng ứng dụng web hiện đại với React.js', 399000, 0, 1, 'Lập trình', 'Intermediate', 1500, 2),
('UI/UX Design Fundamentals', 'Thiết kế giao diện người dùng chuyên nghiệp', 0, 1, 1, 'Thiết kế', 'Beginner', 1000, 2),
('Digital Marketing Strategy', 'Chiến lược marketing số hiệu quả', 199000, 0, 1, 'Marketing', 'Intermediate', 900, 2),
('Python cho Data Science', 'Phân tích dữ liệu với Python và các thư viện phổ biến', 0, 1, 1, 'Lập trình', 'Intermediate', 1800, 2);

-- Thêm blog posts mẫu
INSERT INTO blog_posts (title, summary, content, slug, is_published, author_id) VALUES 
('10 xu hướng công nghệ nổi bật năm 2024', 'Khám phá những xu hướng công nghệ mới nhất sẽ định hình tương lai', 'Nội dung chi tiết về các xu hướng công nghệ...', '10-xu-huong-cong-nghe-2024', 1, 2),
('Cách học lập trình hiệu quả cho người mới bắt đầu', 'Hướng dẫn chi tiết cách bắt đầu học lập trình một cách khoa học', 'Nội dung chi tiết về cách học lập trình...', 'cach-hoc-lap-trinh-hieu-qua', 1, 2),
('Thiết kế UI/UX: Từ ý tưởng đến sản phẩm', 'Quy trình thiết kế UI/UX chuyên nghiệp từ A đến Z', 'Nội dung chi tiết về quy trình thiết kế...', 'thiet-ke-ui-ux-tu-y-tuong-den-san-pham', 1, 2);
```

## ⚡ TÓM TẮT NHANH:

1. **Tải & cài**: SQL Server Developer + SSMS
2. **Config**: Enable SQL Server Authentication
3. **Tạo**: Database `course_platform_db` và login `eduplatform`
4. **Connect SSMS**:
   - Server: `localhost`
   - Auth: SQL Server Authentication  
   - User: `eduplatform`
   - Pass: `EduPlatform2024!`
5. **Run SQL**: Tạo tables và insert data mẫu
6. **Update Node.js**: Đổi từ MySQL sang mssql driver

## 🚨 LƯU Ý:
- Đảm bảo SQL Server service đang chạy
- Firewall cho phép port 1433
- Nếu dùng Named Instance: `localhost\SQLEXPRESS`
