import { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import ErrorBoundary from "./ErrorBoundary";
import EventPractice from "./EventPractice";
import EventPractice2 from "./EventPractice2";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import "./MyComponent";
import MyComponenet from "./MyComponent";
import Say from "./Say";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };
  handleColor = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <>
        {/* <ScrollBox ref={(ref) => (this.scrollBox = ref)} /> 
        <button onClick={() => this.scrollBox.scrollBottom()}>맨 밑으로</button> */}
        {/* <IterationSample /> */}
        <button onClick={this.handleColor}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
