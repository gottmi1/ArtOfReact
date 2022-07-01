import React from "react";
import styled, { css } from "styled-components";
// css를 불러오는 이유 : 단순 변수의 형태가 아니라 여러 줄의 스타일 구문을 조건부로 설정해야하는 경우 css를 불러와야 한다

const sizes = {
  desktop: 1024,
  tablet: 768,
};
// 스타일드 컴포넌츠 메뉴얼에서 제공하는 유틸함수, 위에 있는 sizes 객체에 따라 자동으로 미디어쿼리 함수를 만들어줌
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
});

const Box = styled.div`
  background: ${(props) => props.color || `blue`};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  /* @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  } */
  ${media.desktop`width: 768px;`}
  ${media.labelt`width: 100%;`}
`;

const Button = styled.button`
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 4px;

  // &를 사용하여 Sass처럼 자신 선택 가능
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* iverted값이 true일 때 특정 스타일을 부여 */
  ${(props) =>
    props.inverted &&
    css`
      //{css}를 import한 이유. 이와 같이 css를 사용한 백틱 구문은 Tagged 템플릿 리터럴 이라고 함.
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}
  & + button {
    margin-left: 1rem;
  }
`;

export default function StyledComponents() {
  return (
    <Box>
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
}
