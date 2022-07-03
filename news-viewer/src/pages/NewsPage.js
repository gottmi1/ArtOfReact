import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

export default function NewsPage({ match }) {
  // category가 선택되지 않았다면 all로 사용
  const category = match.params.category || "all";

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}
