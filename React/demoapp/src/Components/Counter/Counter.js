import { useState } from "react";

let Counter = () => {
  let [initValue, SetInitValue] = useState(0);

  // increment function
  let increment = () => {
    SetInitValue((initValue) => (initValue = initValue + 1));
  };

  // decrement function
  let decrement = () => {
    SetInitValue((initValue) => (initValue = initValue - 1));
  };

  //  reset
  let reset = () => {
    SetInitValue((initValue) => (initValue = 0));
  };
  return (
    <div>
      <h1>Counter Component</h1>
      <hr />

      <h3>Counter: {initValue}</h3>
      <button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
