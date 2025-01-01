// eslint-disable-next-line react/prop-types
export const Footer = ({ addQuestion }) => {
  return (
    <footer className="footer1" style={{ position: "static" }}>
      <span className="footer1-text">Загальна кількість балів:</span>
      <span className="footer1-text">Покликання на тест:</span>
      <button className="footer1-button" onClick={addQuestion}>
        СТВОРИТИ ЩЕ ЗАПИТАННЯ
      </button>
      <button className="footer1-button" id="submit-form">
        ОПУБЛІКУВАТИ
      </button>
    </footer>
  );
};
