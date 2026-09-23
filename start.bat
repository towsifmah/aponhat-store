@echo off
title আপনহাট (AponHat) - ড্রপশিপিং ই-কমার্স প্ল্যাটফর্ম
echo ========================================================
echo        আপনহাট (AponHat) ড্রপশিপিং প্ল্যাটফর্ম
echo ========================================================
echo.
echo ১. PHP ব্যাকএন্ড সার্ভার চালু হচ্ছে (http://127.0.0.1:8000)...
start "AponHat Backend (PHP)" /min powershell -Command "php -S 127.0.0.1:8000"

echo ২. React ফ্রন্টএন্ড সার্ভার চালু হচ্ছে (http://localhost:5173)...
start "AponHat Frontend (React)" powershell -Command "& 'C:\Program Files\nodejs\npm.cmd' run dev"

echo.
echo ========================================================
echo  সবকিছু চালু হয়েছে!
echo  ওয়েবসাইট দেখতে ব্রাউজারে প্রবেশ করুন: http://localhost:5173
echo  অ্যাডমিন ড্যাশবোর্ড: http://localhost:5173 (Navbar থেকে অ্যাডমিন বাটনে ক্লিক করুন)
echo ========================================================
pause
