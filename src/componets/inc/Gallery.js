import React from "react";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="jumbotron bg-light text-center">
          <h1 className="display-1 text-capitalize">GALERIA</h1>
          <hr></hr>
          <div>
            <h1 className="display-7">
              <Link to="/gallery/ogrodzenia" className="nav-link active ">
                Ogrodzenia
              </Link>
            </h1>
            <hr></hr>
            <h1 className="display-7">
              <Link to="/gallery/posadzki" className="nav-link active ">
                Posadzki
              </Link>
            </h1>
            <hr></hr>
            <h1 className="display-7">
              <Link to="/gallery/elewacje" className="nav-link active ">
                Elewacje
              </Link>
            </h1>
            <hr></hr>
            <h1 className="display-7">
              <Link
                to="/gallery/adaptacjeogrodowe"
                className="nav-link active "
              >
                Adaptacje ogrodowe
              </Link>
            </h1>
            <hr></hr>
            <h1 className="display-7">
              <Link to="/gallery/schody" className="nav-link active ">
                Schody
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
