// eslint-disable-next-line react/prop-types
export const Section1 = ({ setTestName, setTestNumber, setAdditionalText }) => {
  return (
    <section className="section-1">
      <form action="" className="section-1-form">
        <div className="form-container">
          <label htmlFor="name" className="form-label">
            Назва роботи:<span className="red">*</span>
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Пошук найкоротших шляхів у графі"
            onChange={(e) => setTestName(e.target.value)} // Привязка обновления состояния
          />
        </div>
        <div className="form-container">
          <label htmlFor="number" className="form-label">
            Номер роботи:<span className="red">*</span>
          </label>
          <input
            required
            type="number"
            id="number"
            name="number"
            className="form-input"
            placeholder="Номер роботи"
            onChange={(e) => setTestNumber(Number(e.target.value))} // Привязка обновления состояния
          />
        </div>
        <div className="form-container">
          <label htmlFor="aditional" className="form-label">
            Опис/коментарій роботи для студентів:
          </label>
          <textarea
            id="aditional"
            name="aditional"
            className="form-area form-input"
            placeholder="В цій роботі вам слід..."
            onChange={(e) => setAdditionalText(e.target.value)} // Привязка обновления состояния
          ></textarea>
        </div>
      </form>
    </section>
  );
};
