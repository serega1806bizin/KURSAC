
// eslint-disable-next-line react/prop-types
export const ELONE_NUMBER = ({onChange}) => {
  const handleInputChange = (e) => {
    onChange({ answer: Number(e.target.value) });
  };
  return (
      <div className="form-container">
        <label htmlFor="corect-number" className="form-label">
          Введіть очікувану відповідь:<span className="red">*</span>
        </label>
        <input
          required
          type="number"
          id="corect-number"
          name="corect-number"
          className="form-input form-input-num"
          placeholder="46"
          onChange={handleInputChange}
        />
      </div>
  );
};
