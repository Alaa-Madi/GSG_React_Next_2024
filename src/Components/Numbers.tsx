import React, { useState } from "react";
import "./numbers.css";
import DisplayScreen from ".//DisplayScreen.tsx";

const Numbers = () => {
  const [input, setInput] = useState(""); // To hold the expression
  const [result, setResult] = useState(null); // To hold the calculated result

//   const handleButtonClick = (value) => {
//     if (value === "=") {
//       try {
//         // Calculate the result when "=" is pressed
//         const evalResult = eval(input); // Avoid eval in production; use safer alternatives
//         setResult(evalResult);
//       } catch (error) {
//         setResult("Error"); // Handle invalid expressions
//       }
//     }else if (value === "+" || value === "-") {
//         if (input && !["+", "-"].includes(input[input.length - 1])) {
//           setInput((prevInput) => prevInput + value); // Append operator
//         }
//     } else {
//       // Append the clicked button's value to the input
//       setInput((prevInput) => prevInput + value);
//     }
//   };
const handleButtonClick = (value) => {
    if (value === "=") {
      // Calculate the result when "=" is pressed
      try {
        const evalResult = eval(input); // Evaluate the input expression
        setResult(evalResult);
      } catch (error) {
        setResult("Error"); // Handle invalid expressions
      }
    } else if (value === "+" || value === "-") {
      // Append the operator only if the last character isn't already an operator
      if (input && !["+", "-"].includes(input[input.length - 1])) {
        setInput((prevInput) => prevInput + value);
      } else if (!input && result !== null) {
        // If input is empty but there's a result, use the result as the base
        setInput(result + value);
      }
    } else {
      // Append numbers or other characters to the input
      setInput((prevInput) => prevInput + value);
    }
  };
  
  return (
    <div className="calculator">
      {/* Pass input and result to DisplayScreen */}
      <DisplayScreen input={input} result={result} />
      <div className="buttons">
        <button className="num-wrapper" onClick={() => handleButtonClick("1")}>1</button>
        <button className="num-wrapper" onClick={() => handleButtonClick("2")}>2</button>
        <button className="num-wrapper" onClick={() => handleButtonClick("3")}>3</button>
        <button className="num-wrapper" onClick={() => handleButtonClick("4")}>4</button>
        <button className="num-wrapper" onClick={() => handleButtonClick("5")}>5</button>
        <button className="num-wrapper" onClick={() => handleButtonClick("6")}>6</button>
        <button className="num-wrapper" onClick={() => handleButtonClick("7")}>7</button>
        <button className="num-wrapper" onClick={() => handleButtonClick("8")}>8</button>
        <button className="num-wrapper" onClick={() => handleButtonClick("9")}>9</button>
        <button className="num-wrapper" onClick={() => handleButtonClick("0")}>0</button>
        <button className="operation" onClick={() => handleButtonClick("+")}>+</button>
        <button className="operation" onClick={() => handleButtonClick("-")}>-</button>
        <button className="result" onClick={() => handleButtonClick("=")}>=</button>
      </div>
    </div>
  );
};

export default Numbers;
