import React, { Component } from "react";
import CSSmodule from "./components/CSSmodule";
import SassComponent from "./components/SassComponent";
import StyledComponents from "./components/StyledComponents";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <SassComponent /> */}
        {/* <CSSmodule /> */}
        <StyledComponents />
      </div>
    );
  }
}
