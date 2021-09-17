// libs
import { useState } from "react";
// components
import RandomNumber from "./components/RandomNumber";
import ResultRandom from "./components/ResultRandom";
// others
import "./App.css";

const App = () => {
  const [numberList, setNumberList] = useState([]);
  const [result, setResult] = useState(0);

  const onRandomNumber = (values) => {
    console.log(values);
    numberList.push(values);
    setNumberList(numberList);
    setResult(numberList.reduce((sum, number) => sum + number, 0));
  };

  return (
    <div className="App">
      <RandomNumber onRandomNumber={onRandomNumber} />
      <ResultRandom numberList={numberList} result={result} />
    </div>
  );
};

export default App;
