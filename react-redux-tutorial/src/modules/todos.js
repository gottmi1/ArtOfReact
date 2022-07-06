import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const INPUT_CHANGE = "todos/INPUT_CHANGE";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// 액션 생성함수는 () => ({})모양을 사용한다

// export const changeInput = (input) => ({
//   type: INPUT_CHANGE,
//   input,
// });
export const changeInput = createAction(INPUT_CHANGE, (input) => input);
// type을 createAction의 첫 인자로 넣어줘서 다시 쓸 필요가 없다.

let id = 3; // insert가 호출될 때마다 1씩 증가
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
// todo객체를 액션 객체 안에 넣어주어야 하기 때문에 text를 넣으면 todo객체가 반환되는 함수를 쓴다.

// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });

export const toggle = createAction(TOGGLE, (id) => id);
// 두 번째 파라미터의 id를 그대로 리턴하는 함수는 필수가 아니지만, 코드를 보았을 때 이 액션 생섬 함수의 피라미터로 어떤 것이 필요한지 쉽게 알 수 있다.

export const remove = createAction(REMOVE, (id) => id);

// 초깃값을 어떻게 설정할지를 가장 먼저 생각해야 함.
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트 리덕스 사용하기",
      done: false,
    },
  ],
};

export const todos = handleActions(
  {
    [INPUT_CHANGE]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      input: state.todos.concat(todo),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todo: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todo: state.todos.filter((todo) => todo.id !== id),
    }),
  },
  initialState
);

// export const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case INPUT_CHANGE:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// };
