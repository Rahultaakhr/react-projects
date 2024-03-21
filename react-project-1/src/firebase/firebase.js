// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD0PyLBAAThPIsUqD7E41di8kQZWn1gxAI",
    authDomain: "authproject-febd4.firebaseapp.com",
    databaseURL: "https://authproject-febd4-default-rtdb.firebaseio.com",
    projectId: "authproject-febd4",
    storageBucket: "authproject-febd4.appspot.com",
    messagingSenderId: "86373984454",
    appId: "1:86373984454:web:23086add5517891cfd8fc7",
    measurementId: "G-KWMLMVMY18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { auth, app }
