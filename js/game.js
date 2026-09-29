// Game State Management
const gameState = {
    playerName: '',
    gameMode: null,
    currentRound: 0,
    totalRounds: 3,
    totalScore: 0,
    currentLocation: null,
    gameLocations: [],
    userGuess: null,
    gameMap: null,
    resultMap: null,
    panoramaViewer: null,
    guessMarker: null
};

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    game: document.getElementById('game-screen'),
    roundResult: document.getElementById('round-result-screen'),
    finalResult: document.getElementById('final-result-screen'),
    leaderboard: document.getElementById('leaderboard-screen')
};

// Utility Functions
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenName].classList.add('active');
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Bán kính trái đất trong km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function calculateScore(distance) {
    // Tính điểm dựa trên khoảng cách (càng gần càng cao)
    // Tối đa 5000 điểm cho mỗi vòng
    const maxScore = 5000;
    const maxDistance = 10000; // 10000 km = 0 điểm
    
    if (distance >= maxDistance) return 0;
    if (distance === 0) return maxScore;
    
    // Công thức điểm theo hàm mũ
    const score = maxScore * Math.exp(-distance / 2000);
    return Math.round(score);
}

function formatDistance(distance) {
    if (distance < 1) {
        return `${Math.round(distance * 1000)} m`;
    }
    return `${distance.toFixed(2)} km`;
}

// LocalStorage Functions
function saveScore(playerName, score, mode) {
    const scores = JSON.parse(localStorage.getItem('geoguessr_scores') || '[]');
    scores.push({
        playerName,
        score,
        mode,
        date: new Date().toISOString()
    });
    localStorage.setItem('geoguessr_scores', JSON.stringify(scores));
}

function getScoresByMode(mode) {
    const scores = JSON.parse(localStorage.getItem('geoguessr_scores') || '[]');
    return scores
        .filter(score => score.mode === mode)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
}

// Map Functions
function initGameMap() {
    if (gameState.gameMap) {
        gameState.gameMap.remove();
    }
    
    // Đảm bảo container có kích thước trước khi khởi tạo bản đồ
    const mapContainer = document.getElementById('game-map');
    if (!mapContainer) return;
    
    gameState.gameMap = L.map('game-map', {
        center: [20, 0],
        zoom: 2,
        zoomControl: true
    });
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(gameState.gameMap);
    
    // Xử lý click trên bản đồ
    gameState.gameMap.on('click', function(e) {
        handleMapClick(e.latlng);
    });
    
    // Force invalidate size sau khi khởi tạo
    setTimeout(() => {
        gameState.gameMap.invalidateSize();
    }, 100);
}

function handleMapClick(latlng) {
    // Xóa marker cũ nếu có
    if (gameState.guessMarker) {
        gameState.gameMap.removeLayer(gameState.guessMarker);
    }
    
    // Thêm marker mới
    gameState.guessMarker = L.marker([latlng.lat, latlng.lng])
        .addTo(gameState.gameMap);
    
    gameState.userGuess = {
        lat: latlng.lat,
        lng: latlng.lng
    };
    
    // Bật nút đoán
    document.getElementById('guess-btn').disabled = false;
}

function initResultMap() {
    if (gameState.resultMap) {
        gameState.resultMap.remove();
    }
    
    // Đảm bảo container có kích thước trước khi khởi tạo bản đồ
    const mapContainer = document.getElementById('result-map');
    if (!mapContainer) return;
    
    gameState.resultMap = L.map('result-map', {
        center: [0, 0],
        zoom: 2,
        zoomControl: true
    });
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(gameState.resultMap);
    
    // Force invalidate size sau khi khởi tạo
    setTimeout(() => {
        gameState.resultMap.invalidateSize();
    }, 100);
}

