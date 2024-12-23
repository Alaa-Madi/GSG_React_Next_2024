import React from "react";
import "./displayScreen.css";

const DisplayScreen = ({ input, result }) => {
  return (
    <div className="displayScreen">
      <div className="input">{input || "0"}</div>
      <div className="result">{result !== null ? `= ${result}` : ""}</div>
    </div>
  );
};

export default DisplayScreen;
