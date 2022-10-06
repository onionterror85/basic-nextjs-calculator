import React from "react";

export default function Addition() {
  const [inputValueOne, setInputValueOne] = React.useState("");
  const [inputValueTwo, setInputValueTwo] = React.useState("");
  const [calculationResult, setCalculationResult] = React.useState("");

  const handleClick = () => {
    console.log("button clicked");
    console.log(inputValueOne);
    console.log(inputValueTwo);
    setCalculationResult(Number(inputValueOne) + Number(inputValueTwo));
  };

  return (
    <div className="CalculationContainer">
      <h1>Addition arithmetic</h1>
      <input onChange={(e) => setInputValueOne(e.target.value)}></input>
      <div>+</div>
      <input onChange={(e) => setInputValueTwo(e.target.value)}></input>
      <button onClick={handleClick}>=</button>
      <div className="CalculationResult">{calculationResult}</div>
    </div>
  );
}
