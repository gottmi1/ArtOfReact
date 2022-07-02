import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import { useState, useRef, useCallback, useReducer } from "react";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i < 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}
function todoReducer(todos, action) {
  switch (action.type) {
    // {type : "INSERT" , todo: {id:1, text: 'todo',checked:false}}
    case "INSERT":
      return todos.concat(action.todo);
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

function App() {
  // const [todos, setTodos] = useState(createBulkTodos);

  // useReducer를 사용해 insert,toggle,remove를 한번에 처리한다

  // const onInsert = useCallback(
  //   (text) => {
  //     const todo = {
  //       id: nextId.current,
  //       text,
  //       checked: false,
  //     };
  //     setTodos(todos.concat(todo));
  //     nextId.current += 1;
  //   },
  //   [todos]
  // );

  // // todos = 위에 만든 배열, todo = 배열 안에 든 객체 하나 하나
  // // 선택한 객체의 id를 제외한 나머지 배열을 setTodos에 넣는 함수.
  // const onRemove = useCallback(
  //   (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   },
  //   [todos]
  // );
  // // 선택한 객체의 id가 같을경우 나머지 모든 객체(...todo) + 해당객체의 checked를 반전시킨 값을 setTodos에 넣는 함수.
  // const onToggle = useCallback(
  //   (id) => {
  //     setTodos(
  //       todos.map((todo) =>
  //         todo.id === id ? { ...todo, checked: !todo.checked } : todo
  //       )
  //     );
  //   },
  //   [todos]
  // );

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고윳값으로 사용 될 id. ref를 사용하여 변수에 담는 이유 : id 값은 렌더링 되는 정보가 아니라서 이 값이 바뀐다고 리렌더링 될 필요가 없기 때문
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: "INSERT", todo });
    nextId.current += 1;
  });
  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);
  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE", id });
  }, []);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onT={onToggle} />
      {/* 여기서 onToggle은 App.js에서 만든 함수이고, onT는 TodoList에서 사용할 props임. */}
    </TodoTemplate>
  );
}

export default App;
