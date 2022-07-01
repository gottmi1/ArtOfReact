import PropTypes from "prop-types";
import React, { Component } from "react";

export default class MyComponent extends Component {
  static defaultProps = {
    name: "기본이름",
  };
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired,
  };
  render() {
    const { name, number, children } = this.props;
    return (
      <div>
        마이컴포넌트 내 이름은 {name} 이다. <br />
        children 값은 {children}이다. <br />
        좋아하는 숫자는 {number}다.
      </div>
    );
  }
}
