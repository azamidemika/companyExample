import "bulma/css/bulma.min.css";
import "animate.css/animate.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout/Layout";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
