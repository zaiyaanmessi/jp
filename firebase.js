// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCzoXu9SN0xGSnx9AboDn_ZC9WNI6nssU0",
    authDomain: "jpportal-b0e57.firebaseapp.com",
    projectId: "jpportal-b0e57",
    storageBucket: "jpportal-b0e57.firebasestorage.app",
    messagingSenderId: "331751885612",
    appId: "1:331751885612:web:3dd7d9edb74b9d2cfa3a89",
    measurementId: "G-T5KYVB92WF"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink };
