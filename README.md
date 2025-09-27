# EduPlatform - Nền tảng khóa học trực tuyến

## Giới thiệu

EduPlatform là một website bán khóa học trực tuyến được xây dựng với công nghệ hiện đại, bao gồm:

- **Backend**: Java Spring Boot với REST API
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Database**: MySQL với JPA/Hibernate
- **Authentication**: JWT Token
- **Payment**: Stripe Integration
- **Features**: AI Chatbot, Notifications, Animations

## Tính năng chính

### 🎓 Khóa học

- Xem danh sách khóa học (miễn phí & có phí)
- Tìm kiếm và lọc khóa học theo danh mục
- Đăng ký khóa học
- Theo dõi tiến độ học tập
- Đánh giá và nhận xét khóa học

### 📝 Blog

- Đọc bài viết giáo dục
- Tìm kiếm bài viết
- Chia sẻ kiến thức

### 👤 Người dùng

- Đăng ký/Đăng nhập
- Quản lý hồ sơ cá nhân
- Theo dõi khóa học đã đăng ký
- Nhận thông báo

### 💳 Thanh toán

- Tích hợp Stripe
- Thanh toán an toàn
- Lịch sử giao dịch

### 🤖 AI Chatbot

- Hỗ trợ tự động 24/7
- Trả lời câu hỏi thường gặp
- Hướng dẫn sử dụng

### 🎨 Giao diện

- Responsive design
- Animations mượt mà
- UI/UX hiện đại
- Dark/Light mode (tùy chọn)

## Cấu trúc dự án

```
├── backend-nodejs/         # Node.js Express API (RECOMMENDED)
│   ├── config/
│   │   └── database.js    # MySQL connection config
│   ├── routes/
│   │   ├── courses.js     # Courses API
│   │   └── blog.js        # Blog API
│   ├── .env               # Environment variables
│   ├── server.js          # Main server file
│   └── package.json       # Dependencies
├── backend/               # Spring Boot Application (Alternative)
├── frontend/              # Frontend Application
│   ├── index.html         # Main HTML file
│   ├── css/
│   │   └── style.css      # Styles with animations
│   └── js/
│       └── main.js        # JavaScript functionality
├── database/              # Database files
│   └── schema.sql         # Database schema and sample data
└── README.md             # This file
```

## Công nghệ sử dụng

### Backend (Node.js - Khuyến nghị)

- **Node.js** với Express.js framework
- **MySQL2/Promise** (MySQL connection)
- **CORS** (Cross-origin requests)
- **Helmet** (Security headers)
- **Express Rate Limit** (API protection)
- **Environment Variables** (.env config)

### Backend (Spring Boot - Tùy chọn)

- **Java 17**
- **Spring Boot 3.2.0**
- **Spring Security** (JWT Authentication)
- **Spring Data JPA** (Database ORM)
- **MySQL** (Database)
- **Stripe Java SDK** (Payment processing)
- **Spring Mail** (Email notifications)

### Frontend

- **HTML5** (Semantic markup)
- **CSS3** (Flexbox, Grid, Animations)
- **JavaScript ES6+** (Modern JavaScript)
- **Font Awesome** (Icons)
- **Google Fonts** (Typography)

### Database

- **MySQL 8.0+** (via XAMPP)
- **Connection Pooling**
- **Auto table creation**

## Cài đặt và chạy

### Yêu cầu hệ thống

- Node.js 16+ và npm (cho backend Node.js)
- XAMPP (MySQL server)
- Hoặc Java 17+ và Maven (cho backend Spring Boot)

## Backend Node.js (Khuyến nghị)

### 1. Chuẩn bị XAMPP

1. Tải và cài đặt XAMPP
2. Khởi động XAMPP Control Panel
3. Start Apache và MySQL services

### 2. Cài đặt Backend

```bash
cd backend-nodejs
npm install
```

### 3. Cấu hình Environment

Tạo file `.env` trong thư mục `backend-nodejs/`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=courseplatform
PORT=3000
```

### 4. Chạy Backend

```bash
npm run dev
```

Server sẽ chạy tại: `http://localhost:3000`

## Backend Spring Boot (Tùy chọn)

### 1. Cài đặt Database

```sql
CREATE DATABASE course_platform_db;
mysql -u root -p course_platform_db < database/schema.sql
```

