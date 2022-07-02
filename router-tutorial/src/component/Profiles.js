import React from "react";
import Profile from "./Profile";
import { Link, Route, NavLink } from "react-router-dom";

// Profile를 서브라우터로 사용

export default function Profiles() {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록 : </h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/veloper">
            veloper 프로필
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/jinwon">
            jinwon 프로필
          </NavLink>
        </li>
      </ul>

      <Route
        exact
        path="/profiles"
        render={() => <div>사용자를 선택해주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}
