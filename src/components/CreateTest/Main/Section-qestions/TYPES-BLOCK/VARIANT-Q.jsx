import  { useState } from 'react';

export const VARIANT_Q = () => {
  const [options, setOptions] = useState([
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
  ]);

  const addOption = () => {
    setOptions([...options, { id: options.length + 1, text: "" }]);
  };

  const removeOption = (id) => {
    const updatedOptions = options.filter(option => option.id !== id).map((option, index) => ({
      ...option,
      id: index + 1,
    }));
    setOptions(updatedOptions);
  };

  const updateOptionText = (id, newText) => {
    setOptions(options.map(option => option.id === id ? { ...option, text: newText } : option));
  };

  return (
    <div className="form-container-vairants">
      <label>
        Додайте варіанти відповіді:<span className="red">*</span>
      </label>
      <div className="answer-options">
        {options.map(option => (
          <label key={option.id} className="answer-option">
            <input type="checkbox" className="answer-checkbox" />
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
