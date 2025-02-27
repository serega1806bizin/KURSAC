import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const LIST_NUMBER = ({ onChange }) => {
  const [items, setItems] = useState([1, 2]); // Массив чисел
  const [isOrderImportant, setIsOrderImportant] = useState(false); // Флаг "порядок важливий"

  // Передача данных вверх при каждом изменении `items` или `isOrderImportant`
  useEffect(() => {
    onChange({
      answer: {
        massiv: items, // Массив чисел
        consistencyImportant: isOrderImportant, // Флаг
      },
    });
  }, [items, isOrderImportant]);

  // Добавить новый элемент
  const addItem = () => {
    setItems([...items, 0]); // Добавляем элемент со значением 0
  };

  // Удалить элемент из массива
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // Обновить значение элемента в массиве
  const updateItem = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = Number(value); // Обновляем значение
    setItems(updatedItems);
  };

  return (
    <div className="form-container form-container-list">
      <label htmlFor="corect-list" className="form-label">
        Додайте очікувані елементи в переліку:
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
            <span className="remove-button" onClick={() => removeItem(index)}>
              X
            </span>
          </div>
        ))}
        <div className="form-input-list-item">
          <button type="button" className="form-input-list-button" onClick={addItem}>
            +
          </button>
        </div>
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          name="consistencyImportant"
          id="consistencyImportant"
          className="form-input-checkbox"
          checked={isOrderImportant}
          onChange={() => setIsOrderImportant(!isOrderImportant)}
        />
        <label htmlFor="consistencyImportant" className="form-label-checkbox">
          порядок важливий
        </label>
      </div>
    </div>
  );
};
