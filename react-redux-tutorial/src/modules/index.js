import { combineReducers } from "redux";
import counter from "./counter";
import { todos } from "./todos";

export const rootReducer = combineReducers({ counter, todos });

// 루트 리듀서의 이름을 index.js로 해주면 다른 파일에서 불러올 때, 해당 디렉토리의 이름까지만 입력해도 불러올 수 있다.
