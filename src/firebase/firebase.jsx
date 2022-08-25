///////firebase
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB3d_wMRiKnFQJeuqQP-3wvPeEegp84MwE",
    authDomain: "zbilguun-moviesite.firebaseapp.com",
    projectId: "zbilguun-moviesite",
    storageBucket: "zbilguun-moviesite.appspot.com",
    messagingSenderId: "805291568664",
    appId: "1:805291568664:web:4e3ae223c699f49783dd6d",
    measurementId: "G-47DY21SGX5"
};
//////////
export const app =initializeApp(firebaseConfig);
export const database=getFirestore(app)
