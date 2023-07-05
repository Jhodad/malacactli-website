import React, { useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./Footer.css";
import title from "../localAssets/Title2.png";


function Footer() {

    const [collapsed, setCollapsed] = useState(false)

    const setToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div  >
            <span fluid="true" className="rgb-Line-f"></span>
            <Container fluid="true" className="footer">
                <Row fluid="true" className="testt" >
                    <Col>
                        <h4 className="footer-text">texto texto </h4>
                    </Col>
                    <Col>
                        <h4 className="footer-text">Powered by </h4>
                        <Image src={title} className="footer-logo" />
                    </Col>
                    <Col>
                        <h4 className="footer-text">texto texto </h4>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Footer;