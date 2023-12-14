import { useReducer, useEffect, useRef } from "react";

let UseReducer = () => {
  let initialState = {
    isRunning: false,
    time: 0,
  };

  let [state, dispatch] = useReducer(reducer, initialState);
  let idRef = useRef(0);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }

    idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);

  function reducer(state, action) {
    switch (action.type) {
      case "start":
        console.log("start");
        return { ...state, isRunning: true };
      case "stop":
        console.log("stop");
        return { ...state, isRunning: false };
      case "reset":
        console.log("reset");
        return { ...state, time: 0 };
      case "tick":
        return { ...state, time: state.time + 1 };
      default:
        throw new Error();
    }
  }
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
