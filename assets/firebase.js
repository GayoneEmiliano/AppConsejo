// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnHD3GAzTBYNX1NiSqDJt94KjZCE_RtuE",
  authDomain: "appconsejodeldiscapacitado.firebaseapp.com",
  projectId: "appconsejodeldiscapacitado",
  storageBucket: "appconsejodeldiscapacitado.appspot.com",
  messagingSenderId: "555762542224",
  appId: "1:555762542224:web:582eebc70d60ef32131a15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authUser = getAuth(app)