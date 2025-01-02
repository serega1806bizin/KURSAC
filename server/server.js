import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3001;
const TESTS_FILE = './TESTS.json';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Эндпоинт для сохранения тестов
app.post('/save-test', (req, res) => {
  const newTest = req.body;

  // Проверка структуры теста
  if (!newTest.nazwa || !newTest.nomer || !newTest.questions || !Array.isArray(newTest.questions)) {
    return res.status(400).send('Некорректные данные теста');
  }

  // Читаем существующие данные
  fs.readFile(TESTS_FILE, 'utf8', (err, data) => {
    if (err && err.code === 'ENOENT') {
      console.log('Файл не найден, создаём новый.');
      fs.writeFile(TESTS_FILE, JSON.stringify([newTest], null, 2), (writeErr) => {
        if (writeErr) {
          return res.status(500).send('Ошибка создания файла');
        }
        return res.status(200).json({
          message: 'Тест успешно сохранён!',
          testId: newTest.nomer,
          totalQuestions: newTest.questions.length,
        });
      });
      return;
    }

    if (err) {
      console.error('Ошибка чтения файла:', err);
      return res.status(500).send('Ошибка чтения файла');
    }

    const tests = data ? JSON.parse(data) : [];
    tests.push(newTest);

    // Сохраняем данные обратно
    fs.writeFile(TESTS_FILE, JSON.stringify(tests, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).send('Ошибка сохранения файла');
      }
      res.status(200).json({
        message: 'Тест успешно сохранён!',
        testId: newTest.nomer,
        totalQuestions: newTest.questions.length,
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
