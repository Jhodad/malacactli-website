import React, { useState, useEffect } from "react";
import { Container, Image, Col, Row, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "./Home.css";
import magusCard from "../localAssets/bgTest.png"
import NewsGallery from "./controllers/NewsGallery";
import welcomeVid from "../localAssets/Happiness on Inline Skates.mp4";


function Home() {

  return (
    <div>

      {/* ======================== */}
      {/*     WELCOME VID          */}
      {/* ======================== */}

      <Container fluid="true" className="page-header">
        <Container className="home-page-header" fluid="true" onContextMenu={e => e.preventDefault()}>
          <video className='home-page-header-vid' fluid="true" autoPlay loop muted>
            <source src={welcomeVid} type='video/mp4' />
          </video>
          <Container className="home-page-header-vid-text" fluid="true">
            <h1>Bienvenidos a Malacactli</h1>
          </Container>
        </Container>

        {/* <Image
          className="page-header-img"
          src={magusCard}
          alt="HEADER"
        /> */}

      </Container>


      {/* ======================== */}
      {/*     WELCOME TEXT         */}
      {/* ======================== */}
      {/* <Container fluid="true" className="page-holder-modules">
        <Container fluid="true" className="welcome-body welcome-text">
          <h1>Bienvenidos al sitio web</h1>
          <h3><br></br>
            Un sitio web dedicado blah blah blah   Un sitio web dedicado blah blah blah   Un sitio web dedicado blah blah blah   Un sitio web dedicado blah blah blah
          </h3>
        </Container>
      </Container> */}


      <Container className="body-splitter-xs">  </Container>

      <Container className="contact-banner">
        <Image>

        </Image>
      </Container>

      {/* ======================== */}
      {/*     NEWS GALLERY         */}
      {/* ======================== */}
      <Container fluid="true" className="page-holder-full">

        <NewsGallery />

      </Container>



      {/* ======================== */}
      {/*     CLIENTS CAROUSEL     */}
      {/* ======================== */}
      <Container fluid="true" className="page-holder-full">


        {/* <AwesomeSlider>
          <div data-src="/path/to/image-0.png" />
          <div data-src="/path/to/image-1.png" />
          <div data-src="/path/to/image-2.jpg" />
        </AwesomeSlider> */}



      </Container>

      <Container className="body-splitter-xs">  </Container>

    </div>
  );
}

export default Home;
