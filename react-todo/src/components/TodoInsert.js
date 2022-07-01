import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

export default function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  // 함수를 재사용하기 위해 useCallback을 사용
  const onChange = useCallback((e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      // input에 입력된 value를 onInsert의 파라미터로 넣어서 호출
      onInsert(value);
      // value 비우기
      setValue("");
      // submit 방지
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}
