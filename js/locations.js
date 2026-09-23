// Dữ liệu địa điểm chuẩn 360 độ (Equirectangular Panoramas)
// Mỗi chế độ gồm 12 địa điểm với tọa độ lat/lng chính xác

const locationsData = {
    // Chế độ Việt Nam (12 địa điểm)
    vietnam: [
        {
            name: "Hồ Gươm (Hồ Hoàn Kiếm), Hà Nội",
            lat: 21.0285,
            lng: 105.8542,
            imageUrl: "https://36pho.com/thumbnail/upload/2024/12/16/w-ho-guom-1-13726-1.jpg?w=1202&h=902&cr=1"
        },
        {
            name: "Chợ Bến Thành, TP.HCM",
            lat: 10.7721,
            lng: 106.6982,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ben_Thanh_Market_Panorama.jpg"
        },
        {
            name: "Phố cổ Hội An, Quảng Nam",
            lat: 15.8794,
            lng: 108.3282,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/30/2024-12-20_Hoi_An_Old_Town_at_night_4.jpg"
        },
        {
            name: "Vịnh Hạ Long, Quảng Ninh",
            lat: 20.9101,
            lng: 107.1839,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Ha_Long_Bay_23.jpg"
        },
        {
            name: "Thánh địa Mỹ Sơn, Quảng Nam",
            lat: 15.7828,
            lng: 108.1042,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/My_Son_Sanctuary_Vietnam_02.jpg"
        },
        {
            name: "Nhà thờ Đức Bà, TP.HCM",
            lat: 10.7798,
            lng: 106.6984,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/Behind_the_church_DUC_BA_SAI_GON_%2828840589742%29.jpg"
        },
        {
            name: "Cột cờ Hà Nội",
            lat: 21.0295,
            lng: 105.8520,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_Tower_of_Hanoi%2C_1812_%281%29_%2837608539335%29.jpg"
        },
        {
            name: "Bãi biển Nha Trang, Khánh Hòa",
            lat: 12.2387,
            lng: 109.1967,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/85/Nha_Trang_Beach_6.jpg"
        },
        {
            name: "Đỉnh Fansipan, Lào Cai",
            lat: 22.3079,
            lng: 103.8120,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/de/C%C3%A1p-treo-fansipan-17.jpg"
        },
        {
            name: "Đảo Phú Quốc, Kiên Giang",
            lat: 10.2445,
            lng: 103.9867,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Sun_World_Hon_Thom_aerial_view_panorama_sunset_Phu_Quoc.jpg"
        },
        {
            name: "Cầu Cần Thơ",
            lat: 10.0452,
            lng: 105.7469,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/QL1_C%E1%BA%A7n_Th%C6%A1.jpg"
        },
        {
            name: "Khu du lịch Tràng An, Ninh Bình",
            lat: 20.2526,
            lng: 105.9142,
            imageUrl: "https://ik.imagekit.io/tvlk/blog/2022/11/khu-du-lich-trang-an-2.jpg"
        }
    ],
    
    // Chế độ Thế Giới (12 địa điểm)
    world: [
        {
            name: "Tháp Eiffel, Paris, Pháp",
            lat: 48.8584,
            lng: 2.2945,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/02/Panorama_of_the_Eiffel_Tower_in_July_2022.jpg"
        },
        {
            name: "Tượng Nữ Thần Tự Do, New York, Mỹ",
            lat: 40.6892,
            lng: -74.0445,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/97/Photomontage_%28Forggensee_Panorama%29_-2.jpg"
        },
        {
            name: "Đấu trường Colosseum, Rome, Ý",
            lat: 41.8902,
            lng: 12.4922,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Colosseum_in_Rome-April_2007-1-_copie_2B.jpg"
        },
        {
            name: "Thành phố cổ Machu Picchu, Peru",
            lat: -13.1631,
            lng: -72.5450,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_47.JPG"
        },
        {
            name: "Vườn quốc gia Serengeti, Tanzania",
            lat: -2.1540,
            lng: 34.6857,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/004_Sunrise_at_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg"
        },
        {
            name: "Tòa nhà Empire State, New York, Mỹ",
            lat: 40.7484,
            lng: -73.9857,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/30/Panorama_with_Empire_State_Building_at_night1.jpg"
        },
        {
            name: "Cổng Brandenburg, Berlin, Đức",
            lat: 52.5163,
            lng: 13.3777,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/Brandenburger_Tor_nachts_2012-07.jpg"
        },
        {
            name: "Điện Kremlin, Moscow, Nga",
            lat: 55.7520,
            lng: 37.6173,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Panorama_of_Moscow_Kremlin_001.jpg"
        },
        {
            name: "Đền Taj Mahal, Agra, Ấn Độ",
            lat: 27.1751,
            lng: 78.0421,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/Panorama_Taj_Mahal_Evening.jpg"
        },
        {
            name: "Vạn Lý Trường Thành, Trung Quốc",
            lat: 40.4319,
            lng: 116.5704,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/02/Great_wall_panorama.jpg"
        },
        {
            name: "Nhà hát Opera Sydney, Úc",
            lat: -33.8568,
            lng: 151.2153,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Sydney_%28AU%29%2C_Opera_House_--_2019_--_3061-4.jpg"
        },
        {
            name: "Đại Kim Tự Tháp Giza, Ai Cập",
            lat: 29.9792,
            lng: 31.1342,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Great_Pyramid_of_Giza_panorama.jpg"
        }
    ],
    
    // Chế độ Danh Lam Thắng Cảnh (12 địa điểm)
    landmarks: [
        {
            name: "Văn Miếu - Quốc Tử Giám, Hà Nội",
            lat: 21.0275,
            lng: 105.8349,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4d/V%C4%83n_Mi%E1%BA%BFu_%E2%80%93_Qu%E1%BB%91c_T%E1%BB%AD_Gi%C3%A1m_%287%29.jpg"
        },
        {
            name: "Cố đô Huế, Thừa Thiên Huế",
            lat: 16.4637,
            lng: 107.5909,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hue_Imperial_City_Panorama.jpg"
        },
        {
            name: "Tháp Chàm Po Nagar, Nha Trang",
            lat: 12.2452,
            lng: 109.1946,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/Th%C3%A1p_B%C3%A0_PONAGAR_-_panoramio.jpg"
        },
        {
            name: "Dinh Độc Lập, TP.HCM",
            lat: 10.7790,
            lng: 106.6945,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Independence_Palace_Panorama_Ho_Chi_Minh_City.jpg"
        },
        {
            name: "Chùa Bái Đính, Ninh Bình",
            lat: 20.2742,
            lng: 105.8524,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Bai_Dinh_Pagoda_Panorama.jpg"
        },
        {
            name: "Động Phong Nha, Quảng Bình",
            lat: 17.4167,
            lng: 106.2833,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Phong_Nha_Cave_Entrance_Panorama.jpg"
        },
        {
            name: "Tháp Trầm Hương, Nha Trang",
            lat: 12.2398,
            lng: 109.1962,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/Tram_Huong_Tower_Nha_Trang_Panorama.jpg"
        },
        {
            name: "Chùa Một Cột, Hà Nội",
            lat: 21.0358,
            lng: 105.8336,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Pillar_Pagoda_Hanoi_Panorama.jpg"
        },
        {
            name: "Cầu Rồng, Đà Nẵng",
            lat: 16.0611,
            lng: 108.2272,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/22/Dragon_Bridge_Da_Nang_Panorama.jpg"
        },
        {
            name: "Núi Bà Đen, Tây Ninh",
            lat: 11.3712,
            lng: 106.1685,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Ba_Den_Mountain_Tay_Ninh_Panorama.jpg"
        },
        {
            name: "Đèo Mã Pí Lèng, Hà Giang",
            lat: 23.2389,
            lng: 105.4194,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Ma_Pi_Leng_Pass_Ha_Giang_Panorama.jpg"
        },
        {
            name: "Chợ Nổi Cái Răng, Cần Thơ",
            lat: 10.0058,
            lng: 105.7461,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Cai_Rang_Floating_Market_Can_Tho_Panorama.jpg"
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
