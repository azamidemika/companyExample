import "./NavBar.css";
import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function NavBar() {
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
  return (
    <>
      <nav
        className="navbar is-dark clinic-navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/Home">
              Inicio
            </Link>
            <Link className="navbar-item" to="/about">
              Acerca de nostros
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link" to="/products">
                Productos
              </Link>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/products/cubes">
                  Cubos
                </Link>
                <Link className="navbar-item" to="/products/timers">
                  Cronómetros
                </Link>
                <Link className="navbar-item" to="/products/lubes">
                  Lubricantes
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end"></div>
        </div>
      </nav>
    </>
  );
}
