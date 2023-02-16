import React from "react";
import "./App.css";
import Home from "./componets/pages/Home";
import About from "./componets/pages/About";
import Contact from "./componets/pages/Contanct";
import Navbar from "./componets/inc/Navbar";
import Footer from "./componets/inc/Footer";
import Gallery from "./componets/inc/Gallery";
import Ogrodzenia from "./componets/inc/Ogrodzenia";
import Posadzki from "./componets/inc/Posadzki";
import Elewacje from "./componets/inc/Elewacje";
import AdaptacjeOgrodowe from "./componets/inc/AdaptacjeOgrodowe";
import Schody from "./componets/inc/Schody";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/gallery/ogrodzenia" element={<Ogrodzenia />} />
          <Route path="/gallery/posadzki" element={<Posadzki />} />
          <Route path="/gallery/elewacje" element={<Elewacje />} />
          <Route
            path="/gallery/adaptacjeogrodowe"
            element={<AdaptacjeOgrodowe />}
          />
          <Route path="/gallery/schody" element={<Schody />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
