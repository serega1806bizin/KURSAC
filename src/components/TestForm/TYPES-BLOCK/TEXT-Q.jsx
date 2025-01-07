/* eslint-disable react/prop-types */

export const TEXT_Q = ({ question, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value); // Передаём значение в родительский компонент
  };

  return (
    <div className="form-container" key={question.id}>
      <p>{question.text}</p>
      <label htmlFor={`text-input-${question.id}`} className="form-label">
        Відповідь:
        <span className="red">*</span>
      </label>
      <input
        required
        type="text"
        id={`text-input-${question.id}`} // Уникальный ID для каждого вопроса
        className="form-input"
        placeholder="Текст..."
        onChange={handleChange} // Обработчик изменений
      />
    </div>
  );
};
