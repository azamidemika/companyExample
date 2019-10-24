import React from "react";
export default class Home extends React.Component {
  render() {
    return (
      <div className="container section animated fadeInUp">
        <h1 className="title is-3 animated fadeInUp">
          Tienda de Cubos "The Cube Man"
        </h1>
        <p className="animated fadeInUp">
          Los mejores cubos de Rubik del mercado, a los mejores precios.
          Contamos con productos importados directamente desde China.
          <br />
          Entre algunos están:
        </p>
        <div className="content">
          <ul className="animated fadeInUp">
            <li>GuoGuan Yuexiao</li>
            <li>Moyu Aolong</li>
            <li>Dayan Zhanchi</li>
          </ul>
          <p>
            Contamos también con un amplio surtido de Lubricantes y cronómetros
            especialmente hechos para speedcubing
          </p>
          <br/>
          <img src="https://wallpaperplay.com/walls/full/2/4/2/46153.jpg"/>
        </div>
      </div>
    );
  }
}
