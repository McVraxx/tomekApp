import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import VMC from "./inc/Vmc";
import posadzka1 from "../images/posadzka1.jpg";
import schody1 from "../images/schody1.jpg";
import elewacja3 from "../images/ogrodzenie32.jpg";

function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading"> Nasza firma </h3>
              <div className="underline mx-auto"></div>
              <p>
                Nasza firma zajmuje się realizacją ogrodzeń, elewacji, posadzek,
                schodów, altan, grill oraz innych tego typów niestandardowych
                pomysłów klientów.
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                Czytaj więcej...
              </Link>
            </div>
          </div>
        </div>
      </section>
      <VMC />

      {/* asdkaksdljads */}

      <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading"> Nasze usługi </h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={schody1}
                  className=" w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6> Service1</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Link to="/services" className="btn btn-link">
                    czytaj więcej...
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={posadzka1}
                  className=" w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6> Service1</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Link to="/services" className="btn btn-link">
                    czytaj więcej...
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={elewacja3}
                  className=" w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6> Service1</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Link to="/services" className="btn btn-link">
                    czytaj więcej...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
