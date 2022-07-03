import React, { useState, useEffect } from "react";

export default function usePromise(promiseCreator, deps) {
  // 대기 중, 완료, 실패에 대한 상태관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // 커스텀훅으로 상태관리를 할 경우 의존성 문제 없는 의존성 배열에 에러가 뜨는 경우가 많은데, 아래 주석은 무의미한 에러(초록색 밑줄)이 뜰 경우 위에 써주면 없어짐.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
