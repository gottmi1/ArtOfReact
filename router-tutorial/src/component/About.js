import React from "react";
import qs from "qs";

export default function About({ location }) {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  // ignoreQueryPrefix값을 통해 쿼리 값 앞에 오는 ?를 생략해준다
  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과값은 항상 문자열임.
  return (
    <div>
      <h1>소개</h1>
      {/* showDetail이 true일 때, */}
      <p>detail query를 true로 하면 숨겨진 문자가 보입니다.</p>
      {showDetail && <p>detail 값이 true로 설정됐네요.</p>}
    </div>
  );
}
