// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdGsj0MTNrezlbccOzjeOrgMlqeDd6aL4",
  authDomain: "crud-react-5efe1.firebaseapp.com",
  projectId: "crud-react-5efe1",
  storageBucket: "crud-react-5efe1.appspot.com",
  messagingSenderId: "461508619638",
  appId: "1:461508619638:web:28b9ec66b903f276bf9e57",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
