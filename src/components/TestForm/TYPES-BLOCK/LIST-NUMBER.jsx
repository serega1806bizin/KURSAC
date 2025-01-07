/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const LIST_NUMBER = ({ question, onChange }) => {
  const [items, setItems] = useState([1, 2]); // Массив чисел

  // Добавить новый элемент
  const addItem = () => {
    const updatedItems = [...items, 0]; // Добавляем элемент со значением 0
    setItems(updatedItems);
    onChange(updatedItems); // Уведомляем родителя
  };

  // Удалить элемент из массива
  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    onChange(updatedItems); // Уведомляем родителя
  };

  // Обновить значение элемента в массиве
  const updateItem = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = Number(value); // Обновляем значение
    setItems(updatedItems);
    onChange(updatedItems); // Уведомляем родителя
  };

  // Уведомляем родителя при первом рендере
  useEffect(() => {
    onChange(items);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="form-container form-container-list" key={question.id}>
      <p>{question.text}</p>
      <label htmlFor="corect-list" className="form-label">
        Відповідь:
        <span className="red">*</span>
      </label>
      <div className="form-input-list">
        {items.map((item, index) => (
          <div className="form-input-list-item" key={index}>
            <input
              required
              type="number"
              id={`corect-list-item-${index + 1}`}
              name={`corect-list-item-${index + 1}`}
              className="form-input form-input-list-item"
              placeholder="Введите число"
              value={item}
              onChange={(e) => updateItem(index, e.target.value)}
            />
            <span
              className="remove-button"
              onClick={() => removeItem(index)}
              style={{ cursor: "pointer", color: "red", marginLeft: "5px" }}
            >
              X
            </span>
          </div>
        ))}
        <div className="form-input-list-item">
          <button
            type="button"
            className="form-input-list-button"
            onClick={addItem}
          >
            +
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};
