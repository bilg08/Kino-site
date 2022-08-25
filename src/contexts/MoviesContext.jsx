import { createContext, useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import {getDocs,collection}from"firebase/firestore"
export const MoviesContext = createContext();
const db =database;

export const MoviesContextProvider = ({children}) => {
    let [moviesDatas,setMoviesDatas]=useState([]);
    
    const getMoviesDatasFromFireBase=async()=>{
    try {
        const getMoviesDatas =await getDocs(collection(db,"movies"))
        getMoviesDatas.forEach((movie)=>{
            setMoviesDatas(prevVal=>{
                let prevValAcopy=[...prevVal];
                prevValAcopy=[...prevValAcopy,movie.data()];
                return(
                    prevVal=prevValAcopy
                )
            })
        })
    } catch (error) {
        console.log(error)
    }
        
    }
    useEffect(()=>{
        getMoviesDatasFromFireBase()
    },[])
    
    const [userWantedMovie,setUserWantedMovie]=useState(""); 
    
    

    return(
        <MoviesContext.Provider value={{moviesDatas,userWantedMovie,setUserWantedMovie}}>
            {children}
        </MoviesContext.Provider>
    )
}
