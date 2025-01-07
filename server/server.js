import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3001;
const TESTS_FILE = '../TESTS.json';

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const answerData = req.body;

  fs.readFile('answers.json', 'utf8', (err, data) => {
    // Если файл отсутствует, создаём новый массив для ответов
    const answers = err && err.code === 'ENOENT' ? [] : JSON.parse(data || '[]');

    answers.push(answerData);

    fs.writeFile('answers.json', JSON.stringify(answers, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Ошибка записи в файл:', writeErr);
        return res.status(500).send('Ошибка записи в файл');
      }
      res.status(200).json({ message: 'Данные успешно сохранены!' });
    });
  });
});


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

// Эндпоинт для получения теста по ID
app.get('/tests/:testId', (req, res) => {
  const testId = parseInt(req.params.testId, 10); // Преобразуем ID в число

  fs.readFile(TESTS_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      return res.status(500).send('Ошибка чтения файла');
    }

    const tests = JSON.parse(data || '[]'); // Парсим JSON (пустой массив, если файла нет)
    const test = tests.find((t) => t.nomer === testId); // Ищем тест по ID

    if (!test) {
      return res.status(404).send('Тест не найден'); // Если тест не найден
    }

    res.status(200).json(test); // Возвращаем найденный тест
  });
});


// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
