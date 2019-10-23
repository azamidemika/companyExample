import React from "react";
var cubes = [
  {
    name: "GuoGuan YueXiao",
    price: 12,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61H2VLJWnsL._SX425_.jpg"
  },
  {
    name: "Moyu Aolong",
    price: 19,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61wln1KMf1L._SX425_.jpg"
  },
  {
    name: "Dayan Zhanchi",
    price: 15,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51mjTGRCKKL._SL1000_.jpg"
  }
];
export default class Cubes extends React.Component {
  render() {
    var showCubes = cubes.map(cube => (
      <div className="column" key={Math.random()}>
        <p>
          <b>{cube.name}</b>
        </p>
        <p>Precio: ${cube.price}</p>
        <br />
        <img width="60%" src={cube.image} />
      </div>
    ));
    return (
      <div className="container section animated fadeInUp">
        <h3 className="title is-4">Cubos de Rubik</h3>
        <hr />
        <center>
          <div className="products columns">{showCubes}</div>
        </center>
      </div>
    );
  }
}
