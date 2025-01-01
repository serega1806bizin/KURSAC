
export const ELONE_NUMBER = () => {
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
        />
      </div>
  );
};
