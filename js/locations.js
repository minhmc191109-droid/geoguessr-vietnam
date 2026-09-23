// Dữ liệu địa điểm cho game GeoGuessr
// Đã fix lỗi load ảnh bằng Cloudflare AllOrigins Proxy

function getCorsUrl(url) {
    return `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
}

const locationsData = {
    // Chế độ Việt Nam
    vietnam: [
        {
            name: "Hồ Gươm (Hồ Hoàn Kiếm), Hà Nội",
            lat: 21.0282,
            lng: 105.8522,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/3/35/Hoan_Kiem_Lake_night_panorama.jpg")
        },
        {
            name: "Cầu Vàng, Bà Nà Hills, Đà Nẵng",
            lat: 15.9942,
            lng: 107.9714,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/KDL_B%C3%A0_N%C3%A0%2C_c%C3%A2y_c%E1%BA%A7u_v%C3%A0ng%2C_T%C6%B0%E1%BB%A3ng_b%C3%A0n_tay%2C_th3n2021_%2814%29.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Phố cổ Hội An",
            lat: 15.8790,
            lng: 108.3350,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/2024-12-20_Hoi_An_Old_Town_at_night_4.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Vịnh Hạ Long",
            lat: 20.9101,
            lng: 107.1839,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Ha_Long_Bay_23.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Thánh địa Mỹ Sơn",
            lat: 15.7828,
            lng: 108.1042,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/My_Son_Sanctuary_Vietnam_02.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Chợ Bến Thành, TP.HCM",
            lat: 10.7721,
            lng: 106.6916,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ben_Thanh_Market_%2852681377938%29.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Nhà thờ Đức Bà, TP.HCM",
            lat: 10.7798,
            lng: 106.6984,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Behind_the_church_DUC_BA_SAI_GON_%2828840589742%29.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Cột cờ Hà Nội",
            lat: 21.0295,
            lng: 105.8520,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Flag_Tower_of_Hanoi%2C_1812_%281%29_%2837608539335%29.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Bãi biển Nha Trang",
            lat: 12.2387,
            lng: 109.1967,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Nha_Trang_Beach_6.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Đỉnh Fansipan, Lào Cai",
            lat: 22.3079,
            lng: 103.8120,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/C%C3%A1p-treo-fansipan-17.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Phú Quốc",
            lat: 10.2445,
            lng: 103.9867,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Sun_World_Hon_Thom_aerial_view_panorama_sunset_Phu_Quoc.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Cần Thơ",
            lat: 10.0452,
            lng: 105.7469,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/QL1_C%E1%BA%A7n_Th%C6%A1.jpg/1280px-thumbnail.jpg")
        }
    ],
    
    // Chế độ Thế Giới
    world: [
        {
            name: "Tháp Eiffel, Paris, Pháp",
            lat: 48.8584,
            lng: 2.2945,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Panorama_of_the_Eiffel_Tower_in_July_2022.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Tượng Nữ Tự Do, New York, Mỹ",
            lat: 40.6892,
            lng: -74.0445,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Photomontage_%28Forggensee_Panorama%29_-2.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Đại Colosseum, Rome, Ý",
            lat: 41.8902,
            lng: 12.4922,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Colosseum_in_Rome-April_2007-1-_copie_2B.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Kinh thành Machu Picchu, Peru",
            lat: -13.1631,
            lng: -72.5450,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_47.JPG/1280px-thumbnail.jpg")
        },
        {
            name: "Vườn quốc gia Serengeti, Tanzania",
            lat: -2.1540,
            lng: 34.6857,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/004_Sunrise_at_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Tòa nhà Empire State, New York, Mỹ",
            lat: 40.7484,
            lng: -73.9857,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Panorama_with_Empire_State_Building_at_night1.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Cổng Brandenburg, Berlin, Đức",
            lat: 52.5163,
            lng: 13.3777,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Brandenburger_Tor_nachts_2012-07.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Kremlin, Moscow, Nga",
            lat: 55.7520,
            lng: 37.6173,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Panorama_of_Moscow_Kremlin_001.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Đền Taj Mahal, Ấn Độ",
            lat: 27.1751,
            lng: 78.0421,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Panorama_Taj_Mahal_Evening.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Vạn Lý Trường Thành, Trung Quốc",
            lat: 40.4319,
            lng: 116.5704,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Great_wall_panorama.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Nhà hát Sydney, Úc",
            lat: -33.8688,
            lng: 151.2093,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sydney_%28AU%29%2C_Opera_House_--_2019_--_3061-4.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Đại Kim Tự Tháp, Ai Cập",
            lat: 29.9792,
            lng: 31.1342,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Great_Pyramid_of_Giza_panorama.jpg/1280px-thumbnail.jpg")
        }
    ],
    
    // Chế độ Danh Lam Thắng Cảnh
    landmarks: [
        {
            name: "Văn Miếu - Quốc Tử Giám, Hà Nội",
            lat: 21.0275,
            lng: 105.8349,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/V%C4%83n_Mi%E1%BA%BFu_%E2%80%93_Qu%E1%BB%91c_T%E1%BB%AD_Gi%C3%A1m_%287%29.jpg/1280px-thumbnail.jpg")
        },
        {
            name: "Tháp Chàm Pô Nagar, Nha Trang",
            lat: 12.2452,
            lng: 109.1946,
            imageUrl: getCorsUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Th%C3%A1p_B%C3%A0_PONAGAR_-_panoramio.jpg/1280px-thumbnail.jpg")
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