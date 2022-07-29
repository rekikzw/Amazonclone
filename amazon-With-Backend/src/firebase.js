// import firebase from 'firebase'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXQZ19SO8TP9SukXGeJcswFQFDPk8h_2g",
  authDomain: "backend-rekik-5da6a.firebaseapp.com",
  projectId: "backend-rekik-5da6a",
  storageBucket: "backend-rekik-5da6a.appspot.com",
  messagingSenderId: "630349896908",
  appId: "1:630349896908:web:92aeac7a14d3f87e577669",
  measurementId: "G-EGMRY6CZM4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
