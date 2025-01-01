import { useNavigate } from 'react-router-dom';
import '../CreateTest.scss';

export const Header = () => {

  const back = useNavigate('');

  const handleBackButtonClick = () => {
    back("/");
  };

  return (
    <header className="header" style={{position: 'static' }}>
      <img 
        src="public\free-icon-physics-2286340.png"
        alt="значек атома" 
        className="header-icon"
        onClick={handleBackButtonClick}
      />
      <div className="header-info">
        <div className="header-info-top">
          <b>Створення самостійної роботи</b>
          <button onClick={handleBackButtonClick} className="header-info-top-button">НАЗАД</button>
        </div>
        <div className="header-info-bottom">
          <p>
            Щоб почати роботу, заповніть інформацію про неї.<br /> 
            Пізніше її можна буде відредагувати.
          </p>
          <span className="header-info-bottom-span">* - обов’язкове поле</span>
        </div>
      </div>
    </header>
  );
};
