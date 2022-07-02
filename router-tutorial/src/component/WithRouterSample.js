import React from "react";
import { withRouter } from "react-router-dom";

function WithRouterSample({ location, match, history }) {
  return (
    <div>
      <h4>Loaction</h4>
      <textarea
        // JSON.strigify를 사용할때 두번째 파라미터로 null, 세 번째 파라미터로 2를 넣어주면 JSON에 들여쓰기가 적용되어 문자열이 만들어진다.
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>Match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
}

// withRouter는 export할 컴포넌트를 감싸주는 방식으로 사용한다.
export default withRouter(WithRouterSample);
