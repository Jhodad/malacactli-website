// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCL-XHWWWhrEB1sPJpC4-gCEGdCm6qIdsE",
    authDomain: "malacactli-website.firebaseapp.com",
    projectId: "malacactli-website",
    storageBucket: "malacactli-website.appspot.com",
    messagingSenderId: "647326362357",
    appId: "1:647326362357:web:105d3c2d06fdcb45b873bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);