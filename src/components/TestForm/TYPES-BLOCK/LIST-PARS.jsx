/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const LIST_PARS = ({ question, onChange }) => {
  const [pairs, setPairs] = useState([
    [1, 7],
    [8, 4],
  ]); // Инициализация массива массивов

  const addPair = () => {
    const updatedPairs = [...pairs, ["", ""]]; // Добавляем новую пару
    setPairs(updatedPairs);
  };

  const removePair = (index) => {
    const updatedPairs = pairs.filter((_, i) => i !== index); // Удаляем выбранную пару
    setPairs(updatedPairs);
  };

  const updatePair = (index, key, value) => {
    const updatedPairs = [...pairs];
    updatedPairs[index][key] = Number(value) || ""; // Обновляем значение (число или пустая строка)
    setPairs(updatedPairs);
  };

  // Уведомляем родителя об изменениях
  useEffect(() => {
    onChange(pairs);
  }, [pairs]);

  return (
    <div className="pair-container" key={question.id}>
      <p>{question.text}</p>
      <label className="pair-label">Ваша відповідь:</label>

      <div className="pair-list">
        {pairs.map((pair, index) => (
          <div key={index} className="pair-item">
            <span className="pair-title">Пара №{index + 1}</span>
            <div className="pair-inputs">
              <input
                type="number"
                className="pair-input"
                placeholder="Первое значение"
                value={pair[0]}
                onChange={(e) => updatePair(index, 0, e.target.value)} // Обновляем первое значение
              />
              <input
                type="number"
                className="pair-input"
                placeholder="Второе значение"
                value={pair[1]}
                onChange={(e) => updatePair(index, 1, e.target.value)} // Обновляем второе значение
              />
              <button
                type="button"
                className="pair-delete-btn"
                onClick={() => removePair(index)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="add-pair-btn" onClick={addPair}>
        Додати пару
      </button>
    </div>
  );
};
