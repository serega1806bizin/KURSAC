import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const VARIANT_Q = ({ onChange }) => {
  const [options, setOptions] = useState([
    { id: 1, text: "", isCorrect: false },
    { id: 2, text: "", isCorrect: false },
    { id: 3, text: "", isCorrect: false },
    { id: 4, text: "", isCorrect: false },
  ]);

  // Передача данных наверх при изменении вариантов
  useEffect(() => {
    onChange({
      answer: {
        variants: options.map((option) => option.text), // Все варианты
        correct: options.map((option) => option.isCorrect ? 1 : 0), // Правильные ответы (1 или 0)
      },
    });
  }, [options]);

  const addOption = () => {
    setOptions([...options, { id: options.length + 1, text: "", isCorrect: false }]);
  };

  const removeOption = (id) => {
    const updatedOptions = options
      .filter((option) => option.id !== id)
      .map((option, index) => ({
        ...option,
        id: index + 1, // Обновляем id
      }));
    setOptions(updatedOptions);
  };

  const updateOptionText = (id, newText) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, text: newText } : option
      )
    );
  };

  const toggleCorrect = (id) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, isCorrect: !option.isCorrect } : option
      )
    );
  };

  return (
    <div className="form-container-vairants">
      <label>
        Додайте варіанти відповіді:<span className="red">*</span>
      </label>
      <div className="answer-options">
        {options.map((option) => (
          <label key={option.id} className="answer-option">
            <input
              type="checkbox"
              className="answer-checkbox"
              checked={option.isCorrect}
              onChange={() => toggleCorrect(option.id)} // Обработка выбора правильного ответа
            />
            <input
              type="text"
              className="answer-input"
              placeholder={`Варіант ${option.id}`}
              value={option.text}
              onChange={(e) => updateOptionText(option.id, e.target.value)}
            />
            <button
              type="button"
              className="answer-delete-btn"
              onClick={() => removeOption(option.id)}
            >
              🗑️
            </button>
          </label>
        ))}
        <button type="button" className="add-answer-btn" onClick={addOption}>
          Додати варіант відповіді
        </button>
      </div>
    </div>
  );
};
