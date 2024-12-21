// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8mcKrtr0QcGiySskTKqdRGN3kxojlFWg",
  authDomain: "app23-f2c6e.firebaseapp.com",
  projectId: "app23-f2c6e",
  storageBucket: "app23-f2c6e.firebasestorage.app",
  messagingSenderId: "111667945570",
  appId: "1:111667945570:web:efe87b98c16adc540b313b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);