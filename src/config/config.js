import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQ7LP96kcbZNruRTo_apkmucYf-UNFyc8",
  authDomain: "blog-901.firebaseapp.com",
  projectId: "blog-901",
  storageBucket: "blog-901.appspot.com",
  messagingSenderId: "425351941170",
  appId: "1:425351941170:web:bac4ced08a88221e3fc02b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)