@echo off
echo Installing dependencies...
npm install

echo.
echo Testing API endpoints locally...
echo.

echo Starting Vercel dev server...
echo You can test:
echo - http://localhost:3000
echo - http://localhost:3000/api/health
echo - http://localhost:3000/api/courses
echo - http://localhost:3000/api/blog
echo.

vercel dev
