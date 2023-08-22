import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD2Gnov7d68WmHJXnT59TGQCDT39jneIrM",
  authDomain: "e-ride-1ed63.firebaseapp.com",
  projectId: "e-ride-1ed63",
  storageBucket: "e-ride-1ed63.appspot.com",
  messagingSenderId: "624172110719",
  appId: "1:624172110719:web:f5790b6189a2169108c04a",
  measurementId: "G-P3Q7VC3R41"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
