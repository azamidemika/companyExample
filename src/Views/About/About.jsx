import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div className="container section animated fadeInUp">
        <h2 className="title is-4">Nuestra historia</h2>
        <p>
          Nacimos en el año 2014, gracias a la idea de Martín Valverde, de
          vender cubos en Colombia y de esta forma, se pudiera llevar el
          <b>speedcubing</b> a más personas.
        </p>
        <br />
        <center>
          <img
            width="70%"
            src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Vof7agb/speedcubing-speedsolver-completing-rubiks-cube_e1qumypbl__F0005.png"
          />
        </center>
      </div>
    );
  }
}
