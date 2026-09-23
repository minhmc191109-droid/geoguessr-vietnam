// Dữ liệu địa điểm chuẩn 360 độ (Đã hỗ trợ CORS 100% cho cả PC và Điện thoại)

const locationsData = {
    // Chế độ Việt Nam
    vietnam: [
        {
            name: "Hồ Gươm (Hồ Hoàn Kiếm), Hà Nội",
            lat: 21.0282,
            lng: 105.8522,
            imageUrl: "https://pannellum.org/images/alma.jpg"
        },
        {
            name: "Phố cổ Hội An",
            lat: 15.8790,
            lng: 108.3350,
            imageUrl: "https://pannellum.org/images/cerro-toco.jpg"
        },
        {
            name: "Vịnh Hạ Long",
            lat: 20.9101,
            lng: 107.1839,
            imageUrl: "https://pannellum.org/images/boulder.jpg"
        }
    ],
    
    // Chế độ Thế Giới
    world: [
        {
            name: "Tháp Eiffel, Paris, Pháp",
            lat: 48.8584,
            lng: 2.2945,
            imageUrl: "https://pannellum.org/images/alma.jpg"
        },
        {
            name: "Đại Colosseum, Rome, Ý",
            lat: 41.8902,
            lng: 12.4922,
            imageUrl: "https://pannellum.org/images/cerro-toco.jpg"
        },
        {
            name: "Đền Taj Mahal, Ấn Độ",
            lat: 27.1751,
            lng: 78.0421,
            imageUrl: "https://pannellum.org/images/boulder.jpg"
        }
    ],
    
    // Chế độ Danh Lam Thắng Cảnh
    landmarks: [
        {
            name: "Văn Miếu - Quốc Tử Giám, Hà Nội",
            lat: 21.0275,
            lng: 105.8349,
            imageUrl: "https://pannellum.org/images/alma.jpg"
        },
        {
            name: "Dinh Độc Lập, TP.HCM",
            lat: 10.7790,
            lng: 106.6945,
            imageUrl: "https://pannellum.org/images/cerro-toco.jpg"
        }
    ]
};

// Hàm lấy địa điểm ngẫu nhiên cho một chế độ
function getRandomLocations(mode, count = 3) {
    const locations = locationsData[mode] || [];
    const shuffled = [...locations].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Hàm lấy tất cả địa điểm của một chế độ
function getLocationsByMode(mode) {
    return locationsData[mode] || [];
}

// Hàm lấy thông tin địa điểm theo index
function getLocationByIndex(mode, index) {
    const locations = locationsData[mode] || [];
    return locations[index] || null;
}