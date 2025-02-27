/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const LIST_REBR_Q = ({ question, onChange }) => {
  const [nodes, setNodes] = useState([
    { id: 1, x1: "1", x2: "1" },
    { id: 2, x1: "1", x2: "2" },
  ]);

  // Уведомляем родителя при каждом изменении nodes
  useEffect(() => {
    onChange(
      nodes.map((node) => [Number(node.x1), Number(node.x2)]) // Преобразование в массив пар чисел
    );
  }, [nodes]);

  const addNode = () => {
    const updatedNodes = [...nodes, { id: nodes.length + 1, x1: "", x2: "" }];
    setNodes(updatedNodes);
  };

  const removeNode = (id) => {
    const updatedNodes = nodes
      .filter((node) => node.id !== id)
      .map((node, index) => ({ ...node, id: index + 1 })); // Перенумерация оставшихся узлов
    setNodes(updatedNodes);
  };

  const updateNode = (id, key, value) => {
    const updatedNodes = nodes.map((node) =>
      node.id === id ? { ...node, [key]: value } : node
    );
    setNodes(updatedNodes);
  };

  return (
    <div className="node-container">
      <p>{question.text}</p>
      <label className="node-label">Ваша відповідь:</label>

      <div className="node-list">
        {nodes.map((node) => (
          <div key={node.id} className="node-item">
            <span className="node-title">Вузол №{node.id}</span>
            <div className="node-content">
              <span className="node-symbol">
                U<sub>{node.id}</sub>| (X
              </span>
              <sub>
                <input
                  type="text"
                  className="node-input"
                  placeholder="1"
                  value={node.x1}
                  onChange={(e) => updateNode(node.id, "x1", e.target.value)}
                />
              </sub>
              <span className="node-symbol">,X</span>
              <sub>
                <input
                  type="text"
                  className="node-input"
                  placeholder="1"
                  value={node.x2}
                  onChange={(e) => updateNode(node.id, "x2", e.target.value)}
                />
              </sub>
              <span className="node-symbol">)</span>
              <button
                type="button"
                className="node-delete-btn"
                onClick={() => removeNode(node.id)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="add-node-btn" onClick={addNode}>
        Додати вузол
      </button>
    </div>
  );
};
