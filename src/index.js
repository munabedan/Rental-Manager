// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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




//get user input



const get_user_email = function(){
  return document.getElementById("yourEmail").value
  
}

const get_user_password = function(){
  return document.getElementById("yourPassword").value
 
}

//authenticate user
const authenticate_user = function (email,password) {

  console.log(email,password)
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Simulate an HTTP redirect:
      window.location.replace("dashboard.html");
    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
    })
}



// process form




//navigate to dashboard


document.addEventListener('DOMContentLoaded', init, false);

function init(){
  console.log("loaded maite")

  document.getElementById("login_form").addEventListener('submit',

    function(event){
      authenticate_user(get_user_email(),get_user_password());
      console.log("authenticate user")
      event.preventDefault();
    }

  )
};
