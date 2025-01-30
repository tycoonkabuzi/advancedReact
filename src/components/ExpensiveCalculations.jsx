import { useMemo, useState } from "react";
import FilterableList from "./filterableList";

const ExpensiveCalculations = () => {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const slowFunction = (num) => {
    console.log("Complex Computation...."); // TODELETE
    for (let i = 0; i < 1e9; i++) {}
    return 2 * num;
  };

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyle = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };
  return (
    <div>
      <hr />
      <p>Expensive Calculations</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDarkTheme((prevTheme) => !prevTheme)}>
        Change Theme
      </button>
      <div style={themeStyle}> Doubled Number: {doubleNumber}</div>
      <hr />
      <FilterableList />
    </div>
  );
};
export default ExpensiveCalculations;
