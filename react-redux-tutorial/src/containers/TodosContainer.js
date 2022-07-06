import { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import useActions from "../lib/useActions";
import { changeInput, insert, remove, toggle } from "../modules/todos";

// Todos 컴포넌트에 기본값인 input,todos와 함께 todos module에 사용된 함수들을 props로 전달.
const TodosContainer = () => {
  //   {
  //   input,
  //   todos,
  //   changeInput,
  //   insert,
  //   remove,
  //   toggle,
  // }

  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  // const dispatch = useDispatch();
  // const onChangeInput = useCallback(
  //   (input) => dispatch(changeInput(input)),
  //   [dispatch]
  // );
  // const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  // const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  // const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const [onChangeInput, onInsert, onRemove, onToggle] = useActions(
    [changeInput, insert, remove, todos],
    []
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onRemove={onRemove}
      onToggle={onToggle}
    />
  );
};

export default TodosContainer;

// export default connect(
//   // state.todos만 쓰이므로 todos를 구조분해할당함
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     remove,
//     toggle,
//   }
// )(TodosContainer);
