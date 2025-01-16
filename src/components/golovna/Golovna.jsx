import { Header } from "./Header/Header"
import "./Golovna.scss"
import { Main } from "./Main/Main"
import { Footer } from "./Footer/Footer"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

export const Golovna = () => {
  const location = useLocation();
  const [message, setMessage] = useState('');
  const [link, setLink] = useState('');
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
      setLink(location.state.link);

      // Уменьшение прогресса
      const duration = 5000; // 5 секунд
      const interval = 50; // Интервал обновления
      const decrement = 100 / (duration / interval);

      const timer = setInterval(() => {
        setProgress((prev) => Math.max(prev - decrement, 0));
      }, interval);

      // Очистка сообщения по завершении времени
      const timeout = setTimeout(() => {
        setMessage('');
        setLink('');
        setProgress(100); // Сброс прогресса
      }, duration);

      return () => {
        clearInterval(timer);
        clearTimeout(timeout);
      };
    }
  }, [location.state]);
  return (
    <div className="golovna">
    <div>
      {message && (
        <div className="flash-message">
          {message}{''}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <br />Перейти к тесту
            </a>
          )}
           <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}