import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비즈니스" },
  { name: "entertainment", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];
const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and(max-width: 768px) {
    width: 100%;
    overflow-y: hidden;
  }
`;
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

export default function Categories({ onSelect, category }) {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        // 요소를 렌더링 할 때는 {}가 아닌 ()
        <Category
          key={c.name}
          // active={category === c.name}
          // onClick={() => onSelect(c.name)} 아래로 대체
          activeClassName="active"
          exact={c.name === "all"}
          to={c.name === "all" ? "/" : `/${c.name}`}
          // c.name이 all일 때는 예외적으로 "/"주소를 넣어 줬다. to 값이 /을 가리키고 있을 때 exact값을 true로 해주어야하는데, 이 값을 설정하지 않으면 다른 카테고리가 선택 되었을 때도 all은 링크에 active스타일이 적용되는 오류가 발생함.
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
}
