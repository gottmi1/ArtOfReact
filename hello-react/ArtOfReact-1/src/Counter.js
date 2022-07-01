import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState(
              (preveState) => {
                return { number: preveState.number + 1 };
              },
              () => {
                console.log("setState호출");
                console.log(this.state);
              }
            );
          }}
        >
          업
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          다운
        </button>
      </div>
    );
  }
}
