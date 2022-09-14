import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApd0HU0GxRW_fQEBKyN1YnYfLLljXELDw",
  authDomain: "stuart-hopwood-cv.firebaseapp.com",
  projectId: "stuart-hopwood-cv",
  storageBucket: "stuart-hopwood-cv.appspot.com",
  messagingSenderId: "502264664855",
  appId: "1:502264664855:web:b0d12f12d3c41e4c24dd52",
  measurementId: "G-JFF4C0R4MX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
