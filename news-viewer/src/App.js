import { useState, useCallback } from "react";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

function App() {
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => {
  //   setCategory(category);
  // }, []);

  return (
    // <>
    //   <Categories category={category} onSelect={onSelect} />
    //   <NewsList category={category} />
    // </>
    <Route path="/:category?" component={NewsPage} />
    // 뒤에 ?가 붙으면 이 값이 옵셔널(선택적)이라는 의미이다. 즉 있을 수도 있고 없을수도 있다는 뜻. category의 URL파라미터가 없다면 all을 선택한 것으로 간주함.
  );
}

export default App;
