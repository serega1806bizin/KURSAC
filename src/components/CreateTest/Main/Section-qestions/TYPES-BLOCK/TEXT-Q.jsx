
// eslint-disable-next-line react/prop-types
export const TEXT_Q = ({ onChange }) => {
  const handleInputChange = (e) => {
    onChange({ answer: Number(e.target.value) });
  };
  return (
      <div className="form-container">
        <label htmlFor="corect-text" className="form-label">
          Введіть очікувану відповідь:<span className="red">*</span>
        </label>
        <input
          required
          type="text"
          id="corect-text"
          name="corect-text"
          className="form-input"
          placeholder="Текст..."
          onChange={handleInputChange}
        />
      </div>
  );
};
