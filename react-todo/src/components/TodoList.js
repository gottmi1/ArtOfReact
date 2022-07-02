import React, { useCallback } from "react";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";
import { List } from "react-virtualized";

// useState의 함수형 업데이트
// const [number, setNumber] = useState(0);
// const onIncrease = useCallback(
//  () => setNumber(prevNumber => prevNumber + 1),
// []
// )
// 이와 같이 업데이트 하면 항상 최신상태를 업데이트하는 것이 보장되므로 useState의 업데이트에는 이렇게 사용되는 것이 좋다.

const TodoList = ({ todos, onRemove, onT }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onTo={onT}
          style={style}
          // 여기서 props.onT는 App.js에서 사용한 onT를 props로 받아온 것. onTo는 이 자식 컴포넌트에서 props로 사용 될 이름임.
        />
      );
    },
    [onRemove, onT, todos]
  );
  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length} //항목 개수
      rowHeight={58}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: "none" }} //List에 기본 적용되는 outline을 제거
    />
  );
};

export default React.memo(TodoList);
