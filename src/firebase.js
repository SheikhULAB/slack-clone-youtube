import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEVRJegSOpUNySwr3Q73cIyDNDC5ol2eY",
  authDomain: "slack-clone-951ea.firebaseapp.com",
  projectId: "slack-clone-951ea",
  storageBucket: "slack-clone-951ea.appspot.com",
  messagingSenderId: "265846276325",
  appId: "1:265846276325:web:75da7c90f2fc5fb1ef940c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
