import React, { useState } from "react";

export default function Say() {
  const [msg, setMsg] = useState("히히");
  const onClickEnter = () => {
    setMsg("어서오시오");
  };
  const onClickLeave = () => {
    setMsg("안녕히가시오");
  };
  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button
        onClick={() => {
          setMsg("허허");
        }}
      >
        ㅋㅋ
      </button>
      <h1 style={{ color }}>{msg}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        붉은색
      </button>
      <button style={{ color: "orange" }} onClick={() => setColor("orange")}>
        그사이 3초 그 짧은 시간
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        푸른색
      </button>
    </div>
  );
}
