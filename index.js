const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Підключення до бази даних MongoDB
mongoose.connect('mongodb://localhost:27017/financial_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Помилка підключення до бази даних:'));
db.once('open', () => {
  console.log('Підключено до бази даних MongoDB');
});

// Створення схеми для доходів
const earningSchema = new mongoose.Schema({
  source: String,
  amount: Number,
  currency: String,
});

const Earning = mongoose.model('Earning', earningSchema);

// Створення схеми для витрат
const expenseSchema = new mongoose.Schema({
  source: String,
  amount: Number,
  currency: String,
});

const Expense = mongoose.model('Expense', expenseSchema);

// Маршрути для доходів, витрат і т. д.

// Додати маршрут для кореневого шляху
app.get('/', (req, res) => {
  res.send('Welcome to my website!');
});

// Маршрути для доходів, витрат і т. д.

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});
