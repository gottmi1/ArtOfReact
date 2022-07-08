// thunk를 재사용하기 편하게 만들기 위한 유틸 함수
import { finishLoading, startLoading } from "../modules/loading";

export const createRequestThunk = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      }); //성공
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        rayload: e,
        error: true,
      }); //에러빌생
      dispatch(finishLoading(type));
      throw e;
    }
  };
};

// 사용법 : createRequestThunks(GET_USERS, api.getUsers)
// 액션 타입과 apu를 요청하는 함수를 파라미터로 넣어주면 된다.
