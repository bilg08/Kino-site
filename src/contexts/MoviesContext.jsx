import { createContext, useEffect, useState } from "react";
import  moviesDatas  from "../asset/movies";
import { initializeApp } from "firebase/app";
import {getDocs,getDoc,setDoc,doc,collection,getFirestore,addDoc} from "firebase/firestore";
export const MoviesContext = createContext();
const firebaseConfig = {
    apiKey: "AIzaSyB3d_wMRiKnFQJeuqQP-3wvPeEegp84MwE",
    authDomain: "zbilguun-moviesite.firebaseapp.com",
    projectId: "zbilguun-moviesite",
    storageBucket: "zbilguun-moviesite.appspot.com",
    messagingSenderId: "805291568664",
    appId: "1:805291568664:web:4e3ae223c699f49783dd6d",
    measurementId: "G-47DY21SGX5"
};
const app= initializeApp(firebaseConfig)
const db = getFirestore(app);

export const MoviesContextProvider = ({children}) => {

    
    const [userWantedMovie,setUserWantedMovie]=useState(""); 
    // const data=getDocs(collection(db,"movies")).then((data)=>data.forEach((el)=>console.log(el.data())));

    return(
        <MoviesContext.Provider value={{moviesDatas,userWantedMovie,setUserWantedMovie}}>
            {children}
        </MoviesContext.Provider>
    )
}
