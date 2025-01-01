import { useState } from "react";

export const LIST_PARS = () => {
  const [pairs, setPairs] = useState([
    { id: 1, first: "1", second: "7" },
    { id: 2, first: "8", second: "4" },
  ]);

  const addPair = () => {
    setPairs([...pairs, { id: pairs.length + 1, first: "", second: "" }]);
  };

  const removePair = (id) => {
    const updatedPairs = pairs
      .filter((pair) => pair.id !== id)
      .map((pair, index) => ({ ...pair, id: index + 1 }));
    setPairs(updatedPairs);
  };

  const updatePair = (id, key, value) => {
    setPairs(
      pairs.map((pair) => (pair.id === id ? { ...pair, [key]: value } : pair))
    );
  };

  const [isOrderImportant, setIsOrderImportant] = useState(false);

  return (
    <div className="pair-container">
      <label className="pair-label">Додайте очікувані пари в переліку:</label>

      <div className="pair-list">
        {pairs.map((pair) => (
          <div key={pair.id} className="pair-item">
            <span className="pair-title">Пара №{pair.id}</span>
            <div className="pair-inputs">
              <input
                type="number"
                className="pair-input"
                placeholder="8"
                value={pair.first}
                onChange={(e) => updatePair(pair.id, "first", e.target.value)}
              />
              <input
                type="number"
                className="pair-input"
                placeholder="6"
                value={pair.second}
                onChange={(e) => updatePair(pair.id, "second", e.target.value)}
              />
              <button
                className="pair-delete-btn"
                onClick={() => removePair(pair.id)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="add-pair-btn" onClick={addPair}>
        Додати пару
      </button>

      <div className="pair-checkbox">
        <input
          className="form-input-checkbox"
          type="checkbox"
          id="order-important"
          checked={isOrderImportant}
          onChange={(e) => setIsOrderImportant(e.target.checked)}
        />
        <label htmlFor="order-important">порядок важливий</label>
      </div>
    </div>
  );
};
