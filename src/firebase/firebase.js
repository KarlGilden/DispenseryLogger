// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIjgDd2jaafNWjJeKEIkMlJqFV1w8-Evw",
  authDomain: "dispenseryloggerdev.firebaseapp.com",
  projectId: "dispenseryloggerdev",
  storageBucket: "dispenseryloggerdev.appspot.com",
  messagingSenderId: "537899792635",
  appId: "1:537899792635:web:feb0cefa1c2278a190d85e",
  measurementId: "G-Q8G5FEVXES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
