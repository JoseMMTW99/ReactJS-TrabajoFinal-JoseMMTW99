import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzmYkOek3dr5H-Vn_OM_vxoKsVtZHpKBw",
    authDomain: "ventagamer-proyectoreact.firebaseapp.com",
    projectId: "ventagamer-proyectoreact",
    storageBucket: "ventagamer-proyectoreact.appspot.com",
    messagingSenderId: "768645245150",
    appId: "1:768645245150:web:75ebbd5e5c8bc8e266fa4f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < App / > );