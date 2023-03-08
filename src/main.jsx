import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByfaGENTLYpbSnXftGaWGfDyuwJV10P0M",
  authDomain: "callejon-diagon.firebaseapp.com",
  projectId: "callejon-diagon",
  storageBucket: "callejon-diagon.appspot.com",
  messagingSenderId: "1085390066977",
  appId: "1:1085390066977:web:4fee3d9d5293f1b2181a60"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
