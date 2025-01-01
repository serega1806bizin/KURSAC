import { useState } from "react";

export const LIST_NUMBER = () => {
  const [items, setItems] = useState([1, 2]);
  const [isOrderImportant, setIsOrderImportant] = useState(false);

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
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
                placeholder={`${item}`}
                value={item}
                onChange={(e) => {
                  const updatedItems = [...items];
                  updatedItems[index] = Number(e.target.value);
                  setItems(updatedItems);
                }}
              />
              <span
                className="remove-button"
                onClick={() => removeItem(index)}
              >
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
          <label
            htmlFor="consistencyImportant"
            className="form-label-checkbox"
          >
            порядок важливий
          </label>
          
        </div>
      </div>
  );
};
