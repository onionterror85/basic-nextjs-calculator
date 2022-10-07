import React from "react";

export default function Multiplication() {
  const [inputValueOne, setInputValueOne] = React.useState("");
  const [inputValueTwo, setInputValueTwo] = React.useState("");
  const [calculationResult, setCalculationResult] = React.useState("");

  const handleClick = () => {
    setCalculationResult(Number(inputValueOne) * Number(inputValueTwo));
  };

  return (
    <div className="CalculationContainer">
      <h1>Multiplication arithmetic</h1>
      <input onChange={(e) => setInputValueOne(e.target.value)} cy-id="inputOne"></input>
      <div cy-id="multiplicationSymbol">*</div>
      <input onChange={(e) => setInputValueTwo(e.target.value)} cy-id="inputTwo"></input>
      <button onClick={handleClick} cy-id="equalsButton">=</button>
      <div className="CalculationResult" cy-id="calculationResult">{calculationResult}</div>
    </div>
  );
}
