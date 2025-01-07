/* eslint-disable react/prop-types */

export const ELONE_NUMBER = ({ question, onChange }) => {
  const handleChange = (e) => {
    onChange(Number(e.target.value)); // Передаем число в родительский компонент
  };

  return (
    <div className="form-container" key={question.id}>
      <p>{question.text}</p>
      <label className="form-label">
        Відповідь:
        <span className="red">*</span>
      </label>
      <input
        required
        type="number"
        className="form-input"
        placeholder="ВГАДАЙТЕ ЧИСЛО..."
        onChange={handleChange} // Обработчик изменений
      />
    </div>
  );
};
