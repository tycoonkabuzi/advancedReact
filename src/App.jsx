import { useRef, useState } from "react";

import "./App.css";
import Memorization from "./components/Memorization";
import Counter from "./components/Counter";
import ToggleComponent from "./components/ToggleComponent";

function App() {
  //const [count, setCount] = useState(0);
  // const [time, setTime] = useState(0);
  // const inputRef = useRef(null);
  // const intervalId = useRef(null);
  // const addValue = () => {
  //   counterRef.current = counterRef.current + 1;
  // };

  // const reset = () => {
  //   counterRef.current = 0;
  // };

  // const showInConsole = () => {
  //   console.log(counterRef);
  // };

  // const setFocusOnInput = () => {
  //   inputRef.current.focus();
  // };

  // const startCounter = () => {
  //   intervalId.current = setInterval(() => {
  //     setTime((prev) => prev + 1);
  //   }, 1000);
  // };

  // const endCounter = () => {
  //   clearInterval(intervalId.current);
  //   intervalId.current = null;
  // };

  return (
    <>
      {/* <h1> Hook - useRef</h1>
      <p>Time: {time} </p>
      <input ref={inputRef} type="text" />
      <button onClick={addValue}>Add</button>
      <button onClick={reset}>Reset</button>
      <button onClick={showInConsole}>Show in console</button>
      <button onClick={setFocusOnInput}>SetFocus on Input</button>
      <button onClick={startCounter}> Start Counter</button>
      <button onClick={endCounter}>End counter</button>

      <br></br> */}
      <Memorization />
      <Counter />
      <ToggleComponent />
    </>
  );
}

export default App;
