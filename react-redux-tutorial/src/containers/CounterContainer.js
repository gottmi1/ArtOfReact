import Counter from "../components/Counter";
import { connect, useSelector } from "react-redux";
import { increase, decrease } from "../modules/counter";
import { bindActionCreators } from "redux";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위한 함수
const mapStateToProps = (state) => ({
  number: state.counter.number,
});

// 위와 마찬가지, 액션 생성 함수를 넘겨주기 위한 함수
const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 방법2 connect 익명함수법

// export default connect(state =>({number : state.counter.number}),dispatch => {
//   increase : () => dispatch(increase()),
//   decrease : () => dispatch(decrease()),
// })(CounterContainer)
// 개인적으로 이게 더 보기 편한듯 함.

// 방법3 바인드액션법

// import { bindActionCreators } from "redux";
// ...
// export default connect(state =>({number : state.counter.number}),dispatch => {
// bindActionCreators({
//   increase,
//   decrease,
// },dispatch);
// })(CounterContainer)

// 방법4 사실 바인드액션은 필요없었법 (((((((((제일편함)))))))))
// export default connect(state =>({number : state.counter.number}),
// {
//   increase,
//   decrease,
// }
// 그냥 dispatch가 들어갔어야 될 곳에 dispatch를 분해해서 넣어주면 됨 젤 편하네
// )(CounterContainer)
