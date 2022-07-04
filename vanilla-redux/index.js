import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
// 액션 이름 설정

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (diffrence) => ({ type: INCREASE, diffrence });
const decrease = () => ({ type: DECREASE });
// 액션 생성 함수로 액션 객체를 만든다. type은 필수, 그 외에는 자유롭게

// 초깃값
const initialState = {
  toggle: false,
  counter: 0,
};

// reducer : 변화를 일으키는 함수, 피라미터론 state,action을 받는다.

// 리듀서 함수가 처음 호출될 때는 state값이 undefined이기 때문에 state = initialState로 초깃값을 정해줌.
function reducer(state = initialState, action) {
  // action.type에 따른 작업처리
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성 유지를 해줘야함.
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + diffrence,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
// 스토어의 파라미터로 reducer함수를 넣어준다.

const render = () => {
  const state = store.getState(); //현재 상태 호출
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase());
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
