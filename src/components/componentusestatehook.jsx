import React, { useState } from "react";

const ComponentUseStateHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="usestatediv">
        <h3>UseState Hook</h3>
        <p>{counter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};

export default ComponentUseStateHook;
