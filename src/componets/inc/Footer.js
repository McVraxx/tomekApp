import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Informacje o firmie</h6>
            <hr />
            <p className="text-white">
              Nasza firma zajmuje się realizacją ogrodzeń, elewacji, posadzek,
              schodów, altan, grill oraz innych tego typów niestandardowych
              pomysłów klientów.
            </p>
          </div>

          <div className="col-md-4">
            <h6>Szybkie linki</h6>
            <hr />
            <div>
              <Link to="/">Start</Link>
            </div>
            <div>
              <Link to="/about">Firma</Link>
            </div>
            <div>
              <Link to="/contact">Kontakt</Link>
            </div>
            <div>
              <Link to="/gallery">Galeria</Link>
            </div>
          </div>

          <div className="col-md-4">
            <h6>informacje kontaktowe</h6>
            <hr />
            <div>
              <p className="text-white mb-1">Targowisko, Polska</p>
            </div>
            <div>
              <p className="text-white mb-1">adress</p>
            </div>
            <div>
              <p className="text-white mb-1">508 008 256</p>
            </div>
            <div>
              <p className="text-white mb-1">tomekkamieniarz@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
