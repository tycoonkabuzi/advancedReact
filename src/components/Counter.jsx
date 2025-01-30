import { useCallback, useState } from "react";
import CounterButtons from "./CounterButtons";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("#ffff");
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <p style={{ backgroundColor: bgColor }}>Counter:{count}</p>
      <input
        type="color"
        value={bgColor}
        onChange={(e) => {
          setBgColor(e.target.value);
        }}
      />
      <CounterButtons increment={increment} />
    </div>
  );
};
export default Counter;
