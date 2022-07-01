import React from "react";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  return (
    <div className="TodoList">
      {props.todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
