# Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Tạo GitHub Repository

1. Truy cập https://github.com/new
2. Điền thông tin:
   - **Repository name**: `geoguessr-vietnam`
   - **Description**: `Game đoán vị trí theo phong cách GeoGuessr`
   - **Public/Private**: Chọn Public (để deploy miễn phí)
   - **Add a README file**: ✅ Bỏ chọn (chúng ta sẽ tạo sau)
   - **Add .gitignore**: ✅ Bỏ chọn
   - **Choose a license**: ✅ Bỏ chọn
3. Click "Create repository"

## Bước 2: Chuẩn bị dự án để upload

Mở terminal/command prompt tại thư mục dự án:

```bash
cd "C:\Users\minhm\OneDrive\Documents\Geoguessr 2\geoguessr-game"
```

## Bước 3: Khởi tạo Git và push lên GitHub

```bash
# Khởi tạo git
git init

# Thêm tất cả file
git add .

# Commit đầu tiên
git commit -m "Initial commit: GeoGuessr Vietnam game"

# Đổi tên branch thành main
git branch -M main

# Thêm remote repository (thay YOUR_USERNAME bằng username của bạn)
git remote add origin https://github.com/minhm/geoguessr-vietnam.git

# Push lên GitHub
git push -u origin main
```

*Lưu ý: Nếu GitHub yêu cầu authentication, bạn cần tạo Personal Access Token.*

## Bước 4: Kích hoạt GitHub Pages

1. Vào repository trên GitHub
2. Click vào **Settings** tab
3. Tìm mục **Pages** ở sidebar bên trái
4. Cấu hình:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

## Bước 5: Chờ deploy và lấy link

1. GitHub sẽ bắt đầu deploy (thường mất 1-2 phút)
2. Khi deploy xong, bạn sẽ thấy link dạng:
   ```
   https://minhm.github.io/geoguessr-vietnam/
   ```
3. Click vào link để kiểm tra game

## Bước 6: Tạo mã QR cho link

Sau khi có link deploy, bạn có thể tạo mã QR bằng các cách:

### Cách 1: Sử dụng dịch vụ online
- Truy cập: https://www.qrcode-generator.com/
- hoặc: https://www.qr-code-generator.com/
- Dán link web vào và tạo QR

### Cách 2: Sử dụng API (nếu muốn tự động)
```bash
# Sử dụng API của QR Server
curl "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://minhm.github.io/geoguessr-vietnam/" --output qr-code.png
```

## Bước 7: Chia sẻ

- **Link web**: `https://minhm.github.io/geoguessr-vietnam/`
- **Mã QR**: Tải về file qr-code.png để chia sẻ

## Troubleshooting

### Lỗi authentication khi push
```bash
# Nếu gặp lỗi authentication, bạn cần:
# 1. Vào GitHub Settings > Developer settings > Personal access tokens
# 2. Tạo token mới với quyền "repo"
# 3. Sử dụng token thay thế password khi push
```

### Pages không hoạt động
- Kiểm tra file `index.html` có ở thư mục root không
- Đảm bảo branch `main` đã được push thành công
- Kiểm tra Settings > Pages để xem có lỗi gì không

### Bản đồ không hiển thị trên web
- Đảm bảo đang sử dụng HTTPS (GitHub Pages tự động HTTPS)
- Kiểm tra console log trên trình duyệt để xem lỗi
- Đôi khi cần thêm delay khi khởi tạo map

## Cập nhật sau này

Khi muốn cập nhật code:

```bash
git add .
git commit -m "Mô tả thay đổi"
git push
```

GitHub Pages sẽ tự động deploy lại sau khi push.
