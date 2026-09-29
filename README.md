# 🌍 GeoGuessr Việt Nam - Game Đoán Vị Trí

Một web game đoán vị trí theo phong cách GeoGuessr được xây dựng bằng HTML, CSS và JavaScript thuần. Game sử dụng ảnh 360 độ và bản đồ tương tác để tạo trải nghiệm chơi game thú vị.

## 🎮 Tính năng chính

- **3 Chế độ chơi**: Việt Nam, Thế Giới, và Danh Lam Thắng Cảnh
- **Ảnh 360 độ**: Sử dụng thư viện Pannellum.js để hiển thị ảnh panorama
- **Bản đồ tương tác**: Sử dụng Leaflet.js và OpenStreetMap miễn phí
- **Hệ thống điểm**: Tính điểm dựa trên khoảng cách giữa vị trí đoán và thực tế
- **Bảng xếp hạng**: Lưu và hiển thị top 10 điểm cao nhất theo LocalStorage
- **Responsive Design**: Hoạt động tốt trên cả desktop và mobile
- **Giao diện hiện đại**: Hiệu ứng sinh động và thân thiện với người dùng

## 📁 Cấu trúc thư mục

```
geoguessr-game/
├── index.html              # File HTML chính
├── css/
│   └── styles.css          # File CSS với giao diện responsive
├── js/
│   ├── game.js             # Logic game chính
│   └── locations.js        # Dữ liệu địa điểm mẫu
├── images/                 # Thư mục chứa ảnh (nếu cần)
└── README.md              # File hướng dẫn này
```

## 🚀 Cách chạy dự án

### Cách 1: Mở trực tiếp bằng trình duyệt (Đơn giản nhất)

1. Tải xuống hoặc clone dự án
2. Mở file `index.html` bằng trình duyệt web (Chrome, Firefox, Edge, Safari)
3. Bắt đầu chơi game!

### Cách 2: Sử dụng Live Server (Khuyên dùng)

Nếu bạn sử dụng VS Code:

1. Cài đặt extension "Live Server"
2. Chuột phải vào file `index.html`
3. Chọn "Open with Live Server"
4. Game sẽ mở tự động trong trình duyệt

### Cách 3: Sử dụng Python HTTP Server

```bash
# Điều hướng đến thư mục dự án
cd geoguessr-game

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Sau đó mở trình duyệt và truy cập: `http://localhost:8000`

### Cách 4: Sử dụng Node.js HTTP Server

```bash
# Cài đặt http-server (chỉ cần làm 1 lần)
npm install -g http-server

# Điều hướng đến thư mục dự án
cd geoguessr-game

# Chạy server
http-server -p 8000
```

Sau đó mở trình duyệt và truy cập: `http://localhost:8000`

## 🎯 Cách chơi

1. **Màn hình bắt đầu**:
   - Nhập tên người chơi của bạn
   - Chọn 1 trong 3 chế độ chơi:
     - 🇻🇳 **Việt Nam**: Các địa điểm nổi tiếng tại Việt Nam
     - 🌍 **Thế Giới**: Các địa danh nổi tiếng thế giới
     - 🏛️ **Danh Lam Thắng Cảnh**: Các di sản và danh lam thắng cảnh
   - Nhấn "Bắt đầu chơi"

2. **Gameplay**:
   - Mỗi chế độ có 3 vòng chơi
   - Xoay ảnh 360 độ để tìm gợi ý về vị trí
   - Click chọn một điểm trên bản đồ nhỏ ở góc phải
   - Nhấn nút "Đoán" để xác nhận
   - Điểm sẽ được tính dựa trên khoảng cách giữa vị trí đoán và thực tế

3. **Kết quả vòng**:
   - Xem khoảng cách chênh lệch và điểm đạt được
   - Xem vị trí thực tế trên bản đồ
   - Nhấn "Vòng tiếp theo" để tiếp tục

4. **Kết thúc game**:
   - Xem tổng điểm sau 3 vòng (tối đa 15,000 điểm)
   - Kết quả được lưu tự động vào LocalStorage
   - Xem bảng xếp hạng hoặc chơi lại

## 📊 Hệ thống điểm

