/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const MATRIX = ({ question, onChange }) => {
  const [rows, setRows] = useState(3); // Количество строк
  const [columns, setColumns] = useState(3); // Количество столбцов
  const [matrix, setMatrix] = useState([]); // Матрица

  // Инициализация или обновление матрицы при изменении строк или столбцов
  useEffect(() => {
    const newMatrix = Array.from({ length: rows }, () => Array(columns).fill(""));
    setMatrix(newMatrix);
  }, [rows, columns]);

  // Уведомляем родителя при изменении матрицы
  useEffect(() => {
    onChange(matrix.map((row) => row.map((cell) => Number(cell) || 0))); // Преобразуем в числа
  }, [matrix]);

  const updateCell = (rowIndex, colIndex, value) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[rowIndex][colIndex] = value; // Обновляем значение в ячейке
    setMatrix(updatedMatrix);
  };

  return (
    <div className="form-container" key={question.id}>
      <p>{question.text}</p>
      <label htmlFor="corect-matrix" className="form-label">
        Ваша відповідь:<span className="red">*</span>
      </label>
      <div className="matrix-container">
        <div>
          <label htmlFor="rows-input">Кількість рядків:</label>
          <input
            required
            type="number"
            id="rows-input"
            min="1"
            max="8"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            style={{ width: "100px" }}
          />
        </div>
        <div>
          <label htmlFor="columns-input">Кількість стовпців:</label>
          <input
            required
            type="number"
            id="columns-input"
            min="1"
            max="8"
            value={columns}
            onChange={(e) => setColumns(Number(e.target.value))}
            style={{ width: "100px" }}
          />
        </div>
        <div
          id="matrix"
          className="matrix"
          style={{
            display: "grid",
            gridTemplateRows: `repeat(${rows}, 100px)`,
            gridTemplateColumns: `repeat(${columns}, 100px)`,
            gap: "5px",
          }}
        >
          {matrix.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="number"
                className="matrix-input"
                value={cell}
                onChange={(e) =>
                  updateCell(rowIndex, colIndex, e.target.value)
                }
                style={{
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
