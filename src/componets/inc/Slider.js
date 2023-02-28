import React from "react";
import tom01 from "../images/elewacja2.jpg";
import tom02 from "../images/posadzka3.jpg";
import tom03 from "../images/ogrodzenie4.jpg";
import tom04 from "../images/adaptacje3.jpg";
function Slider() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={tom01} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>ELEWACJE</h5>
              <p className="text-white">
                W pełnym zakresie wykonane przez naszą firmę.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={tom02} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>POSADZKI</h5>
              <p className="text-white">
                W pełnym zakresie wykonane przez naszą firmę.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={tom03} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>OGRODZENIA</h5>
              <p className="text-white">
                W pełnym zakresie wykonane przez naszą firmę.
              </p>
            </div>
          </div>
          <div className="carousel-item active">
            <img src={tom04} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>ADAPTACJE OGRODOWE</h5>
              <p className="text-white">
                W pełnym zakresie wykonane przez naszą firmę.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
