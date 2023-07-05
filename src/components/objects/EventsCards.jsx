import React, { useEffect, Component, useState } from "react";
import { Container, Image, Dropdown, DropdownButton, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./EventsCards.css"
import test from "./../../localAssets/1.png"
import MediaDisplay from "../controllers/MediaDisplay";
// ^ default image

export function EventsCards(params) {

    const [expanded, setExpanded] = useState(false)
    const [dropDownName, setDropDownName] = useState("Choose your size:");

    const [title, setTitle] = useState();
    const [subtitle, setSubtitle] = useState();
    const [body, setBody] = useState();
    const [date, setDate] = useState();


    //Do stuff on load
    useEffect(() => {
        createCard();
    }, [])

    const setToggle = () => {
        setExpanded(!expanded)
    }

    function createCard() {
        
        setTitle(params.pTitle);
        setSubtitle(params.pSubtitle);
        setBody(params.pBody);
        setDate(params.pDate);
    }

    return (
        <Container fluid="true" className="EC-cardContainer">
            <Container className="EC-cardTitle">
                <h1 className="EC-text">{title}</h1>
            </Container>

            {!expanded &&
                <Container className="EC-mediaContainer" fluid="true">
                    <MediaDisplay pCollectionURL ={params.pCollectionURL}>
                        
                    </MediaDisplay>
                    <Container fluid="true" className="EC-mediaText">{date}</Container>
                </Container>
                }

            <Container fluid="true" className="EC-cardContent">
                {/* <Container fluid="true" className="EC-cardTitle">
                    <h1 fluid="true" className="EC-text">{subtitle}</h1>
                </Container> */}

                <Container fluid="true" className="EC-cardBody">
                    <p className="EC-textOverflow">{body}</p>
                    <span fluid="true" className="EC-span" onClick={() => setToggle()}>CONOCER MAS</span>
                </Container>

            </Container>

        </Container >
    )
}



export function EventsCardsHead(params) {

    const [expanded, setExpanded] = useState(false)
    const [dropDownName, setDropDownName] = useState("Choose your size:");

    const [imgURL, setImgURL] = useState(test);
    const [title, setTitle] = useState();
    //const [subtitle, setSubtitle] = useState();
    const [body, setBody] = useState();
    const [date, setDate] = useState();


    //Do stuff on load
    useEffect(() => {
        createCard();
    }, [])

    const setToggle = () => {
        setExpanded(!expanded)
    }

    function createCard() {
        setImgURL(params.pImgURL);
        setTitle(params.pTitle);
        //setSubtitle(params.pSubtitle);
        setBody(params.pBody);
        setDate(params.pDate);
    }

    return (
        <Container fluid="true" className="EC-cardContainerHead">
            <Container className="EC-cardTitle">
                <h1 className="EC-text">{title}</h1>
            </Container>

            <Container className="EC-imgContainer" fluid="true">
                <Image className="EC-img" fluid="true" src={imgURL} alt="" />
                <Container fluid="true" className="EC-imgText">{date}</Container>
            </Container>

            <Container fluid="true" className="EC-cardContent">
                {/* <Container fluid="true" className="EC-cardTitle">
                    <h1 fluid="true" className="EC-text">{subtitle}</h1>
                </Container> */}

                <Container fluid="true" className="EC-cardBody">
                    <p className="EC-textOverflow">{body}</p>
                    <span fluid="true" className="EC-span" onClick={() => setToggle()}>INSCRIBIRSE</span>
                </Container>

            </Container>



        </Container >
    )
}
