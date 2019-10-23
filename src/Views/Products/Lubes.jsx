import React from "react";

var lubes = [
  {
    name: "Lubricante cubos Dayan",
    price: 12,
    image:
      "http://mpe-s1-p.mlstatic.com/lubricante-maru-10-ml-100-optimo-para-cubos-17038-MPE20131735956_072014-F.jpg"
  },
  {
    name: "Lubricante cubos ShengShou",
    price: 9,
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=origxorig:format=jpg/path/s6b62474d6def2639/image/i4d567e3003dcbe64/version/1405801779/image.jpg"
  },
  {
    name: "Lubricante para cubos Gan",
    price: 19,
    image:
      "https://blog.kubekings.com/wp-content/uploads/2018/05/lubricante-gan-estandar-10-ml.jpg"
  }
];
export default class Lubes extends React.Component {
  render() {
    var showLubes = lubes.map(lube => (
      <div key={Math.random()} className="column">
        <p>
          <b>{lube.name}</b>
        </p>
        <p>Precio: ${lube.price}</p>
        <br/>
        <img src={lube.image} width="60%" />
      </div>
    ));
    return (
      <div className="container section animated fadeInUp">
        <h3 className="title is-4">Lubricantes</h3>
        <hr />
        <center>
          <div className="columns">{showLubes}</div>
        </center>
      </div>
    );
  }
}
