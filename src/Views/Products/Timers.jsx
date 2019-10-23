import React from "react";

var timers = [
  {
    name: "Cronómetro Yuxin",
    price: 24,
    image:
      "https://www.juegosbesa.com/1440-large_default/cronometro-yuxin-timer.jpg"
  },
  {
    name: "Cronómetro Speed Stacks Pro G4",
    price: 25,
    image: "https://kubekings.com/5249-medium_default/speed-stacks-pro-g4.jpg"
  },
  {
    name: "Cronómetro Qj Generación 3 negro",
    price: 22,
    image:
      "https://cuboscubik.com/image/cache/data/Cubos/Accesorios/Cronometro%20g3%200-270x270.jpg"
  }
];
export default class Timers extends React.Component {
  render() {
    var showTimers = timers.map(timer => (
      <div key={Math.random()} className="column">
        <p>
          <b>{timer.name}</b>
        </p>
        <p>Precio: ${timer.price}</p>
        <img src={timer.image} width="60%" />
      </div>
    ));
    return (
      <div className="container section animated fadeInUp">
        <h3 className="title is-4">Cronómetros</h3>
        <br />
        <center>
          <div className="columns">{showTimers}</div>
        </center>
      </div>
    );
  }
}
