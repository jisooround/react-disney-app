// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpDcDXN0YfRruMc9EM0Zzzz1K4dLbgMMg",
  authDomain: "react-disney-plus-app-f6253.firebaseapp.com",
  projectId: "react-disney-plus-app-f6253",
  storageBucket: "react-disney-plus-app-f6253.appspot.com",
  messagingSenderId: "620877635964",
  appId: "1:620877635964:web:49239c6019e669b87304f9",
  measurementId: "G-VP9LL3788Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;