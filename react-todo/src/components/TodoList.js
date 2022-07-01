import React from "react";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
}
