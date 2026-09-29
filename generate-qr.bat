@echo off
REM Script tạo mã QR cho GeoGuessr Vietnam Game
REM Sử dụng API miễn phí của QR Server

echo ========================================
echo   TAO MA QR CHO GEOGUESSR VIETNAM
echo ========================================
echo.

set "LINK=https://minhm.github.io/geoguessr-vietnam/"
set "OUTPUT=qr-code.png"

echo Link web: %LINK%
echo Output file: %OUTPUT%
echo.

REM Tạo mã QR sử dụng curl (có sẵn trên Windows 10+)
curl "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=%LINK%" --output %OUTPUT%

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ MA QR DA TAO THANH CONG!
    echo File: %OUTPUT%
    echo.
    echo Ban co the:
    echo 1. Mo file %OUTPUT% de xem ma QR
    echo 2. Share file nay cho ban be
    echo 3. In ra va dan noi day
    echo.
    start %OUTPUT%
) else (
    echo.
    echo ❌ LOI KHI TAO MA QR
    echo Vui long kiem tra ket noi internet
)

echo.
pause