// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRrR04pxmLg8USF6CsUKKBeXPNev3PWSU",
  authDomain: "efrei-micro-frontend.firebaseapp.com",
  projectId: "efrei-micro-frontend",
  storageBucket: "efrei-micro-frontend.appspot.com",
  messagingSenderId: "928863016862",
  appId: "1:928863016862:web:3a6436428028d5e66e288f",
  measurementId: "G-718651DDFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);