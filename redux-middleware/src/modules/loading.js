// 로딩만 관리하는 유틸함수
import { createAction, handleActions } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

// 요청을 위한 액션타입을 payload로 설정
export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType
  // 편리할듯
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType
);

const initialState = 0;

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState
);
//  action.payload는 액션명(GET_POST나 GET_USERS)임

export default loading;
