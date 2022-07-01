import React, { useState, useEffect, useReducer } from "react";
import useInputs from "./useInputs";

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }
// 커스텀 훅을 사용

export default function Info() {
  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");
  // useEffect(() => {
  //   console.log("주시할 상대가 빈 배열이면 렌더링 될 때 딱 한 번만 실행");
  // }, []);
  // useEffect(() => {
  //   console.log("effect");
  //   console.log(name);
  //   // 클린 업 함수 뒷정리 함수라고도 불림 effect보다 먼저 실행됨, 리턴+화살표
  //   return () => {
  //     console.log("cleanup");
  //     console.log(name);
  //   };
  // }, [name]);

  // const [state, dispatch] = useReducer(reducer, {
  //   name: "",
  //   nickname: "",
  // });
  // const { name, nickname } = state;

  // const onChange = (e) => {
  //   dispatch(e.target);
  // };
  //커스텀 훅을 사용

  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input value={name} name="name" onChange={onChange}></input>
        <input value={nickname} name="nickname" onChange={onChange}></input>
      </div>
      <p>name : {name}</p>
      <p>nickname : {nickname}</p>
    </div>
  );
}
