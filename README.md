# Trại Việt Blog - Outdoor & Camping Website (Astro 6)

Dự án website blog chuyên về chủ đề Cắm trại và Hoạt động ngoài trời, được xây dựng bằng Astro Framework phiên bản mới nhất, tối ưu cho hiệu suất và trải nghiệm người dùng cao cấp.

## 🚀 Công nghệ sử dụng
- **Astro 6**: Sử dụng Content Layer API mới nhất (`loader: glob`).
- **Tailwind CSS v4**: Styling hiện đại với hệ màu tự nhiên (Forest Green & Cream).
- **TypeScript**: Đảm bảo an toàn kiểu dữ liệu cho toàn bộ dự án.
- **Lucide Astro**: Bộ icon tối giản và sắc nét.
- **Fonts**: Plus Jakarta Sans (Tiêu đề) & Inter (Nội dung).

## 🛠️ Những công việc đã thực hiện

### 1. Khởi tạo & Cấu trúc
- Khởi tạo dự án Astro với cấu trúc thư mục chuẩn.
- Cấu hình Tailwind CSS v4 tích hợp với Vite.
- Định nghĩa Schema cho Content Collection trong `src/content.config.ts`.

### 2. Phát triển Nội dung (Content Expansion)
- Tạo **9 bài viết mẫu** chuyên sâu bằng tiếng Việt:
  - **Địa điểm**: Đà Lạt, Sài Gòn, Ba Vì.
  - **Kinh nghiệm**: Chọn lều, Cắm trại cùng trẻ nhỏ.
  - **Góc kỹ năng**: Sơ cứu, Nhóm lửa trong điều kiện ẩm ướt.
  - **Review**: Bếp mini dã ngoại, Ghế xếp dã ngoại.

### 3. Thiết kế Giao diện Hiện đại (Modern UI/UX Redesign)
- **Premium Look**: Sử dụng phong cách Forest Green & Cream, kết hợp hiệu ứng **Glassmorphism** (kính mờ).
- **Luxury Hero Section**: Tiêu đề cực lớn, hiệu ứng chuyển động mượt mà và hình ảnh tràn viền.
- **Mobile Menu**: Đã triển khai hoàn chỉnh logic đóng/mở menu trên thiết bị di động (Hamburger Menu).
- **Typography & Grid**: Hệ thống phân cấp chữ và lưới (Grid) được tối ưu cho sự sang trọng và hiện đại.
- **Dark Mode**: Tích hợp chế độ tối hoàn chỉnh giúp bảo vệ mắt và tiết kiệm pin.

### 4. Xử lý lỗi & Tối ưu hóa (Advanced Troubleshooting)
- **Fix Termux/Android issues**: Cài đặt thủ công các native binaries (`@rollup`, `@esbuild`, `lightningcss`, `@tailwindcss/oxide`, `@rolldown/binding`) cho môi trường Android.
- **Astro 6 Migration**: Di chuyển hoàn toàn sang Content Layer API mới.
- **Slugification**: Xử lý tiếng Việt (bao gồm chữ `đ`) cho URL chuẩn SEO.
- **Ngrok Configuration**: Cấu hình `allowedHosts` và `server.host` để hỗ trợ truy cập website từ xa qua tunnel ngrok mà không bị chặn.

## 🏃 Hướng dẫn khởi chạy

Cài đặt các gói phụ thuộc:
```bash
npm install
```

Chạy môi trường phát triển:
```bash
npm run dev
```

Xây dựng bản sản xuất:
```bash
npm run build
```

---
*Dự án được thực hiện bởi Gemini CLI.*
