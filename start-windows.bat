@echo off
setlocal
cd /d "%~dp0"
echo.
echo ================================================
echo  Alexandre Engineering Portfolio - local server
echo ================================================
echo.
where node >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Node.js is not installed or not available in PATH.
  echo Install the current Node.js LTS version, then run this file again.
  echo https://nodejs.org/
  pause
  exit /b 1
)

echo Node version:
node -v
echo npm version:
call npm.cmd -v

echo.
if not exist node_modules\next (
  echo Installing dependencies. This is only needed the first time...
  call npm.cmd install --no-audit --no-fund
  if errorlevel 1 (
    echo.
    echo [ERROR] npm install failed.
    echo Check your internet connection, proxy/VPN and firewall, then retry.
    pause
    exit /b 1
  )
)

echo.
echo Starting Next.js on http://localhost:3000
start "" http://localhost:3000
call npm.cmd run dev
pause
