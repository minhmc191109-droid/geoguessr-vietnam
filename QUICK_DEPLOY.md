# ⚡ Hướng dẫn Deploy Nhanh lên GitHub Pages

## 📋 Các bước đã hoàn thành tự động:
✅ Git đã được khởi tạo  
✅ File đã được commit  
✅ Branch đã đổi thành main  

## 🔥 Bước tiếp theo (Bạn cần làm thủ công):

### 1️⃣ Tạo Repository trên GitHub
1. Truy cập: https://github.com/new
2. Điền thông tin:
   - **Repository name**: `geoguessr-vietnam`
   - **Description**: `Game đoán vị trí theo phong cách GeoGuessr`
   - **Public**: ✅ Chọn
   - **Tất cả các checkbox khác**: ❌ Bỏ chọn
3. Click **Create repository**

### 2️⃣ Push code lên GitHub
Sau khi tạo repository, chạy lệnh sau trong terminal:

```bash
cd "C:\Users\minhm\OneDrive\Documents\Geoguessr 2\geoguessr-game"

# Thêm remote repository
git remote add origin https://github.com/minhm/geoguessr-vietnam.git

# Push lên GitHub
git push -u origin main
```

*Lưu ý: Nếu GitHub yêu cầu đăng nhập, bạn cần:*
- Vào GitHub Settings → Developer settings → Personal access tokens
- Tạo token mới với quyền "repo"
- Sử dụng token làm password khi được hỏi

### 3️⃣ Kích hoạt GitHub Pages
1. Vào repository vừa tạo trên GitHub
2. Click **Settings** → **Pages** (bên trái)
3. Cấu hình:
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: / (root)
4. Click **Save**

### 4️⃣ Chờ deploy và lấy link
- Chờ 1-2 phút để GitHub deploy
- Link web sẽ là: `https://minhm.github.io/geoguessr-vietnam/`

### 5️⃣ Tạo mã QR
```bash
# Tạo mã QR cho link web
curl "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://minhm.github.io/geoguessr-vietnam/" --output qr-code.png
```

## 🎯 Sau khi deploy xong:

- **Link web**: Share link để bạn bè chơi
- **Mã QR**: Tải file qr-code.png để chia sẻ qua điện thoại
- **Cập nhật**: Chỉ cần `git add . && git commit -m "update" && git push`

## 🔧 Nếu gặp lỗi:

### Authentication failed
```bash
# Tạo Personal Access Token trên GitHub
# Settings → Developer settings → Personal access tokens → Generate new token
# Chọn quyền "repo" và tạo token
# Sử dụng token thay password khi push
```

### Repository đã tồn tại
```bash
# Nếu báo repository đã tồn tại, thử:
git remote set-url origin https://github.com/minhm/geoguessr-vietnam.git
git push -u origin main
```

### Pages không hoạt động
- Kiểm tra file index.html có ở thư mục root không
- Đảm bảo branch main đã push thành công
- Xem tab Actions để xem log deploy

## 📱 Chia sẻ game:

Khi deploy xong, bạn có thể:
1. Share link web: `https://minhm.github.io/geoguessr-vietnam/`
2. Share mã QR để bạn bè quét bằng điện thoại
3. Game hoạt động trên cả desktop và mobile!

---

**Chúc bạn deploy thành công! 🚀**
