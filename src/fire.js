import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDEMhCm2s0iDlGtV4Z7JSc9o4BOfBADtTU",
  authDomain: "smiling-woods.firebaseapp.com",
  projectId: "smiling-woods",
  storageBucket: "smiling-woods.appspot.com",
  messagingSenderId: "896125628477",
  appId: "1:896125628477:web:42ac0a784964170f057a54",
  measurementId: "G-P4MKRY9KQD",
};

const fire = firebase.initializeApp(firebaseConfig);
fire.firestore()

export default fire;
