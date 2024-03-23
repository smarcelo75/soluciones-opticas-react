import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApCW0WfgYXoev7qsUgLwe4b4Jvr9wL35I",
    authDomain: "react-marce.firebaseapp.com",
    projectId: "react-marce",
    storageBucket: "react-marce.appspot.com",
    messagingSenderId: "326714912016",
    appId: "1:326714912016:web:412eea547002e3f524c995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();