import React from "react";
import "./App.css";
import Home from "./componets/pages/Home";
import About from "./componets/pages/About";
import Contact from "./componets/pages/Contanct";
import Navbar from "./componets/inc/Navbar";
import Footer from "./componets/inc/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
