const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Раздаем статические файлы из папки docs
app.use(express.static('docs'));

// Главная страница
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log('🎉 Сервер запущен!');
  console.log(`📱 Открой: http://localhost:${PORT}`);
  console.log('⏹️  Чтобы остановить: Ctrl+C');
});
