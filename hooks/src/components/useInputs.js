import React, { useReducer } from "react";
// 여러 컴포넌트에서 비슷한 기능을 공유할 겨우 커스텀 훅으로 설정하여 로직을 재사용할 수 있다.
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  //Hooks라서 컴포넌트처럼 첫 글자를 대문자로 할 필요가 없음.
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
