import "./Footer.css";
import React from "react";
export default class Footer extends React.Component {
  render() {
    return (
      <>
        <center
          className="app-footer"
          style={{
            position: "fixed",
            bottom: "0",
            width: "100%",
            height: "50px",
            paddingTop: "15px",
            color: "white"
          }}
        >
          Derechos Reservados &copy; Daniel Beltran 2019
        </center>
      </>
    );
  }
}
