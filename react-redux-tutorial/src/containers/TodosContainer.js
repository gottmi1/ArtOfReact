import { connect } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, insert, remove, toggle } from "../modules/todos";

// Todos 컴포넌트에 기본값인 input,todos와 함께 todos module에 사용된 함수들을 props로 전달.
const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  remove,
  toggle,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onRemove={remove}
      onToggle={toggle}
    />
  );
};

export default connect(
  // state.todos만 쓰이므로 todos를 구조분해할당함
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    remove,
    toggle,
  }
)(TodosContainer);
