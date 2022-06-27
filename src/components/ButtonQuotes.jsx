import React from "react";

const ButtonQuotes = ({ clickButton, colorRandom }) => {
  return (
    <button
      style={{ backgroundColor: colorRandom }}
      className="button__quotes"
      onClick={clickButton}
    >
      <p style={{ color: "white" }} className="button_content">
        New Quote
      </p>
    </button>
  );
};

export default ButtonQuotes;
