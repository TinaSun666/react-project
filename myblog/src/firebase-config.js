// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACs9uWrMUA187_bLYFayuAz2vlONRVybQ",
    authDomain: "blogproject-76204.firebaseapp.com",
    projectId: "blogproject-76204",
    storageBucket: "blogproject-76204.appspot.com",
    messagingSenderId: "644813385267",
    appId: "1:644813385267:web:8fd82c4c2d83f8aeeb3d46",
    measurementId: "G-8CRPC1RG7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();