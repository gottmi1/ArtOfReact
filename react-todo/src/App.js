import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import { useState, useRef, useCallback } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "투두리스트 스타일링",
      checked: true,
    },
    {
      id: 3,
      text: "투두 리스트 완성하기",
      checked: false,
    },
  ]);

  // 고윳값으로 사용 될 id. ref를 사용하여 변수에 담는 이유 : id 값은 렌더링 되는 정보가 아니라서 이 값이 바뀐다고 리렌더링 될 필요가 없기 때문
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
