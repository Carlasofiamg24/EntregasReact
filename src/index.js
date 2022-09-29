import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB4r0fHHySR3MDeWr1tQDnq0G8yY5nVvg",
  authDomain: "prueba-my-ecommerce.firebaseapp.com",
  projectId: "prueba-my-ecommerce",
  storageBucket: "prueba-my-ecommerce.appspot.com",
  messagingSenderId: "188405655451",
  appId: "1:188405655451:web:dc9ac2b202919de2afa33e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
);