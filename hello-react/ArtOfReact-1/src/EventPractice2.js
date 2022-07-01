import React, { useState } from "react";

export default function EventPractice2() {
  // const [username, setUsername] = useState("");
  // const [msg, setMsg] = useState("");
  // const onChangeUsername = (e) => setUsername(e.target.value);
  // const onChangeMsg = (e) => setMsg(e.target.value);
  const [form, setForm] = useState({ username: "", msg: "" });
  const { username, msg } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 복사
      [e.target.name]: e.target.value, // 원하는 갚을 덮어씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + " : " + msg);
    setForm({
      username: "",
      msg: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="사용자명"
        onChange={onChange}
      />
      <input
        type="text"
        value={msg}
        name="msg"
        placeholder="메세지를 입력하세요"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
}
