import { createContext, useContext, useState } from "react";
import { useGetDocsFromFireBase } from "../firebaseForThisApp/getDocs";
export const MoviesContext=createContext();
export const MoviesContextProvider = ({children}) => {

    const [userWantedMovie,setUserWantedMovie]=useState("");
    const [MoviesDatas] = useGetDocsFromFireBase('movies'); 
    console.log(userWantedMovie)
    return(
        <MoviesContext.Provider value={{MoviesDatas,userWantedMovie,setUserWantedMovie}}>
            {children}
        </MoviesContext.Provider>
    )
}
export const useMoviesDatasContext=()=>useContext(MoviesContext)
