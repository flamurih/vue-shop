
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "./firebase";
require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1vbRkRktINd4d7VrvSMQ1ikMScNCIaRw",
  authDomain: "vue-shop-78275.firebaseapp.com",
  projectId: "vue-shop-78275",
  storageBucket: "vue-shop-78275.appspot.com",
  messagingSenderId: "378296466661",
  appId: "1:378296466661:web:249285b9f320c59506680c",
  measurementId: "G-RSHJ40SXHH"
};

// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
const analytics = getAnalytics(fb);