function showResultOnMap(actualLocation, userGuess) {
    // Marker vị trí thực tế (xanh lá)
    const actualMarker = L.marker([actualLocation.lat, actualLocation.lng], {
        icon: L.divIcon({
            className: 'custom-marker',
            html: '<div style="background: #4CAF50; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        })
    }).addTo(gameState.resultMap);
    
    actualMarker.bindPopup(`<b>Vị trí thực:</b><br>${actualLocation.name}`).openPopup();
    
    // Marker vị trí đoán (đỏ)
    const guessMarker = L.marker([userGuess.lat, userGuess.lng], {
        icon: L.divIcon({
            className: 'custom-marker',
            html: '<div style="background: #f44336; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        })
    }).addTo(gameState.resultMap);
    
    guessMarker.bindPopup('<b>Vị trí đoán của bạn</b>');
    
    // Vẽ đường nối
    const line = L.polyline([
        [actualLocation.lat, actualLocation.lng],
        [userGuess.lat, userGuess.lng]
    ], {
        color: '#ff9800',
        weight: 3,
        opacity: 0.7,
        dashArray: '10, 10'
    }).addTo(gameState.resultMap);
    
    // Fit bounds để hiển thị cả 2 marker
    const bounds = L.latLngBounds([
        [actualLocation.lat, actualLocation.lng],
        [userGuess.lat, userGuess.lng]
    ]);
    gameState.resultMap.fitBounds(bounds, { padding: [50, 50] });
}

// Panorama Functions
function initPanorama(imageUrl) {
    if (gameState.panoramaViewer) {
        gameState.panoramaViewer.destroy();
    }
    
    gameState.panoramaViewer = pannellum.viewer('panorama', {
        "type": "equirectangular",
        "panorama": imageUrl,
        "autoLoad": true,
        "showControls": true,
        "mouseZoom": true,
        "draggable": true,
        "disableKeyboardCtrl": false,
        "keyboardControls": true,
        "preview": "",
        "previewTitle": "",
        "previewAuthor": "",
        "autoRotate": false,
        "autoRotateInactivityDelay": -1,
        "minHfov": 30,
        "maxHfov": 120,
        "minPitch": -90,
        "maxPitch": 90,
        "yaw": 0,
        "pitch": 0,
        "hfov": 100
    });
}

// Game Flow Functions
function startGame() {
    const playerName = document.getElementById('player-name').value.trim();
    const selectedMode = document.querySelector('.mode-btn.selected');
    
    if (!playerName || !selectedMode) {
        alert('Vui lòng nhập tên và chọn chế độ chơi!');
        return;
    }
    
    gameState.playerName = playerName;
    gameState.gameMode = selectedMode.dataset.mode;
    gameState.currentRound = 0;
    gameState.totalScore = 0;
    gameState.gameLocations = getRandomLocations(gameState.gameMode, gameState.totalRounds);
    
    // Cập nhật UI
    document.getElementById('player-display').textContent = `Người chơi: ${playerName}`;
    
    showScreen('game');
    startRound();
}

function startRound() {
    gameState.currentRound++;
    gameState.userGuess = null;
    
    // Reset UI
    document.getElementById('round-display').textContent = `Vòng: ${gameState.currentRound}/${gameState.totalRounds}`;
    document.getElementById('score-display').textContent = `Điểm: ${gameState.totalScore}`;
    document.getElementById('guess-btn').disabled = true;
    
    // Reset map
    if (gameState.guessMarker) {
        gameState.gameMap.removeLayer(gameState.guessMarker);
        gameState.guessMarker = null;
    }
    
    // Re-initialize map để đảm bảo hiển thị đúng
    setTimeout(() => {
        initGameMap();
        gameState.gameMap.setView([20, 0], 2);
    }, 100);
    
    // Load location
    gameState.currentLocation = gameState.gameLocations[gameState.currentRound - 1];
    
    // Init panorama với ảnh thực của địa điểm
    initPanorama(gameState.currentLocation.imageUrl);
    
    // Focus vào panorama container
    document.getElementById('panorama-container').scrollIntoView({ behavior: 'smooth' });
}

function submitGuess() {
    if (!gameState.userGuess) {
        alert('Vui lòng chọn một điểm trên bản đồ!');
        return;
    }
    
    const actualLocation = gameState.currentLocation;
    const distance = calculateDistance(
        actualLocation.lat,
        actualLocation.lng,
        gameState.userGuess.lat,
        gameState.userGuess.lng
    );
    
    const roundScore = calculateScore(distance);
    gameState.totalScore += roundScore;
    
    // Hiển thị kết quả
    document.getElementById('round-number').textContent = gameState.currentRound;
    document.getElementById('actual-location').textContent = actualLocation.name;
    document.getElementById('distance').textContent = formatDistance(distance);
    document.getElementById('round-score').textContent = roundScore;
    
    // Init result map
    initResultMap();
    showResultOnMap(actualLocation, gameState.userGuess);
    
    showScreen('roundResult');
}

function nextRound() {
    if (gameState.currentRound < gameState.totalRounds) {
        showScreen('game');
        startRound();
    } else {
        endGame();
    }
}

function endGame() {
    // Lưu điểm
    saveScore(gameState.playerName, gameState.totalScore, gameState.gameMode);
    
    // Hiển thị kết quả cuối
    const modeNames = {
        vietnam: 'Việt Nam',
        world: 'Thế Giới',
        landmarks: 'Danh Lam Thắng Cảnh'
    };
    
    document.getElementById('final-player').textContent = gameState.playerName;
    document.getElementById('final-mode').textContent = modeNames[gameState.gameMode];
    document.getElementById('final-score').textContent = gameState.totalScore;
    
    showScreen('finalResult');
}

function showLeaderboard(mode = 'vietnam') {
    const scores = getScoresByMode(mode);
    const tbody = document.getElementById('leaderboard-body');
    
    if (scores.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: #999;">Chưa có dữ liệu</td></tr>';
    } else {
        tbody.innerHTML = scores.map((score, index) => {
            const date = new Date(score.date).toLocaleDateString('vi-VN');
            return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${score.playerName}</td>
                    <td>${score.score}</td>
                    <td>${date}</td>
                </tr>
            `;
        }).join('');
    }
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.mode === mode) {
            btn.classList.add('active');
        }
    });
    
    showScreen('leaderboard');
}

function resetGame() {
    gameState.playerName = '';
    gameState.gameMode = null;
    gameState.currentRound = 0;
    gameState.totalScore = 0;
    gameState.currentLocation = null;
    gameState.userGuess = null;
    
    // Reset UI
    document.getElementById('player-name').value = '';
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('selected'));
    document.getElementById('start-btn').disabled = true;
    
    showScreen('start');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Start screen events
    document.getElementById('player-name').addEventListener('input', function() {
        const hasName = this.value.trim() !== '';
        const hasMode = document.querySelector('.mode-btn.selected');
        document.getElementById('start-btn').disabled = !(hasName && hasMode);
    });
    
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            
            const hasName = document.getElementById('player-name').value.trim() !== '';
            document.getElementById('start-btn').disabled = !hasName;
        });
    });
    
    document.getElementById('start-btn').addEventListener('click', startGame);
    
    // Game screen events
    document.getElementById('guess-btn').addEventListener('click', submitGuess);
    document.getElementById('quit-btn').addEventListener('click', function() {
        if (confirm('Bạn có chắc muốn thoát game?')) {
            resetGame();
        }
    });
    
    // Round result events
    document.getElementById('next-round-btn').addEventListener('click', nextRound);
    
    // Final result events
    document.getElementById('play-again-btn').addEventListener('click', resetGame);
    document.getElementById('leaderboard-btn').addEventListener('click', () => showLeaderboard(gameState.gameMode));
    
    // Leaderboard events
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            showLeaderboard(this.dataset.mode);
        });
    });
    
    document.getElementById('back-home-btn').addEventListener('click', resetGame);
    
    // Initialize game map khi load trang
    initGameMap();
});

// Handle window resize cho map
window.addEventListener('resize', function() {
    if (gameState.gameMap) {
        gameState.gameMap.invalidateSize();
    }
    if (gameState.resultMap) {
        gameState.resultMap.invalidateSize();
    }
});
