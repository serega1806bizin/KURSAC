/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

export const VARIANT_Q = ({ question, onChange }) => {
  const { text, answer } = question;
  const { variants } = answer;

  // Локальное состояние для хранения выбранных вариантов
  const [checked, setChecked] = useState(Array(variants.length).fill(0));

  const handleCheckboxChange = (index, isChecked) => {
    const updatedChecked = [...checked];
    updatedChecked[index] = isChecked ? 1 : 0; // Устанавливаем 1 или 0 в зависимости от состояния
    setChecked(updatedChecked);
  };

  // Уведомляем родителя о каждом изменении состояния checked
  useEffect(() => {
    onChange(checked);
  }, [checked]);

  return (
    <div className="form-container-variants" key={question.id}>
      <p>{text}</p>
      <b>Варианты ответа:</b>
      <div className="answer-options">
        {variants.map((variant, index) => (
          <label key={index} className="answer-option">
            <input
              type="checkbox"
              className="answer-checkbox"
              checked={!!checked[index]}
              onChange={(e) => handleCheckboxChange(index, e.target.checked)}
            />
            <span>{variant}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
