import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAESHcsXh28y-hUjB0geQ6TO52PFsdiyGQ",
  authDomain: "weight-tracker-a539b.firebaseapp.com",
  projectId: "weight-tracker-a539b",
  storageBucket: "weight-tracker-a539b.appspot.com",
  messagingSenderId: "764175571404",
  appId: "1:764175571404:web:819a8c6b273b5bb0316569",
};

let app;
if (firebase.default.apps.length === 0) {
  app = firebase.default.initializeApp(firebaseConfig);
} else {
  app = firebase.default.app();
}

const db = app.firestore();
const auth = firebase.default.auth();
const Timestamp = firebase.default.firestore.Timestamp;

export { db, auth, Timestamp };
