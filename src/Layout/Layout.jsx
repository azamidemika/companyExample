import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Controller from "./Controller";
import Footer from "./Footer";
export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Controller />
          <Footer />
        </Router>
      </>
    );
  }
}
