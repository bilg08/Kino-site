import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDPHIV6qpFJbMgEcIyS4asAEzKldPeG3DA",
  authDomain: "moviesite-432bd.firebaseapp.com",
  projectId: "moviesite-432bd",
  storageBucket: "moviesite-432bd.appspot.com",
  messagingSenderId: "1049607448588",
  appId: "1:1049607448588:web:2133414a499c41f682e629",
  measurementId: "G-VDS2HTRZXH"
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth = getAuth(app);


