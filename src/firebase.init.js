import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARCySag5CCmyAx63D1oXTHQLn1k-J524g",
  authDomain: "foodies-3aafc.firebaseapp.com",
  projectId: "foodies-3aafc",
  storageBucket: "foodies-3aafc.appspot.com",
  messagingSenderId: "229999629564",
  appId: "1:229999629564:web:4b3ddccdb6af31a6633379",
  measurementId: "G-R12VPHJGW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;