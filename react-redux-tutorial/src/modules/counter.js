// 액션 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
// Ducks패턴으로 작성할 땐 모듈폴더 -> 한 파일에 액션타입, 액션생성함수, 리듀서를 몰아 놓는다. 새로운 액션을 만들 때 마다 한 파일만 수정하면 되서 간편함.

// 액션 함수 생성, 이 함수만 다른 파일에서 불러올 수 있도록 export해준다. 액션의 타입을 매칭시켜준다고 생각하면 된다.
export const increase = () => ({ type: "INCREASE" });
export const decrease = () => ({ type: "DECREASE" });

const initialState = {
  number: 99999999999,
};

// reducer함수 생성
function counter(state = initialState, action) {
  switch (action.type) {
    case "INCREASE":
      return { number: state.number + 1 };
    case "DECREASE":
      return { number: state.number - 1 };
    default:
      return state;
  }
}

export default counter;
