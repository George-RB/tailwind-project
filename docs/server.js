import express from 'express';
import path from 'path';

const app = express();
const PORT = env.PORT;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🎉 Сайт запущен! Открой: http://localhost:${PORT}`);
});
