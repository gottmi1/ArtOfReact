import { createAction, handleActions } from "redux-actions";
// redux-actions 라이브러리의 createActions함수를 사용하면 더 편하게 작성이 가능하다.

// 액션 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
// Ducks패턴으로 작성할 땐 모듈폴더 -> 한 파일에 액션타입, 액션생성함수, 리듀서를 몰아 놓는다. 새로운 액션을 만들 때 마다 한 파일만 수정하면 되서 간편함.

// 액션 함수 생성, 이 함수만 다른 파일에서 불러올 수 있도록 export해준다. 액션의 타입을 매칭시켜준다고 생각하면 된다.
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 99999999999,
};

// reducer함수 생성
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case "INCREASE":
//       return { number: state.number + 1 };
//     case "DECREASE":
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// }
// switch문이 아닌 redux-actions의 handleActions를 사용하면 코드가 훨씬 간결해진다.
// 형태 : handleActions({[타입명] : state , action => ({상태})}.[초기 상태])
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
