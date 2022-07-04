import React from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

export default function ColorBox() {
  return (
    <ColorConsumer>
      {/* context를 사용할 때, 컨슈머 사이에 중괄호로 jsx나 문자열이 아닌 함수를 넣어주는 패턴을 render Props라고 한다.  */}
      {({ state }) => (
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
      )}
    </ColorConsumer>
  );
}
