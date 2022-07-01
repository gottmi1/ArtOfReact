import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "increment2":
      return { value: state.value + 10 };
    case "decrement":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { value: 100 });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다
      </p>
      <button onClick={() => dispatch({ type: "increment2" })}>10증가</button>
      <button onClick={() => dispatch({ type: "increment" })}>증가</button>
      <button onClick={() => dispatch({ type: "decrement" })}>감소</button>
    </div>
  );
}
