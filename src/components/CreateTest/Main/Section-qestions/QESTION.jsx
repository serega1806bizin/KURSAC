import { useState } from "react";
import { Necessarily } from "./Necessarily";
import { TEXT_Q } from "./TYPES-BLOCK/TEXT-Q";
import { ELONE_NUMBER } from "./TYPES-BLOCK/ELONE-NUMBER";
import { VARIANT_Q } from "./TYPES-BLOCK/VARIANT-Q";
import { MATRIX } from "./TYPES-BLOCK/MATRIX";
import { LIST_PARS } from "./TYPES-BLOCK/LIST-PARS";
import { LIST_REBR_Q } from "./TYPES-BLOCK/LIST-REBR-Q";
import { LIST_NUMBER } from "./TYPES-BLOCK/LIST-NUMBER.JSX";

// eslint-disable-next-line react/prop-types, no-unused-vars
export const QESTION = ({ id, onDelete }) => {
  const [selectedType, setSelectedType] = useState("");

  const renderComponent = () => {
    switch (selectedType) {
      case "text-answer":
        return <TEXT_Q />;
      case "number-answer":
        return <ELONE_NUMBER />;
      case "number-list":
        return <LIST_NUMBER />;
      case "matrix":
        return <MATRIX />;
      case "variant-list":
        return <VARIANT_Q />;
      case "mumber-paries":
        return <LIST_PARS />;
      case "edge-list":
        return <LIST_REBR_Q />;
      default:
        return null;
    }
  };

  return (
    <div className="BLOCK-Q">
      <Necessarily onTypeChange={(value) => setSelectedType(value)} />
      {renderComponent()}
      <button className="delete-button" onClick={onDelete}>
        ВИДАЛИТИ ЗАВДАННЯ
      </button>
    </div>
  );
};
