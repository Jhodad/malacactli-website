import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./ProductsGallery.css"
import ProductsCards from "../objects/ProductsCards";
import YoutubeBanner from "../../localAssets/YoutubeBanner.png"
import img2 from "../../localAssets/1.png"
import img3 from "../../localAssets/Title Art Sunburst Damaged Background.png";
import { db, storage } from "../../config/firebase.js";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderby, limit, where, AND } from "firebase/firestore";



function ProductsGallery() {

    // == Data
    const [dataDB, setDataDB] = useState(null);
    const [collectionRef, setCollectionRef] = useState(collection(db, 'productos'));
    const [retrievedURL, setRetrievedURL] = useState();

    // == Get Storage Data
    getDownloadURL(ref(storage, 'Products/Wizard Skates/WIZARD-SKATE-BASIC-2019-319965154.jpg'))
        .then((url) => {
            setRetrievedURL(url)
        })
        .catch((error) => {
            // Handle any errors
        });

    // == Read
    const getDataDB = async () => {
        const collectionSnap = await getDocs(collectionRef);
        setDataDB(collectionSnap.docs.map(
            (doc) => (
                {
                    id: doc.id,
                    nombre: doc.data().nombre,
                    desc: doc.data().desc,
                    precio: doc.data().precio
                })
        ));
        alert("GALLERY UPDATED!")
    };

    useEffect(() => {
        {
            getDataDB();
        }
    }, []);

    return (
        <div>
            <Row className="NG-row">
                {
                    dataDB !== null && dataDB.map((products, index) => (
                        <Col className="NG-column" xs={6} md={4}>

                            <ProductsCards
                                pTitle={products.nombre}
                                pBody={products.desc}
                                pPrice={products.precio}
                                pColors={products.colores}
                                pCollectionURL={retrievedURL} />
                                
                        </Col>
                    )) 
                }
            </Row >
        </div>


    )

}

export default ProductsGallery;