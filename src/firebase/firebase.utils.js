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

export const createUserProfilesDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
