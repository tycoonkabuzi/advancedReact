import React from "react";

const CounterButtons = React.memo(({ increment }) => {
  console.log("Rendering Counter Button....");
  return (
    <>
      <button onClick={increment}>Increment</button>
    </>
  );
});
export default CounterButtons;
