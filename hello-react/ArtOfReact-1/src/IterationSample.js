import React, { useState } from "react";

export default function IterationSample() {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새 항목을 추가할 때의 id

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const nextNames = names.concat(
      // 기존 names 배열안에 해당객체를 추가, push대신 concat을 사용한 이유는 push는 기존 배열에 추가하여 업데이트하는 반면 concat은 새 배열을 만들기 때문이다. 리액트에서 상태를 업데이트할 때는 기존 상태는 그대로 두면서 새로운 값을 상태로 설정해야 한다. 이를 불변셩유지라고 하는데 불변성을 유지하면 나중에 컴포넌트의 성능을 최적화할 수 있다.
      {
        id: nextId, // id에는 setNextId의 초기값을
        text: inputText, // text에는 onChange로 set된 inputText의 값을
      }
    );
    setNextId(nextId + 1); // 다음 항목의 id에 쓰일 setNextId에는 현재 id+1을 set해준다
    setNames(nextNames); // naems.concat하여 새로운 객체를 추가한 nextNames배열을 names의 state로 교체
    setInputText(""); // input은 비워준다
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    // names배열에서 해당하는 id 값을 가진 객체를 제외한 새 배열을 set함
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>확인</button>
      <ul>{nameList}</ul>
    </div>
  );
}
