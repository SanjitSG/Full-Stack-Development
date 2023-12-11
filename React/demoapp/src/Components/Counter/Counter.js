import { useState } from "react";

let Counter = () => {
  // let initValue = 0;
  let [initValue, SetInitValue] = useState(0);

  let increment = () => {
    // console.log("increment");
    SetInitValue((initValue) => (initValue = initValue + 1));
    console.log(initValue);
  };

  let decrement = () => {
    // console.log("decrement");
    SetInitValue((initValue) => (initValue = initValue - 1));
    console.log(initValue);
  };
  return (
    <div>
      <h1>Counter Component</h1>
      <h3>{initValue}</h3>
      <hr />
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
    </div>
  );
};

export default Counter;
