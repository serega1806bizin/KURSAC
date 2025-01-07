import { useState } from 'react';

// eslint-disable-next-line react/prop-types, no-unused-vars
export const Footer = ({ addQuestion, totalPoints, testName, testNumber, additionalText, questions }) => {
  const [testLink, setTestLink] = useState(''); // Хранение ссылки на тест

  const publishTest = async () => {
    const uniqueLink = `http://localhost:5173/test/${Date.now()}`; // Уникальная ссылка
    const test = {
      nazwa: testName, // Название работы
      nomer: Date.now(), // Уникальный номер теста
      link: uniqueLink, // Уникальная ссылка
      totalPoints, // Сумма баллов
      progress: 0, // По умолчанию
      additional: additionalText, // Описание работы
      questions, // Список вопросов
    };

    try {
      const response = await fetch('http://localhost:3001/save-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(test),
      });

      if (response.ok) {
        setTestLink(uniqueLink); // Устанавливаем ссылку на тест
        alert('Тест успешно опубликован!');
      } else {
        alert('Ошибка при публикации.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка подключения к серверу.');
    }
  };

  return (
    <footer className="footer1" style={{ position: "static" }}>
      <span className="footer1-text">Загальна кількість балів: {totalPoints}</span>
      <span className="footer1-text">
        Покликання на тест: {testLink ? <a href={testLink}>{testLink}</a> : 'Ще не опубліковано'}
      </span>
      <button className="footer1-button" onClick={addQuestion}>
        СТВОРИТИ ЩЕ ЗАПИТАННЯ
      </button>
      <button className="footer1-button" id="submit-form" onClick={publishTest}>
        ОПУБЛІКУВАТИ
      </button>
    </footer>
  );
};
