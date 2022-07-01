import React, { Component } from "react";

export default class EventPractice extends Component {
  state = {
    msg: "",
  };
  handleChange = (e) => {
    {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  handleClick = () => {
    alert(this.state.username + " : " + this.state.msg);
    this.setState({
      msg: "",
      username: "",
    });
  };
  handlerKetPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  // 원래는 생성자를 사용하여 바인딩 해주어야 하지만, 이와같이 편하게 표현하는 방법도 있다.
  // 여기에 함수를 선언할 땐, const 없이 this.함수명으로 접근
  render() {
    // 여기에 함수를 선언할 땐 const를 써서 this없이 함수명으로 하지만 클래스형 컴포넌트에선 보통 여기에 함수를 선언하지 않는다.
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="msg"
          placeholder="아무거나 입력해보세요"
          value={this.state.msg}
          onChange={this.handleChange}
          onKeyPress={this.handlerKetPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
