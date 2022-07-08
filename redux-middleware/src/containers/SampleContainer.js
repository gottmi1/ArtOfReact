import { useEffect } from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    // useEffect에 파라미터로넣는 함수는 async로 만들 수 없기때문에 내부에 async함수를 하나 더 만들고 호출해준다.
    const fn = async () => {
      try {
        getPost(1);
        getUsers(1);
      } catch (e) {
        console.log(e); // 에러 조회
      }
    };
    fn();
  }, [getPost, getUsers]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    // loadingPost: sample.loading.GET_POST,
    // loadingUsers: sample.loading.GET_USERS,
    // loading 유틸을 통해 다음과 같이 조회 가능
    loadingPost: loading["sample/GET_POST"],
    loadingUSERS: loading["sample/GET_USERS"],
  }),
  { getPost, getUsers }
)(SampleContainer);
