import { useState, useEffect } from "react";
import { Necessarily } from "./Necessarily";
import { TEXT_Q } from "./TYPES-BLOCK/TEXT-Q";
import { ELONE_NUMBER } from "./TYPES-BLOCK/ELONE-NUMBER";
import { VARIANT_Q } from "./TYPES-BLOCK/VARIANT-Q";
import { MATRIX } from "./TYPES-BLOCK/MATRIX";
import { LIST_PARS } from "./TYPES-BLOCK/LIST-PARS";
import { LIST_REBR_Q } from "./TYPES-BLOCK/LIST-REBR-Q";
import { LIST_NUMBER } from "./TYPES-BLOCK/LIST-NUMBER";

// eslint-disable-next-line react/prop-types, no-unused-vars
export const QESTION = ({ id, onDelete, onPointsChange, onUpdate }) => {
  const [selectedType, setSelectedType] = useState("");
  const [additionalData, setAdditionalData] = useState({}); // Данные, включая "answer"

  // Собираем данные вопроса
  useEffect(() => {
    if (typeof onUpdate === "function") {
      onUpdate(id, {
        type: selectedType,
        points: additionalData.points || 0,
        text: additionalData.text || "",
        answer: additionalData.answer || null, // Добавляем поле "answer"
        ...additionalData,
      });
    }
  }, [selectedType, additionalData]);

  const renderComponent = () => {
    switch (selectedType) {
      case "text-answer":
        return (
          <TEXT_Q
            onChange={(data) => setAdditionalData((prev) => ({ ...prev, ...data }))}
          />
        );
      case "number-answer":
        return (
          <ELONE_NUMBER
            onChange={(data) => setAdditionalData((prev) => ({ ...prev, ...data }))}
          />
        );
      case "number-list":
        return (
          <LIST_NUMBER
            onChange={(data) => setAdditionalData((prev) => ({ ...prev, ...data }))}
          />
        );
      case "matrix":
        return (
          <MATRIX
            onChange={(data) => setAdditionalData((prev) => ({ ...prev, ...data }))}
          />
        );
      case "variant-list":
        return (
          <VARIANT_Q
            onChange={(data) => setAdditionalData((prev) => ({ ...prev, ...data }))}
          />
        );
      case "mumber-paries":
        return (
          <LIST_PARS
            onChange={(data) => setAdditionalData((prev) => ({ ...prev, ...data }))}
          />
        );
      case "edge-list":
        return (
          <LIST_REBR_Q
            onChange={(data) => setAdditionalData((prev) => ({ ...prev, ...data }))}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="BLOCK-Q">
      <Necessarily
        onTypeChange={(value) => setSelectedType(value)}
        onPointsChange={(points) =>
          setAdditionalData((prev) => ({ ...prev, points }))
        }
        onTextChange={(text) =>
          setAdditionalData((prev) => ({ ...prev, text }))
        }
      />
      {renderComponent()}
      
      <button className="delete-button" onClick={onDelete}>
        ВИДАЛИТИ ЗАВДАННЯ
      </button>
    </div>
  );
};
