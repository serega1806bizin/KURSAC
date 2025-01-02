// eslint-disable-next-line react/prop-types
export const Necessarily = ({ onTypeChange, onPointsChange }) => {
  return (
    <>
      <div className="form-container">
        <label htmlFor="type-qestion" className="form-label">
          Тип відповіді:<span className="red">*</span>
        </label>
        <select
          placeholder="Оберіть тип завдання"
          defaultValue={""}
          required
          id="type-qestion"
          name="type-qestion"
          className="form-input"
          onChange={(e) => onTypeChange(e.target.value)} // Отслеживание изменений
        >
          <option value="" disabled>-- Виберіть --</option>
          <option value="text-answer">Текстова відповідь</option>
          <option value="number-answer">Едине число</option>
          <option value="number-list">Список чисел</option>
          <option value="matrix">Матриця</option>
          <option value="variant-list">Варіанти відповіді</option>
          <option value="mumber-paries">Перелік пар</option>
          <option value="edge-list">Список ребр</option>
        </select>
      </div>
      <div className="form-container">
        <label htmlFor="marka" className="form-label">
          Кількість балів:<span className="red">*</span>
        </label>
        <input
          required
          type="number"
          id="marka"
          name="marka"
          className="form-input"
          placeholder="Кількість балів"
          defaultValue={0}
          onChange={(e) => onPointsChange(Number(e.target.value))} // Отслеживаем изменения
        />
      </div>
      <div className="form-container">
        <label htmlFor="title-task" className="form-label">
          Текст запитання:<span className="red">*</span>
        </label>
        <input
          required
          type="text"
          id="title-task"
          name="title-task"
          className="form-input"
          placeholder="Для даного зваженого неорієнтованого..."
        />
      </div>
    </>
  );
};
