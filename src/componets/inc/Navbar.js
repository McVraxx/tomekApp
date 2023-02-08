import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="navbar-dark bg-dark shadow">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <li>
                  <Link to="/" className=" display-1 text-secondary">
                    Flinston
                  </Link>
                </li>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className=" navbar-nav ms-auto mb-4 ms-lg-10">
                    <li className="nav-item">
                      <Link to="/" className="nav-link active text-white">
                        Start
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link active text-white">
                        Firma
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/contact"
                        className="nav-link active text-white"
                      >
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
