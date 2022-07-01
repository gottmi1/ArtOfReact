import React from "react";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  return (
    <div className="TodoList">
      {props.todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={props.onRemove}
          onTo={props.onT}
          // 여기서 props.onT는 App.js에서 사용한 onT를 props로 받아온 것. onTo는 이 자식 컴포넌트에서 props로 사용 될 이름임.
        />
      ))}
    </div>
  );
};

export default TodoList;
