import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCzl6mNJ2uQVxLBUK1KmiiBCKzHHsdxgic",
  authDomain: "crwn-db-9d743.firebaseapp.com",
  databaseURL: "https://crwn-db-9d743.firebaseio.com",
  projectId: "crwn-db-9d743",
  storageBucket: "crwn-db-9d743.appspot.com",
  messagingSenderId: "706685156919",
  appId: "1:706685156919:web:0da5a0463515543b5e49b2",
  measurementId: "G-HE71PB307K",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestores = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
