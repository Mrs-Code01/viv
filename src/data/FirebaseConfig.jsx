// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyASDTYQqP1Vbn7uIUs1AMwiukMPmb2Uah0",
  authDomain: "vivdatabase.firebaseapp.com",
  projectId: "vivdatabase",
  storageBucket: "vivdatabase.firebasestorage.app",
  messagingSenderId: "944856447567",
  appId: "1:944856447567:web:c67bcf805a35812b0e083a",
  measurementId: "G-G1BZH486BP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

