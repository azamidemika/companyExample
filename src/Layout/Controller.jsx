import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Views/Home/Home";
import About from "../Views/About/About";
import Cubes from "../Views/Products/Cubes";
import Lubes from "../Views/Products/Lubes";
import Timers from "../Views/Products/Timers";
import Error from "../Views/Error/Error";

class AllProducts extends React.Component {
  render() {
    return (
      <>
        <div className="container section">
          <h2 className="title is-3 animated fadeInUp">Nuestros productos</h2>
          <Cubes />
          <Lubes />
          <Timers/>
        </div>
      </>
    );
  }
}
export default class Controller extends React.Component {
  render() {
    return (
      <>
        <div style={{ marginTop: "50px" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/products" component={AllProducts} />
            <Route path="/products/cubes" component={Cubes} />
            <Route path="/products/lubes" component={Lubes} />
            <Route path="/products/timers" component={Timers} />
            <Route path="*" component={Error} />
            <Route />
          </Switch>
        </div>
      </>
    );
  }
}
