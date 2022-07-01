import React, { Component } from "react";

export default class ScrollBox extends Component {
  scrollBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    // const scrollHeight = this.box.scrollHeight ... 구조분해할당
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      position: "relative",
      overflow: "auto",
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white,black)",
    };
    return (
      <div style={style} ref={(ref) => (this.box = ref)}>
        <div style={innerStyle} />
      </div>
    );
  }
}
