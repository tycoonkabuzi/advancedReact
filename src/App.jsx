import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const showInConsole = () => {
    console.log(count);
  };

  return (
    <>
      <h1> Hook -useRef</h1>
      <p>The count is :{count}</p>
      <button onClick={addValue}>Add</button>
      <button onClick={reset}>Reset</button>
      <button onClick={showInConsole}>Show in console</button>
    </>
  );
}

export default App;
