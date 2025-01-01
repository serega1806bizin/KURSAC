import { useState } from "react";

export const LIST_REBR_Q = () => {
  const [nodes, setNodes] = useState([
    { id: 1, x1: "1", x2: "1" },
    { id: 2, x1: "1", x2: "2" },
  ]);

  const addNode = () => {
    setNodes([...nodes, { id: nodes.length + 1, x1: "", x2: "" }]);
  };

  const removeNode = (id) => {
    const updatedNodes = nodes
      .filter((node) => node.id !== id)
      .map((node, index) => ({ ...node, id: index + 1 }));
    setNodes(updatedNodes);
  };

  const updateNode = (id, key, value) => {
    setNodes(
      nodes.map((node) => (node.id === id ? { ...node, [key]: value } : node))
    );
  };

  return (
      <div className="node-container">
        <label className="node-label">
          Додайте очікувані вузол в список ребер:
        </label>

        <div className="node-list">
          {nodes.map((node) => (
            <div key={node.id} className="node-item">
              <span className="node-title">Вузол №{node.id}</span>
              <div className="node-content">
                <span className="node-symbol">
                  U<sub>{node.id} </sub>| (X
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
                  className="node-delete-btn"
                  onClick={() => removeNode(node.id)}
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="add-node-btn" onClick={addNode}>
          Додати вузол
        </button>
      </div>
  );
};
