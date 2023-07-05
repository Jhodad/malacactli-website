import React, { useEffect, Component, useState } from "react";
import { Container, Image, Dropdown, DropdownButton, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

import test from "./../../localAssets/1.png"


export default function MediaDisplay(params) {
    return (
        <Container fluid="true">
            
            <Image className="NC-img" fluid="true" src={params.pCollectionURL} alt="" />
        </Container>
    )
}

