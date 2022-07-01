import React, { useMemo, useState, useCallback, useRef } from "react";
// useMemo : 렌더링 하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이cd 전에 연산했던 결과를 재사용(효율적임)
// useCallback : useMemo와 유사함, 주 사용처는 렌더링 성능을 최적화해야 하는 상황. 만들어 놨던 함수를 재사용할 수 있게 해준다. useEffect와 마찬가지로 의존성 배열에 따라 생성한다.
// useRef : 함수 컴포넌트에서 ref를 쉽게 사용할 수 있도록 도와주는 역할

const getAverage = (numbers) => {
  console.log("평균값 계산...");
  // 숫자를 등록할 때 뿐아니라 인풋 내용을 변경할떄도 실행되서 비효율적임, 이럴 땐 useMemo를 사용해야 한다
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

export default function Average() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };
  // const onInsert = (e) => {
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber("");
  // }; 아래는 useCallback을 사용한 리팩토링

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 렌더링될 때 함수 생성
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]); // number 혹은 list가 변경될 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input vlaue={number} onChange={onChange} ref={inputEl} />
      {/* useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current값이 실제 엘리먼트를 가르킨다. */}
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, i) => (
          <li key={i}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값</b> {avg}
      </div>
    </div>
  );
}
