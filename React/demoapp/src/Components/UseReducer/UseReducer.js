import { useReducer } from "react";

let UseReducer = () => {
  let initialState = {
    isRunning: false,
    time: 0,
  };

  let [state, dispatch] = useReducer(reducer, initialState);

  function reducer() {}
  return (
    <div>
      <p>{state.time}s</p>
      <h1>UseReducer Component</h1>
      <button onClick={() => dispatch({ type: "start" })}>Start</button>
      <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducer;
