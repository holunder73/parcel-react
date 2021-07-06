import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

function App() {
  return (
    <Header />
  );
}

var mountNode = document.getElementById("app");
ReactDOM.render(
  <App />, mountNode
);