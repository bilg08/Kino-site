import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCbCrCB1oY8M01S-xzpPLmK3l6N163Y-9A",
  authDomain: "learningfirebaseauthwithphonum.firebaseapp.com",
  projectId: "learningfirebaseauthwithphonum",
  storageBucket: "learningfirebaseauthwithphonum.appspot.com",
  messagingSenderId: "120576265071",
  appId: "1:120576265071:web:572379f4e049268e2f369a",
  measurementId: "G-905S2VL4E7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

