import React, { useEffect, useState } from "react";
import { Container, Image, Button } from "react-bootstrap";
import "./ProductsCards.css"
import test from "./../../localAssets/1.png"
import MediaDisplay from "../controllers/MediaDisplay";
// ^ default image

export default function ProductsCards(params) {

    const [expanded, setExpanded] = useState(false)
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [price, setPrice] = useState();
    const [colors, setColors] = useState();


    //Do stuff on load
    useEffect(() => {
        createCard();
    }, [])

    const setToggle = () => {
        setExpanded(!expanded)
    }

    function createCard() {
        setTitle(params.pTitle);
        setBody(params.pBody);
        setPrice(params.pPrice);
        setColors(params.pColors);
    }

    return (
        <Container fluid="true" className="PC-cardContainer">

            {!expanded &&
                <Container className="PC-mediaContainer" fluid="true">
                    <MediaDisplay pCollectionURL={params.pCollectionURL}>

                    </MediaDisplay>
                    <Container fluid="true" className="PC-mediaText">${price} MXN.</Container>
                </Container>
            }
            <Container className="PC-cardTitle">
                <h1 className="PC-text">{title}</h1>
            </Container>

            <Container fluid="true" className="PC-cardContent">
                
                <Container fluid="true" className="PC-cardBody">
                    <p className="PC-textOverflow">{body}</p>
                </Container>

            </Container>

        </Container >
    )
}