- **Tối đa 5,000 điểm** cho mỗi vòng
- **Tổng tối đa 15,000 điểm** cho 3 vòng
- Điểm được tính theo công thức: `Score = 5000 * exp(-distance / 2000)`
- Khoảng cách càng gần, điểm càng cao
- Khoảng cách ≥ 10,000 km = 0 điểm

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Giao diện responsive và hiệu ứng
- **JavaScript (ES6+)**: Logic game
- **Pannellum.js**: Thư viện mã nguồn mở cho ảnh 360 độ
- **Leaflet.js**: Thư viện bản đồ tương tác
- **OpenStreetMap**: Dữ liệu bản đồ miễn phí

## 📝 Tùy chỉnh dữ liệu địa điểm

Bạn có thể thêm/sửa/xóa địa điểm trong file `js/locations.js`:

```javascript
const locationsData = {
    vietnam: [
        {
            name: "Tên địa điểm",
            lat: 21.0282,        // Vĩ độ
            lng: 105.8522,       // Kinh độ
            imageUrl: "URL_ảnh_360"  // URL ảnh 360 độ
        },
        // Thêm địa điểm khác...
    ],
    // Các chế độ khác...
};
```

### Lấy tọa độ từ Google Maps

1. Mở Google Maps
2. Click chuột phải vào vị trí cần lấy tọchie62u
3. Chọn tọa độ hiển thị
4. Copy vào file locations.js

### Tìm ảnh 360 độ miễn phí

- **Wikimedia Commons**: Tìm kiếm "panorama" hoặc "360"
- **Unsplash**: Tìm kiếm "panorama", "landscape", "360"
- **Pexels**: Tìm kiếm ảnh chất lượng cao
- **Flickr**: Tìm kiếm ảnh Creative Commons

## 🐛 Khắc phục sự cố

### Ảnh không hiển thị

- Kiểm tra URL ảnh có đúng không
- Thử sử dụng ảnh demo từ Unsplash thay thế
- Đảm bảo không bị block bởi CORS policy

### Bản đồ không hiển thị

- Kiểm tra kết nối internet
- Đảm bảo Leaflet.js và OpenStreetMap được load
- Thử refresh trang

### LocalStorage không hoạt động

- Đảm bảo trình duyệt hỗ trợ LocalStorage
- Kiểm tra xem trình duyệt có đang ở chế độ private/incognito không
- Thử xóa cache và cookies

## 🌐 Triển khai (Deployment)

### GitHub Pages

1. Upload code lên GitHub repository
2. Vào Settings > Pages
3. Chọn branch và folder (thường là `main` và `/`)
4. Game sẽ được deploy tại `https://username.github.io/repo-name`

### Netlify

1. Upload code lên GitHub
2. Đăng ký Netlify và import repository
3. Cài đặt build command: (không cần)
4. Deploy directory: `geoguessr-game` hoặc root folder

### Vercel

1. Upload code lên GitHub
2. Đăng ký Vercel và import repository
3. Cài đặt framework preset: Other
4. Deploy directory: `geoguessr-game` hoặc root folder

## 🤝 Đóng góp

Mọi đóng góp, báo cáo bug, hoặc đề xuất tính năng đều được chào đón!

## 📄 Giấy phép

Dự án này được phát triển với mục đích học tập và phi lợi nhuận. Các thư viện bên thứ ba (Pannellum.js, Leaflet.js) được sử dụng theo giấy phép tương ứng của chúng.

## 🎨 Tùy chỉnh giao diện

Bạn có thể chỉnh sửa giao diện trong file `css/styles.css`:

- **Màu sắc**: Thay đổi gradient colors trong `body` và các màn hình
- **Font**: Thay đổi font-family trong phần `body`
- **Responsive**: Chỉnh sửa các media queries cho different screen sizes
- **Animations**: Thêm hoặc sửa các keyframe animations

## 🔒 Bảo mật

- Game sử dụng LocalStorage để lưu điểm số (client-side only)
- Không thu thập thông tin cá nhân
- Không sử dụng API key nào
- Hoàn toàn offline-friendly (sau khi load lần đầu)

## 📞 Liên hệ

Nếu có câu hỏi hoặc cần hỗ trợ, vui lòng tạo issue trong repository hoặc liên hệ qua email.

---

**Chúc bạn chơi game vui vẻ! 🎮🌍**
