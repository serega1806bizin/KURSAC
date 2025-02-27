import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const MATRIX = ({ onChange }) => {
  const [rows, setRows] = useState(3); // Количество строк
  const [columns, setColumns] = useState(3); // Количество столбцов
  const [matrix, setMatrix] = useState([]); // Матрица

  // Обновление матрицы при изменении строк или столбцов
  useEffect(() => {
    const newMatrix = Array.from({ length: rows }, () => Array(columns).fill(""));
    setMatrix(newMatrix);
  }, [rows, columns]);

  // Передача данных наверх через onChange
  useEffect(() => {
    onChange({
      answer: matrix,
    });
  }, [matrix]);

  const updateCell = (rowIndex, colIndex, value) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[rowIndex][colIndex] = Number(value); // Сохраняем число
    setMatrix(updatedMatrix);
  };

  return (
    <div className="form-container">
      <label htmlFor="corect-matrix" className="form-label">
        Введіть очікувану відповідь:<span className="red">*</span>
      </label>
      <div className="matrix-container">
        {/* Ввод количества строк */}
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
        {/* Ввод количества столбцов */}
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
        {/* Матрица с разбивкой на клетки */}
        <div
          id="matrix"
          className="matrix"
          style={{
            display: "grid",
            gridTemplateRows: `repeat(${rows}, 100px)`,
            gridTemplateColumns: `repeat(${columns}, 100px)`,
            gap: "5px", // Разделение между клетками
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
                  textAlign: "center", // Центрирование текста в клетке
                  border: "1px solid #ccc", // Рамка клетки
                  borderRadius: "4px", // Закругление углов
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
