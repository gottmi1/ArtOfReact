import React, { useContext } from "react";
// useContext로 Consumer 없이 값을 받아올 수 있음
import ColorContext, { ColorConsumer } from "../contexts/color";

export default function ColorBox() {
  const { state } = useContext(ColorContext);
  // useContext를 사용하면 이렇게 훨씬 보기 쉽고 편해진다. 함수형 컴포넌트에선 이걸 쓰도록 하자.

  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
}
