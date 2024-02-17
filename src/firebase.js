// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANP-jA0McDJJANDk-OHnmwnJEoSpkoPQc",
  authDomain: "chat-62dea.firebaseapp.com",
  projectId: "chat-62dea",
  storageBucket: "chat-62dea.appspot.com",
  messagingSenderId: "567919227502",
  appId: "1:567919227502:web:a302c9654f256578e8ec7f",
  measurementId: "G-NSSYMKB0NC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

