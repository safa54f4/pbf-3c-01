import firebase from 'firebase/app'
import 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyDsLKfHNHJt8oSz7drhjtJWgvJLH-9jcPI",
    authDomain: "yuni194172.firebaseapp.com",
    projectId: "yuni194172",
    storageBucket: "yuni194172.appspot.com",
    messagingSenderId: "1090760894169",
    appId: "1:1090760894169:web:4b8485a8541de8e7efc0c8",
    measurementId: "G-MNRB7L1XD9"
};
export const myFirebase = firebase.initializeApp(firebaseConfig)