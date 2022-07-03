import { getAuth,  signOut } from "firebase/auth";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";


import { getFirestore, collection, addDoc, getDoc, getDocs, deleteDoc ,doc} from "firebase/firestore";

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


const db = getFirestore(app);

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






// add properties to database



const push_data = async function (name,apartment,units,owner,operating_account,address){
    try {
        const docRef = await addDoc(collection(db, "properties"), {
          name: name,
          type: apartment,
          units: units,
          owner: owner,
          operating_account: operating_account,
          address: address,
    
        });
        console.log("Document written with ID: ", docRef.id);
        window.location.reload();

      } catch (e) {
        console.error("Error adding document: ", e);
      }
}









const display_property_item = (Property_name,Property_type,Property_unit,Property_owner,Property_operating_account,Property_address) => {
    if("content" in document.createElement('template')){

        var tbody = document.getElementById("property_table")
        var template = document.getElementById("property_item")
    
        //clone new row and insert it into table
        var clone = template.content.cloneNode(true)
        console.log("clone table")
    
        var name = clone.getElementById("Property_name")
        name.textContent = Property_name
        console.log("get name")
    
        var type = clone.getElementById("Property_type")
        type.textContent = Property_type
        console.log("get type")
    
        var units = clone.getElementById("Property_unit")
        units.textContent = Property_unit
        console.log("get units")
    
        var owner = clone.getElementById("Property_owner")
        owner.textContent = Property_owner
        console.log("get owner")
    
        var operating_account = clone.getElementById("Property_operating_account")
        operating_account.textContent = Property_operating_account
        console.log("get account")
    
        var apartment = clone.getElementById("Property_address")
        apartment.textContent = Property_address
        console.log("get apartment")
    
        tbody.appendChild(clone)
    
    } else {
    
    }
}

const fetch_data = async () => {
    const querySnapshot = await getDocs(collection(db, "properties"));
    var data;
    querySnapshot.forEach((doc)=>{
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        data = JSON.stringify(doc.data())
        console.log(JSON.stringify(doc.data().name))
        display_property_item(
            JSON.stringify(doc.data().name),
            JSON.stringify(doc.data().type),
            JSON.stringify(doc.data().units),
            JSON.stringify(doc.data().owner),
            JSON.stringify(doc.data().operating_account),
            JSON.stringify(doc.data().address)
        )

    })
}

const delete_data = async () => {
  await deleteDoc(doc(db,"properties","KR5WPJqxZJiYUquRWp2t"))
}

const display_add_new_property_form = () => {
    document.getElementById("add_new_property_form").style.display = 'block';
    document.getElementById("submit_item_button").addEventListener('click',
    
    (event)=>{
        get_form_inputs();
        event.preventDefault();
    }
    );
}

const hide_add_new_property_form = () => {
    document.getElementById("add_new_property_form").style.display = 'none';

}

const get_form_inputs = () => {
    var name = document.getElementById("property_name_input").value
    var type = document.getElementById("property_type_input").value
    var units = document.getElementById("property_units_input").value
    var owner = document.getElementById("property_owner_input").value
    var operating_account = document.getElementById("property_operating_account_input").value
    var address = document.getElementById("property_address_input").value

    console.log(name,type,units,owner,operating_account,address)

    push_data(name,type,units,owner,operating_account,address)

    hide_add_new_property_form()

}



document.addEventListener('DOMContentLoaded', init, false);
function init(){
  console.log("loaded")
  document.getElementById("signout_button").addEventListener('click',signout_user);

  console.log("event: sign out")
  document.getElementById("add_property").addEventListener('click',
    display_add_new_property_form
  );

  console.log("event: add property")

  fetch_data()


  
};