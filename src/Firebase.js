// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmO8cXNM1rMXfvj9GjbYPtrJJjC0bj25E",
  authDomain: "admin-panel-91046.firebaseapp.com",
  databaseURL: "https://admin-panel-91046-default-rtdb.firebaseio.com",
  projectId: "admin-panel-91046",
  storageBucket: "admin-panel-91046.firebasestorage.app",
  messagingSenderId: "176772520834",
  appId: "1:176772520834:web:e6b3bed7a0109cad4f8d9b",
  measurementId: "G-CHVND49GGS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;