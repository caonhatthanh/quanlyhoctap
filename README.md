# Quản Lý Học Tập - Dự Án Kết Thúc Môn

## Thành Viên

- **Cao Nhật Thanh** - Mã số sinh viên: 2406042016
- **Nguyễn Ngọc Huy** - Mã số sinh viên: 2406042023

## Mô Tả Dự Án

Dự án "Quản Lý Học Tập" là một ứng dụng quản lý thông tin học tập. Ứng dụng bao gồm các chức năng như quản lý người dùng, bài tập, lịch sử học tập.

## Các Tính Năng Chính

- **Login**: Nơi đăng nhập tài khoản để tiến vào Dashboard sau khi được xác thực.
  ![Login Image](https://i.imgur.com/RygAdgf.png)
- **Dashboard**: Hiển thị thông tin tổng quan về học tập và kết quả học tập.
  ![Dashboard Image](https://i.imgur.com/oSSnCaQ.png)
- **Người Dùng**: Quản lý thông tin sinh viên và người dùng.
  ![User Management Image](https://i.imgur.com/EIcfuqP.png)
- **Bài Tập**: Quản lý bài tập.
  ![Assignments Image](https://i.imgur.com/jDjTuCy.png)
- **Lịch Sử**: Hiển thị các hoạt động học tập, bài tập đã hoàn thành.

## Cài Đặt

1. Clone dự án về máy với lệnh cmd:

   ```bash
   git clone https://github.com/caonhatthanh/quanlyhoctap.git
   ```

2. Di chuyển vào thư mục dự án:

   ```bash
   cd quanlyhoctap
   ```

3. Cài đặt các thư viện:

   ```bash
   npm install
   ```
   ```bash
   npm install react-router-dom
   ```
   ```bash
   npm install boxicons
   ```
   ```bash
   npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
   ```
   ```bash
   npm install antd --save
   ```

4. Khởi chạy web dự án:
   ```bash
   npm run dev
   ```

Dự án sẽ chạy trên `http://localhost:5173` trong trình duyệt.

## Hướng Dẫn Sử Dụng

1. Đăng nhập vào hệ thống bằng tài khoản được khai báo trong `LLogin.tsx` trong mảng `ACCOUNT`.
2. Truy cập các trang người dùng, bài tập để điều chỉnh thông tin.
3. Theo dõi trạng thái "đã hoàn thành" hoặc "chưa hoàn thành" trong trang Lịch Sử.

## Liên Hệ

- **Cao Nhật Thanh**: 9.9caonhatthanh2020@gmail.com
- **Nguyễn Ngọc Huy**: nguyenngochuy2006ab@gmail.com
