import React, { Component } from "react";
import "./ValidationSample.css";

export default class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000", // 0000일 때만 트루
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked //클릭했을 때(clicked값이 true일 때)
              ? this.state.validated // validated의 값이
                ? "success" // true면
                : "failure" // false면
              : "" // 클릭을 하기 전엔 아무 className이 없음
          }
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