### 2. Cấu hình Backend

Cập nhật `backend/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/course_platform_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 3. Chạy Backend

```bash
cd backend
mvn spring-boot:run
```

Backend sẽ chạy tại: http://localhost:8080

### 4. Chạy Frontend

Mở file `frontend/index.html` trong browser hoặc sử dụng live server:

```bash
cd frontend
# Sử dụng Python
python -m http.server 3000

# Hoặc sử dụng Node.js
npx serve .
```

Frontend sẽ chạy tại: http://localhost:3000

## API Endpoints

### Authentication

- `POST /api/auth/register` - Đăng ký
- `POST /api/auth/login` - Đăng nhập
- `GET /api/auth/verify` - Xác thực token

### Courses

- `GET /api/courses` - Lấy danh sách khóa học
- `GET /api/courses/{id}` - Lấy chi tiết khóa học
- `POST /api/courses` - Tạo khóa học mới (Instructor)
- `PUT /api/courses/{id}` - Cập nhật khóa học (Instructor)

### Enrollments

- `POST /api/enrollments` - Đăng ký khóa học
- `GET /api/enrollments/my` - Khóa học đã đăng ký

### Blog

- `GET /api/blog/posts` - Lấy danh sách bài viết
- `GET /api/blog/posts/{id}` - Lấy chi tiết bài viết

### Payment

- `POST /api/payments/create-intent` - Tạo payment intent
- `POST /api/payments/confirm` - Xác nhận thanh toán

## Tính năng nâng cao

### 1. AI Chatbot

Chatbot sử dụng rule-based system với khả năng:

- Trả lời câu hỏi về khóa học
- Hướng dẫn sử dụng website
- Hỗ trợ thanh toán

### 2. Email Notifications

- Xác thực email đăng ký
- Thông báo đăng ký khóa học
- Newsletter

### 3. Progress Tracking

- Theo dõi tiến độ học tập
- Tự động cập nhật phần trăm hoàn thành
- Chứng chỉ hoàn thành

### 4. Payment Integration

- Stripe payment gateway
- Secure payment processing
- Webhook handling

## Bảo mật

- JWT token authentication
- Password encryption (BCrypt)
- CORS configuration
- SQL injection prevention
- XSS protection

## Performance

- Database indexing
- Lazy loading
- Pagination
- Image optimization
- Caching strategies

## Testing

### Backend Testing

```bash
cd backend
mvn test
```

### Frontend Testing

Sử dụng browser developer tools để test:

- Responsive design
- API calls
- User interactions
- Performance

## Deployment

### Backend (Spring Boot)

```bash
mvn clean package
java -jar target/online-course-platform-0.0.1-SNAPSHOT.jar
```

### Frontend

Deploy static files to:

- Apache/Nginx
- Netlify
- Vercel
- GitHub Pages

### Database

- MySQL server
- Cloud database (AWS RDS, Google Cloud SQL)

## Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## Tác giả

- **Tên**: [Tên của bạn]
- **Email**: [Email của bạn]
- **GitHub**: [GitHub username]

## Giấy phép

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## Roadmap

### Version 2.0

- [ ] Mobile app (React Native/Flutter)
- [ ] Advanced analytics dashboard
- [ ] Video streaming optimization
- [ ] AI-powered course recommendations
- [ ] Multi-language support
- [ ] Advanced payment options
- [ ] Social learning features
- [ ] Offline course download

### Version 1.1

- [ ] Course certificates generation
- [ ] Advanced search with filters
- [ ] User dashboard improvements
- [ ] Email templates enhancement
- [ ] Performance optimizations

## Hỗ trợ

Nếu bạn gặp vấn đề hoặc có câu hỏi, vui lòng:

1. Kiểm tra [Issues](https://github.com/your-repo/issues)
2. Tạo issue mới nếu cần
3. Liên hệ qua email: support@eduplatform.com

## Changelog

### v1.0.0 (2024-01-20)

- ✅ Initial release
- ✅ User authentication system
- ✅ Course management
- ✅ Payment integration
- ✅ Blog system
- ✅ AI Chatbot
- ✅ Responsive design
- ✅ Database schema

---

**EduPlatform** - Học tập không giới hạn! 🚀
