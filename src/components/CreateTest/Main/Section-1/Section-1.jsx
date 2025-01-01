export const Section1 = () => {
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
          ></textarea>
        </div>
      </form>
    </section>
  );
};
