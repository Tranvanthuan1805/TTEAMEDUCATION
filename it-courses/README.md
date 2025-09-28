# IT Courses — Next.js + Tailwind (Vercel Ready)

Sẵn sàng deploy lên Vercel. Bao gồm trang chủ, danh sách khóa học, chi tiết, giỏ hàng, thanh toán (mock API).

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Deploy lên Vercel

1. Đẩy code lên GitHub.
2. Tạo project trên Vercel và import repo.
3. Thiết lập framework: Next.js (mặc định), build command: `next build`, output: `.next`.
4. Deploy.

## Cấu trúc

- `src/app` (App Router): `page.tsx`, `layout.tsx`, `api/order`.
- `src/components`: `Navbar`, `Footer`, `CartProvider`, `CourseCard`.
- `src/lib/courses.ts`: dữ liệu mẫu + utils.
- `public/images`: ảnh minh họa (cập nhật theo nhu cầu).

## Tùy chỉnh

- Thay dữ liệu trong `src/lib/courses.ts`.
- Đổi màu sắc trong `tailwind.config.ts`.
- Nâng cấp thanh toán: kết nối cổng thanh toán thật (Stripe/PayOS) và bảo vệ API.