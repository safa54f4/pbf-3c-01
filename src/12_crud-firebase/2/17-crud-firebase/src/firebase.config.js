import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const firebaseConfig = {
    apiKey: "AIzaSyCeqsWiNbA3tsQYLhh99ETMtozweQ85efA",
    authDomain: "belajar-react-5ca97.firebaseapp.com",
    databaseURL: "https://belajar-react-5ca97-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "belajar-react-5ca97",
    storageBucket: "belajar-react-5ca97.appspot.com",
    messagingSenderId: "655278510600",
    appId: "1:655278510600:web:9291516d4c0a7d72a1f7bd"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const DB = firebase.database();