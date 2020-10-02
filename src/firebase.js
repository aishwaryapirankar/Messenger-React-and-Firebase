import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBiC_lulvvnVv6vDp2f51An9xhVaRXG4-k",
    authDomain: "fb-messenger-d5936.firebaseapp.com",
    databaseURL: "https://fb-messenger-d5936.firebaseio.com",
    projectId: "fb-messenger-d5936",
    storageBucket: "fb-messenger-d5936.appspot.com",
    messagingSenderId: "144702034223",
    appId: "1:144702034223:web:e253bf82201340ca2611da",
    measurementId: "G-XWX3JZQXE0"
});

const db = firebaseApp.firestore()

export default db;