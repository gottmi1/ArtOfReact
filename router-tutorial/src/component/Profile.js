import React from "react";
import WithRouterSample from "./WithRouterSample";
const data = {
  veloper: {
    name: "김진원",
    description: "리액트를 잘하고싶은 개발자",
  },
  jinwon: {
    name: "진원",
    description: "프론트엔드 다 잘하고싶은 개발자",
  },
};

export default function Profile({ match }) {
  const { username } = match.params;
  const profile = data[username];
  console.log(data[username]);
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
}
