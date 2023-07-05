import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import Contact from "./components/Contact";
import Records from "./components/Records";
import Events from "./components/Events";
import Location from "./components/Location";
import Shop from "./components/Shop";
import Navbar from "./components/objects/CustomNavbar.jsx";
import Footer from "./components/Footer";

function App() {



  return (
    <Container fluid="true" className="frame" >
      <Router>
        <Navbar />
        
        <Container fluid="true" className="frame">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/records" element={<Records />} />
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/location" element={<Location />} />
          </Routes>

        </Container>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
