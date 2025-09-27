# 🚀 EduPlatform - Hướng dẫn Deploy lên Vercel

## ⚠️ Khắc phục lỗi Vercel CLI với tên tiếng Việt

### 1. Cài đặt Java Development Kit (JDK)

- Tải và cài đặt JDK 17 hoặc cao hơn từ [Oracle](https://www.oracle.com/java/technologies/downloads/) hoặc [OpenJDK](https://adoptium.net/)
- Kiểm tra cài đặt: `java -version`

### 2. Cài đặt Apache Maven

- Tải Maven từ [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)
- Giải nén và thêm vào PATH
- Kiểm tra cài đặt: `mvn -version`

### 3. Cài đặt MySQL

- Tải và cài đặt MySQL Server 8.0+ từ [https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)
- Tạo database: `CREATE DATABASE course_platform_db;`
- Import schema từ file `database/schema.sql`

### 4. Cấu hình dự án

#### Backend Configuration

Cập nhật file `backend/src/main/resources/application.properties`:

```properties
# Database - Thay đổi thông tin kết nối
spring.datasource.url=jdbc:mysql://localhost:3306/course_platform_db
spring.datasource.username=root
spring.datasource.password=your_password

# Email - Cấu hình Gmail SMTP
spring.mail.username=your-email@gmail.com
spring.mail.password=your-app-password

# Stripe - Thêm API key (tùy chọn)
stripe.api.key=sk_test_your_stripe_secret_key
```

### 5. Chạy ứng dụng

#### Chạy Backend:

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Backend sẽ chạy tại: http://localhost:8080

#### Chạy Frontend:

```bash
cd frontend
# Sử dụng Python
python -m http.server 3000

# Hoặc sử dụng Live Server extension trong VS Code
```

Frontend sẽ chạy tại: http://localhost:3000

### 6. Kiểm tra kết nối

- Truy cập: http://localhost:3000
- Test API: http://localhost:8080/api/courses
- Database có dữ liệu mẫu sẵn

### 7. Tài khoản mẫu

```
Admin:
- Username: admin
- Password: password123

Instructor:
- Username: instructor1
- Password: password123

Student:
- Username: user1
- Password: password123
```

### 8. Tính năng có sẵn

✅ Xem danh sách khóa học
✅ Lọc khóa học (miễn phí/có phí)
✅ Đọc bài viết blog
✅ Đăng ký/Đăng nhập
✅ AI Chatbot
✅ Responsive design
✅ Animations

### 9. Phát triển thêm

- Thêm tính năng thanh toán Stripe
- Tích hợp email notifications
- Upload video cho khóa học
- Dashboard cho giảng viên
- Mobile app

### 10. Troubleshooting

**Lỗi kết nối database:**

- Kiểm tra MySQL service đang chạy
- Xác nhận thông tin kết nối trong application.properties
- Đảm bảo database đã được tạo

**Lỗi Maven:**

- Kiểm tra Java và Maven đã cài đặt đúng
- Clear cache: `mvn clean`
- Rebuild: `mvn clean install`

**Lỗi CORS:**

- Kiểm tra frontend chạy đúng port
- Cập nhật CORS configuration trong WebSecurityConfig

## Happy Coding! 🚀
