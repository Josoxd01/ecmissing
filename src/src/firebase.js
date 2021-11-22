//import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCabJrseFKa_f8Mobf55g6XiAqdmKxu0vA",
    authDomain: "ecmissing.firebaseapp.com",
    projectId: "ecmissing",
    storageBucket: "ecmissing.appspot.com",
    messagingSenderId: "315547643050",
    appId: "1:315547643050:web:ee2bb8f02607b1f1f534d3"
  };
// Initialize Firebase

const fb=firebase.initializeApp(firebaseConfig);
export const db=fb.firestore();
//export default firebase;