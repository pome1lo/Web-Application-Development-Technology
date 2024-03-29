const express = require('express');
const cors = require('cors');
const app = express();

// Настройка CORS с явным указанием заголовков, которые могут быть доступны на стороне клиента
app.use(cors({
    exposedHeaders: ['X-Value-z'],
}));

app.use(express.json());

app.post('/calculate', (req, res) => {
    const xValue = parseInt(req.get('X-Value-x'), 10);
    const yValue = parseInt(req.get('X-Value-y'), 10);

    if (!isNaN(xValue) && !isNaN(yValue)) {
        const zValue = xValue + yValue;
        res.set('X-Value-z', zValue.toString());
        res.status(200).send(`Сумма значений: ${zValue}`);
    } else {
        res.status(400).send('Некорректные входные данные');
    }
});

app.listen(3001, () => {
    console.log('Сервер запущен на порту 3001');
});
