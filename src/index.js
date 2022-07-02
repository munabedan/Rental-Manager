// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDKTHyrzjrAL2hQshKiIELpKPD92evALnA",

  authDomain: "rentals-manager-1e88f.firebaseapp.com",

  projectId: "rentals-manager-1e88f",

  storageBucket: "rentals-manager-1e88f.appspot.com",

  messagingSenderId: "516133871814",

  appId: "1:516133871814:web:5ef259c651d6dfa54737c7",

  measurementId: "G-92CRB0J8Z3"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
