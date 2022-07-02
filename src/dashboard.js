import { getAuth,  signOut } from "firebase/auth";

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


//use features
const analytics = getAnalytics(app);
console.log(analytics)





const  signout_user = function(){
  const auth = getAuth();

  
  // sign out
  
  
  
  signOut(auth).then(()=>{

    console.log("user signed out")
    window.location.replace("index.html");
  }).catch((error)=>{
    console.log(error)
  
  })
}



document.addEventListener('DOMContentLoaded', init, false);
function init(){
  console.log("loaded")
  document.getElementById("signout_button").addEventListener('click',signout_user)
};