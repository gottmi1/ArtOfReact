import Counter from "../components/Counter";
import { connect } from "react-redux";
import { decrease, increase } from "../modules/counter";

function CounterContainer({ number, increase, decrease }) {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
}

export default connect((state) => ({ number: state.counter }), {
  increase,
  decrease,
})(CounterContainer);
