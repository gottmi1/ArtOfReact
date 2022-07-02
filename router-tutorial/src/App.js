import { Link, Route, Switch } from "react-router-dom";
import About from "./component/About";
import HistorySample from "./component/HistorySample";
import Home from "./component/Home";
import Profiles from "./component/Profiles";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        {/* Route로 사용되는 컴포넌트에는 자주 사용되는 match,location,history 세 개의 props가 있다. */}
        <Route exact path="/" component={Home} />
        {/* exact를 설정해주지 않으면, 어떤 경로로 가도 /경로 컴포넌트가 보여진다. */}
        <Route path={["/about", "/info"]} component={About} />
        {/* 위와 같이 path props를 구조분해하여 2개 이상의 경로에서 같은 컴포넌트를 보여줄 수 있다. */}
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path가 정해지지 않은 상황에 렌더링 될 default 값을 만들 수 있다.
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}
export default App;
