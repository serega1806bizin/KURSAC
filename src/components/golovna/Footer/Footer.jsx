import { useNavigate } from "react-router-dom";
import './Footer.scss';

export const Footer = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/create-test");
  };

  return (
    <footer className="footer">
      <button className="footer-button" onClick={handleButtonClick}>
        Створити роботу
      </button>
    </footer>
  );
};
