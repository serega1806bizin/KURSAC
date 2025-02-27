import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const API_URL = 'https://stradanie-production.up.railway.app/api/tests';
// eslint-disable-next-line react/prop-types
export const Footer = ({ addQuestion, totalPoints, testName, testNumber, additionalText, questions }) => {
  const [testLink, setTestLink] = useState(''); // Хранение ссылки на тест
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const uniqueLink = `http://localhost:5173/test/${Date.now()}`; // Уникальная ссылка

  const test = {
    nazwa: testName, // Название работы
    nomer: testNumber, // Номер теста
    id: Date.now(), // Уникальный номер теста
    link: uniqueLink, // Уникальная ссылка
    totalPoints, // Сумма баллов
    progress: 0, // По умолчанию
    additional: additionalText, // Описание работы
    questions, // Список вопросов
  };

  const addTest = async () => {

   
    try {
        const response = await axios.post(API_URL, test);
        setData([...data, response.data]);
        setTestLink(uniqueLink); // Устанавливаем ссылку на тест
        alert('Тест успешно опубликован!');
        navigate('/', { state: { message: 'Тест опубликован!', link: uniqueLink } });
    } catch (error) {
        console.error('Ошибка при добавлении:', error);
        alert('Ошибка при сохранении теста.');
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
      <button className="footer1-button" id="submit-form" onClick={addTest}>
        ОПУБЛІКУВАТИ
      </button>
    </footer>
  );
};
