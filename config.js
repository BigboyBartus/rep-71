import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyD1ICRGORNlqzF0AAUxgyIFgFZjXxjrJjk",
  authDomain: "pro71-2ed29.firebaseapp.com",
  projectId: "pro71-2ed29",
  storageBucket: "pro71-2ed29.appspot.com",
  messagingSenderId: "1018898144707",
  appId: "1:1018898144707:web:faaaece9fbd955190df176"
};

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
