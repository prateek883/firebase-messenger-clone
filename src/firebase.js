import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAaeb7N_zfC9rA8Lc_-kOjL6HUfy1yb7Zk",
  authDomain: "facebook-messenger-clone-c284c.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-c284c.firebaseio.com",
  projectId: "facebook-messenger-clone-c284c",
  storageBucket: "facebook-messenger-clone-c284c.appspot.com",
  messagingSenderId: "878473452608",
  appId: "1:878473452608:web:e587b5266620c6f8b713a5",
  measurementId: "G-KQ2GY8PD49",
});

const db = firebaseApp.firestore();

export default db;
