// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAexVTG6pQcFksOKlzDrIpeNeD5bTPol9g",
  authDomain: "art-maker-a7ef9.firebaseapp.com",
  projectId: "art-maker-a7ef9",
  storageBucket: "art-maker-a7ef9.appspot.com",
  messagingSenderId: "713023446499",
  appId: "1:713023446499:web:fb0d26a2775e5f15b654d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;