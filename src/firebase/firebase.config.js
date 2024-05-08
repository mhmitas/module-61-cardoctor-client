// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// secrets are from car doctor project
const firebaseConfig = {
    apiKey: "AIzaSyA7LPHtP3sU7voxarL6QwyUooxxp7DMQjQ",
    authDomain: "car-doctors-mhmitas.firebaseapp.com",
    projectId: "car-doctors-mhmitas",
    storageBucket: "car-doctors-mhmitas.appspot.com",
    messagingSenderId: "299011132300",
    appId: "1:299011132300:web:90d2d99ef71e33c5f224a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);