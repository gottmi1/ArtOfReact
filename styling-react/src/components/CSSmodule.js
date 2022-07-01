import styles from "../styles/CSSmodule.module.css";

import React from "react";

export default function CSSmodule() {
  return (
    // <div className={styles.wrapper}> 모듈 클래스를 하나만 사용할 때
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      {/* 2개 이상 적용할 때, 백틱을 써서 템플릿 리터럴을 사용 위처럼 사용는 방법과*/}
      {/* <div className={[styles.wrapper, styles.inverted].join(` `)}> /</div>일케 사용하는 방법이 있음 */}
      {/* 모듈을 사용한 css라면 import한 이름.클래스명 으로 고유한 클래스명을 생성해줌(같은 클래스명이 몇개든 상관없다) */}
      안녕하세요 저는 <span className="something">CSSmodule!</span>
      {/* :global으로 만든 클래스명은 고유하지 않고 일반 css와 같음. styles.이런식으로 모듈없이 부름 */}
    </div>
  );
}
