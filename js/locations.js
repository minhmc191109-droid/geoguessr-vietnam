// Dữ liệu địa điểm cho game GeoGuessr
// Mỗi địa điểm bao gồm: tên, tọa độ (lat, lng), và URL ảnh 360 độ

const locationsData = {
    // Chế độ Việt Nam
    vietnam: [
        {
            name: "Hồ Gươm (Hồ Hoàn Kiếm), Hà Nội",
            lat: 21.0282,
            lng: 105.8522,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hoan_Kiem_Lake_Hanoi_360.jpg/4096px-Hoan_Kiem_Lake_Hanoi_360.jpg"
        },
        {
            name: "Cầu Vàng, Bà Nà Hills, Đà Nẵng",
            lat: 15.9942,
            lng: 107.9714,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Golden_Bridge_Ba_Na_Hills_360.jpg/4096px-Golden_Bridge_Ba_Na_Hills_360.jpg"
        },
        {
            name: "Phố cổ Hội An",
            lat: 15.8790,
            lng: 108.3350,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Hoi_An_Ancient_Town_360.jpg/4096px-Hoi_An_Ancient_Town_360.jpg"
        },
        {
            name: "Vịnh Hạ Long",
            lat: 20.9101,
            lng: 107.1839,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ha_Long_Bay_360.jpg/4096px-Ha_Long_Bay_360.jpg"
        },
        {
            name: "Thánh địa Mỹ Sơn",
            lat: 15.7828,
            lng: 108.1042,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/My_Son_Sanctuary_360.jpg/4096px-My_Son_Sanctuary_360.jpg"
        },
        {
            name: "Chợ Bến Thành, TP.HCM",
            lat: 10.7721,
            lng: 106.6916,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Ben_Thanh_Market_360.jpg/4096px-Ben_Thanh_Market_360.jpg"
        },
        {
            name: "Nhà thờ Đức Bà, TP.HCM",
            lat: 10.7798,
            lng: 106.6984,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Saigon_Notre_Dame_Cathedral_360.jpg/4096px-Saigon_Notre_Dame_Cathedral_360.jpg"
        },
        {
            name: "Cột cờ Hà Nội",
            lat: 21.0295,
            lng: 105.8520,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hanoi_Flag_Tower_360.jpg/4096px-Hanoi_Flag_Tower_360.jpg"
        },
        {
            name: "Bãi biển Nha Trang",
            lat: 12.2387,
            lng: 109.1967,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Nha_Trang_Beach_360.jpg/4096px-Nha_Trang_Beach_360.jpg"
        },
        {
            name: "Đỉnh Fansipan, Lào Cai",
            lat: 22.3079,
            lng: 103.8120,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Fansipan_Mountain_360.jpg/4096px-Fansipan_Mountain_360.jpg"
        },
        {
            name: "Phú Quốc",
            lat: 10.2445,
            lng: 103.9867,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Phu_Quoc_Island_360.jpg/4096px-Phu_Quoc_Island_360.jpg"
        },
        {
            name: "Cần Thơ",
            lat: 10.0452,
            lng: 105.7469,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Can_Tho_City_360.jpg/4096px-Can_Tho_City_360.jpg"
        }
    ],
    
    // Chế độ Thế Giới
    world: [
        {
            name: "Tháp Eiffel, Paris, Pháp",
            lat: 48.8584,
            lng: 2.2945,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Eiffel_Tower_Paris_360.jpg/4096px-Eiffel_Tower_Paris_360.jpg"
        },
        {
            name: "Tượng Nữ Tự Do, New York, Mỹ",
            lat: 40.6892,
            lng: -74.0445,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_360.jpg/4096px-Statue_of_Liberty_360.jpg"
        },
        {
            name: "Đại Colosseum, Rome, Ý",
            lat: 41.8902,
            lng: 12.4922,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Colosseum_Rome_360.jpg/4096px-Colosseum_Rome_360.jpg"
        },
        {
            name: "Kinh thành Machu Picchu, Peru",
            lat: -13.1631,
            lng: -72.5450,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu_360.jpg/4096px-Machu_Picchu_360.jpg"
        },
        {
            name: "Vườn quốc gia Serengeti, Tanzania",
            lat: -2.1540,
            lng: 34.6857,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Serengeti_National_Park_360.jpg/4096px-Serengeti_National_Park_360.jpg"
        },
        {
            name: "Tòa nhà Empire State, New York, Mỹ",
            lat: 40.7484,
            lng: -73.9857,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Empire_State_Building_360.jpg/4096px-Empire_State_Building_360.jpg"
        },
        {
            name: "Cổng Brandenburg, Berlin, Đức",
            lat: 52.5163,
            lng: 13.3777,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Brandenburg_Gate_360.jpg/4096px-Brandenburg_Gate_360.jpg"
        },
        {
            name: "Kremlin, Moscow, Nga",
            lat: 55.7520,
            lng: 37.6173,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Moscow_Kremlin_360.jpg/4096px-Moscow_Kremlin_360.jpg"
        },
        {
            name: "Đền Taj Mahal, Ấn Độ",
            lat: 27.1751,
            lng: 78.0421,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Taj_Mahal_360.jpg/4096px-Taj_Mahal_360.jpg"
        },
        {
            name: "Vạn Lý Trường Thành, Trung Quốc",
            lat: 40.4319,
            lng: 116.5704,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Great_Wall_of_China_360.jpg/4096px-Great_Wall_of_China_360.jpg"
        },
        {
            name: "Tháp Sydney, Úc",
            lat: -33.8688,
            lng: 151.2093,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_360.jpg/4096px-Sydney_Opera_House_360.jpg"
        },
        {
            name: "Đại Kim Tự Tháp, Ai Cập",
            lat: 29.9792,
            lng: 31.1342,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Great_Pyramid_of_Giza_360.jpg/4096px-Great_Pyramid_of_Giza_360.jpg"
        }
    ],
    
    // Chế độ Danh Lam Thắng Cảnh
    landmarks: [
        {
            name: "Văn Miếu - Quốc Tử Giám, Hà Nội",
            lat: 21.0275,
            lng: 105.8349,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Temple_of_Literature_Hanoi_360.jpg/4096px-Temple_of_Literature_Hanoi_360.jpg"
        },
        {
            name: "Đền Ngự Sơn, Côn Đảo",
            lat: 8.6833,
            lng: 106.6167,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Con_Dao_Pristine_Beach_360.jpg/4096px-Con_Dao_Pristine_Beach_360.jpg"
        },
        {
            name: "Điện Huế, Huế",
            lat: 16.4637,
            lng: 107.5909,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hue_Imperial_City_360.jpg/4096px-Hue_Imperial_City_360.jpg"
        },
        {
            name: "Tháp Chàm Pô Nagar, Nha Trang",
            lat: 12.2452,
            lng: 109.1946,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Po_Nagar_Towers_360.jpg/4096px-Po_Nagar_Towers_360.jpg"
        },
        {
            name: "Hang Sơn Đoòng, Quảng Bình",
            lat: 17.2708,
            lng: 106.2833,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Son_Doong_Cave_360.jpg/4096px-Son_Doong_Cave_360.jpg"
        },
        {
            name: "Khu phố cổ Hà Nội",
            lat: 21.0313,
            lng: 105.8495,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Hanoi_Old_Quarter_360.jpg/4096px-Hanoi_Old_Quarter_360.jpg"
        },
        {
            name: "Dinh Độc Lập, TP.HCM",
            lat: 10.7790,
            lng: 106.6945,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Independence_Palace_360.jpg/4096px-Independence_Palace_360.jpg"
        },
        {
            name: "Thánh địa Đức Mẹ La Vang, Quảng Trị",
            lat: 16.7833,
            lng: 106.5833,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/La_Vang_Sanctuary_360.jpg/4096px-La_Vang_Sanctuary_360.jpg"
        },
        {
            name: "Khu du lịch Tam Đảo, Vĩnh Phúc",
            lat: 21.4745,
            lng: 105.6329,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tam_Dao_Hill_Station_360.jpg/4096px-Tam_Dao_Hill_Station_360.jpg"
        },
        {
            name: "Khu du lịch Đầm Pông, Đắk Lắk",
            lat: 12.6667,
            lng: 108.0333,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Dam_Pong_Lake_360.jpg/4096px-Dam_Pong_Lake_360.jpg"
        },
        {
            name: "Biển Đồi Dừa, Quảng Nam",
            lat: 15.9333,
            lng: 108.4667,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Coconut_Tree_Beach_360.jpg/4096px-Coconut_Tree_Beach_360.jpg"
        },
        {
            name: "Động Phong Nha, Quảng Bình",
            lat: 17.4167,
            lng: 106.2833,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Phong_Nha_Cave_360.jpg/4096px-Phong_Nha_Cave_360.jpg"
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
