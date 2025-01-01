import { useState, useEffect } from 'react';

export const MATRIX = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [matrix, setMatrix] = useState([]);

  useEffect(() => {
    const newMatrix = Array.from({ length: rows }, () => Array(columns).fill(""));
    setMatrix(newMatrix);
  }, [rows, columns]);

  const updateCell = (rowIndex, colIndex, value) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[rowIndex][colIndex] = value;
    setMatrix(updatedMatrix);
  };

  return (
    <div className="form-container">
      <label htmlFor="corect-matrix" className="form-label">
        Введіть очікувану відповідь:<span className="red">*</span>
      </label>
      <div className="matrix-container">
        <div>
          <label htmlFor="rows-input">Кількість рядків:</label>
          <input
            type="number"
            id="rows-input"
            min="1"
            max="8"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="columns-input">Кількість стовпців:</label>
          <input
            type="number"
            id="columns-input"
            min="1"
            max="8"
            value={columns}
            onChange={(e) => setColumns(Number(e.target.value))}
          />
        </div>
        <div
          id="matrix"
          className="matrix"
          style={{
            display: 'grid',
            gridTemplateRows: `repeat(${rows}, 100px)`,
            gridTemplateColumns: `repeat(${columns}, 100px)`
          }}
        >
          {matrix.map((row, rowIndex) => (
            row.map((cell, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="number"
                className="matrix-input"
                value={cell}
                onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
              />
            ))
          ))}
        </div>
      </div>
    </div>
  );
};
