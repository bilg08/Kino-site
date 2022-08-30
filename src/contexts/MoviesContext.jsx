import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
// import  moviesDatas  from "../asset/movies";
import { db } from "../components/firebaseForThisApp/firebase";
export const MoviesContext=createContext();
export const MoviesContextProvider = ({children}) => {
   
    const [userWantedMovie,setUserWantedMovie]=useState("");
    const [MoviesDatas,setMoviesDatas]=useState([]);
    const database=db;
    const getMoviesDatasFromFireBase=async()=>{
        try {
            const getMoviesDatas =await getDocs(collection(database,"movies"))
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
    return(
        <MoviesContext.Provider value={{MoviesDatas,userWantedMovie,setUserWantedMovie}}>
            {children}
        </MoviesContext.Provider>
    )
}
