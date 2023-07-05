import React, { useState } from "react";
import { Image, Navbar, Nav, NavDropdown, NavbarBrand } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import "./CustomNavbar.css";
import img_Home from "../../localAssets/MS_APNG_STATIC_1024_60.png";
import title from "../../localAssets/Title.png";
import { Link } from "react-router-dom";


function CustomNavbar() {
  const [collapsed, setCollapsed] = useState(false)
  const setToggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>

      {/*}
        <Image src={title} className="brand-logo" />
        <p className="p-wrapped">Magus<br />Studio</p>
    */}

      <Navbar className="navBar fixed-top" expand="lg" onChange={setToggle} onToggle={setToggle}>

        {/*Toggle Button */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ml-auto justify-content-end"
        />

        <Navbar.Collapse fluid="true" className="centered-flex centered-text">

          {/* Path if Collapsed */}
          {collapsed &&
            < Nav fluid="true" className="centered-flex centered-text">
              <LinkContainer to="/">
                <Nav.Link className="image-holder-style home">
                  <Image src={title} className="brand-logo" />
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/events">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Eventos</p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/records">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Records</p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/shop">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Productos</p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Contacto</p>
                </Nav.Link>
              </LinkContainer>

              {/* <LinkContainer to="/location">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Ubicación</p>
                </Nav.Link>
              </LinkContainer> */}
            </Nav>
          }

          {/* Path if NOT Collapsed (EXPANDED)*/}
          {!collapsed &&
            < Nav fluid="true" className="centered-flex centered-text">
              <LinkContainer to="/">
                <Nav.Link className="image-holder-style home">
                  <Image src={title} className="brand-logo" />
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/events">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Eventos</p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/records">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Records</p>
                </Nav.Link>
              </LinkContainer>



              <LinkContainer to="/shop">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Productos</p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Contacto</p>
                </Nav.Link>
              </LinkContainer>

              {/* <LinkContainer to="/location">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Ubicación</p>
                </Nav.Link>
              </LinkContainer> */}
            </Nav>
          }

          <span fluid="true" className="rgb-Line"></span>
        </Navbar.Collapse>

      </Navbar>

    </div >
  );
}

export default CustomNavbar;