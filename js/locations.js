// Dữ liệu địa điểm cho game GeoGuessr
// Mỗi địa điểm bao gồm: tên, tọa độ (lat, lng), và URL ảnh 360 độ

const locationsData = {
    // Chế độ Việt Nam
    vietnam: [
        {
            name: "Hồ Gươm (Hồ Hoàn Kiếm), Hà Nội",
            lat: 21.0282,
            lng: 105.8522,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/Hoan_Kiem_Lake_night_panorama.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
        },
        {
            name: "Cầu Vàng, Bà Nà Hills, Đà Nẵng",
            lat: 15.9942,
            lng: 107.9714,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/KDL_B%C3%A0_N%C3%A0%2C_c%C3%A2y_c%E1%BA%A7u_v%C3%A0ng%2C_T%C6%B0%E1%BB%A3ng_b%C3%A0n_tay%2C_th3n2021_%2814%29.jpg/960px-KDL_B%C3%A0_N%C3%A0%2C_c%C3%A2y_c%E1%BA%A7u_v%C3%A0ng%2C_T%C6%B0%E1%BB%A3ng_b%C3%A0n_tay%2C_th3n2021_%2814%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Phố cổ Hội An",
            lat: 15.8790,
            lng: 108.3350,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/2024-12-20_Hoi_An_Old_Town_at_night_4.jpg/960px-2024-12-20_Hoi_An_Old_Town_at_night_4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Vịnh Hạ Long",
            lat: 20.9101,
            lng: 107.1839,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Ha_Long_Bay_23.jpg/960px-Ha_Long_Bay_23.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Thánh địa Mỹ Sơn",
            lat: 15.7828,
            lng: 108.1042,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/My_Son_Sanctuary_Vietnam_02.jpg/960px-My_Son_Sanctuary_Vietnam_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Chợ Bến Thành, TP.HCM",
            lat: 10.7721,
            lng: 106.6916,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Ben_Thanh_Market_%2852681377938%29.jpg/960px-Ben_Thanh_Market_%2852681377938%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Nhà thờ Đức Bà, TP.HCM",
            lat: 10.7798,
            lng: 106.6984,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Behind_the_church_DUC_BA_SAI_GON_%2828840589742%29.jpg/960px-Behind_the_church_DUC_BA_SAI_GON_%2828840589742%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Cột cờ Hà Nội",
            lat: 21.0295,
            lng: 105.8520,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Flag_Tower_of_Hanoi%2C_1812_%281%29_%2837608539335%29.jpg/960px-Flag_Tower_of_Hanoi%2C_1812_%281%29_%2837608539335%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Bãi biển Nha Trang",
            lat: 12.2387,
            lng: 109.1967,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Nha_Trang_Beach_6.jpg/960px-Nha_Trang_Beach_6.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Đỉnh Fansipan, Lào Cai",
            lat: 22.3079,
            lng: 103.8120,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/C%C3%A1p-treo-fansipan-17.jpg/960px-C%C3%A1p-treo-fansipan-17.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Phú Quốc",
            lat: 10.2445,
            lng: 103.9867,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Sun_World_Hon_Thom_aerial_view_panorama_sunset_Phu_Quoc.jpg/960px-Sun_World_Hon_Thom_aerial_view_panorama_sunset_Phu_Quoc.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Cần Thơ",
            lat: 10.0452,
            lng: 105.7469,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/QL1_C%E1%BA%A7n_Th%C6%A1.jpg/960px-QL1_C%E1%BA%A7n_Th%C6%A1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        }
    ],
    
    // Chế độ Thế Giới
    world: [
        {
            name: "Tháp Eiffel, Paris, Pháp",
            lat: 48.8584,
            lng: 2.2945,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Panorama_of_the_Eiffel_Tower_in_July_2022.jpg/960px-Panorama_of_the_Eiffel_Tower_in_July_2022.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Tượng Nữ Tự Do, New York, Mỹ",
            lat: 40.6892,
            lng: -74.0445,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Photomontage_%28Forggensee_Panorama%29_-2.jpg/960px-Photomontage_%28Forggensee_Panorama%29_-2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Đại Colosseum, Rome, Ý",
            lat: 41.8902,
            lng: 12.4922,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Colosseum_in_Rome-April_2007-1-_copie_2B.jpg/960px-Colosseum_in_Rome-April_2007-1-_copie_2B.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Kinh thành Machu Picchu, Peru",
            lat: -13.1631,
            lng: -72.5450,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_47.JPG/960px-Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_47.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Vườn quốc gia Serengeti, Tanzania",
            lat: -2.1540,
            lng: 34.6857,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/004_Sunrise_at_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/960px-004_Sunrise_at_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Tòa nhà Empire State, New York, Mỹ",
            lat: 40.7484,
            lng: -73.9857,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Panorama_with_Empire_State_Building_at_night1.jpg/960px-Panorama_with_Empire_State_Building_at_night1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Cổng Brandenburg, Berlin, Đức",
            lat: 52.5163,
            lng: 13.3777,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Brandenburger_Tor_nachts_2012-07.jpg/960px-Brandenburger_Tor_nachts_2012-07.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Kremlin, Moscow, Nga",
            lat: 55.7520,
            lng: 37.6173,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Panorama_of_Moscow_Kremlin_001.jpg/960px-Panorama_of_Moscow_Kremlin_001.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Đền Taj Mahal, Ấn Độ",
            lat: 27.1751,
            lng: 78.0421,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Panorama_Taj_Mahal_Evening.jpg/960px-Panorama_Taj_Mahal_Evening.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Vạn Lý Trường Thành, Trung Quốc",
            lat: 40.4319,
            lng: 116.5704,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Great_wall_panorama.jpg/960px-Great_wall_panorama.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Nhà hát Sydney, Úc",
            lat: -33.8688,
            lng: 151.2093,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Sydney_%28AU%29%2C_Opera_House_--_2019_--_3061-4.jpg/960px-Sydney_%28AU%29%2C_Opera_House_--_2019_--_3061-4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Đại Kim Tự Tháp, Ai Cập",
            lat: 29.9792,
            lng: 31.1342,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Great_Pyramid_of_Giza_panorama.jpg/960px-Great_Pyramid_of_Giza_panorama.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        }
    ],
    
    // Chế độ Danh Lam Thắng Cảnh
    landmarks: [
        {
            name: "Văn Miếu - Quốc Tử Giám, Hà Nội",
            lat: 21.0275,
            lng: 105.8349,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/V%C4%83n_Mi%E1%BA%BFu_%E2%80%93_Qu%E1%BB%91c_T%E1%BB%AD_Gi%C3%A1m_%287%29.jpg/960px-V%C4%83n_Mi%E1%BA%BFu_%E2%80%93_Qu%E1%BB%91c_T%E1%BB%AD_Gi%C3%A1m_%287%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "Điện Huế, Huế",
            lat: 16.4637,
            lng: 107.5909,
            imageUrl: "https://cdnphoto.dantri.com.vn/qEDJ1zKQ4IkR29DOwNprCd57PDA=/thumb_w/1920/2024/02/04/dien-o-huevi-thao3-edited-1707044877041.jpeg?watermark=true"
        },
        {
            name: "Tháp Chàm Pô Nagar, Nha Trang",
            lat: 12.2452,
            lng: 109.1946,
            imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Th%C3%A1p_B%C3%A0_PONAGAR_-_panoramio.jpg/1280px-Th%C3%A1p_B%C3%A0_PONAGAR_-_panoramio.jpg?utm_source=vi.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
        },
        {
            name: "Hang Sơn Đoòng, Quảng Bình",
            lat: 17.2708,
            lng: 106.2833,
            imageUrl: "https://phongnhadiscovery.com/sites/default/files/sondoong_0.jpg"
        },
        {
            name: "Khu phố cổ Hà Nội",
            lat: 21.0313,
            lng: 105.8495,
            imageUrl: "https://owa.bestprice.vn/images/destinations/uploads/pho-co-ha-noi-601a111a931df.jpg"
        },
        {
            name: "Dinh Độc Lập, TP.HCM",
            lat: 10.7790,
            lng: 106.6945,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEgPGtcY5mY4CiwlwFci0SttEYNTYlgoXqT-6w4W8YlwZ8dA_8CX1riuZ&s=10"
        },
        {
            name: "Thánh địa Đức Mẹ La Vang, Quảng Trị",
            lat: 16.7833,
            lng: 106.5833,
            imageUrl: "https://lalago.vn/wp-content/uploads/2025/07/Thanh-dia-Duc-Me-La-Vang-6.jpg"
        },
        {
            name: "Khu du lịch Tam Đảo, Vĩnh Phúc",
            lat: 21.4745,
            lng: 105.6329,
            imageUrl: "https://cdn-images.vtv.vn/zoom/554_346/2022/12/4/dq-16701295863421921407155-crop-1670129602744347913879.png"
        },
        {
            name: "Khu du lịch Krông Kmar, Đắk Lắk",
            lat: 12.6667,
            lng: 108.0333,
            imageUrl: "https://cdn.tgdd.vn/Files/2023/09/30/1549852/du-lich-krong-bong-dak-lak-5-dia-diem-khong-the-bo-lo-202309302339364665.jpg"
        },
        {
            name: "Biển Đồi Dừa, Quảng Nam",
            lat: 15.9333,
            lng: 108.4667,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4Q3MVgLMyDw44GONlsvsWFekr24mgN2xoAgH7OuAeg&s=10"
        },
        {
            name: "Động Phong Nha, Quảng Bình",
            lat: 17.4167,
            lng: 106.2833,
            imageUrl: "https://images2.thanhnien.vn/528068263637045248/2025/7/19/phong-nha-ke-bang-bieu-tuong-du-lich-mang-tam-quoc-teanh-quangtri-tourism-1752945562613768220134.jpg"
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
