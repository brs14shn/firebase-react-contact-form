// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARmNGqMyXBxrfmjOh3ZdOJjBvdUXKbgxw",
  authDomain: "contact-from2.firebaseapp.com",
  databaseURL: "https://contact-from2-default-rtdb.firebaseio.com",
  projectId: "contact-from2",
  storageBucket: "contact-from2.appspot.com",
  messagingSenderId: "494265585275",
  appId: "1:494265585275:web:2823ae2515a3b224b3dcde"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase