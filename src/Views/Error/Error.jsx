import React from "react";

export default function Error() {
  return (
    <>
      <div className="section">
        <h2 className="title is-2">404 - No encontrado</h2>
        <p>No se encuentra la página solicitada</p>
        <br />
        <a className="button is-danger" href="/">
          Volver al inicio
        </a>
      </div>
    </>
  );
}
