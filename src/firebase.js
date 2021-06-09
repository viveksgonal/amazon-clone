// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-p0oGbPe41454BTg-niT6SbBkgmdNuCg",
  authDomain: "clone-88d4f.firebaseapp.com",
  projectId: "clone-88d4f",
  storageBucket: "clone-88d4f.appspot.com",
  messagingSenderId: "462642271266",
  appId: "1:462642271266:web:c84e1a9cf7662172b3e67b",
  measurementId: "G-KE52X0PCM2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};