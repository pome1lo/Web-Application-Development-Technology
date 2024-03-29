const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/generate-random-series', (req, res) => {
    const n = parseInt(req.get('X-Rand-N'), 10);
    if (isNaN(n)) {
        return res.status(400).json({ error: 'Некорректное значение n' });
    }

    // Генерируем случайное количество чисел в ряду от 5 до 10
    const count = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    const numbers = Array.from({ length: count }, () => Math.floor(Math.random() * (2 * n + 1)) - n);

    res.json(numbers);
});

app.listen(3002, () => {
    console.log('Сервер запущен на порту 3002');
});
