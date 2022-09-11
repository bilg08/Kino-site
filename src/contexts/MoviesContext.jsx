import { createContext, useContext, useState } from "react";
import { useGetDocsFromFireBase } from "../firebaseForThisApp/getDocs";
export const MoviesContext=createContext();
export const MoviesContextProvider = ({children}) => {

    const [userWantedMovie,setUserWantedMovie]=useState("");
    const [MoviesDatas] = useGetDocsFromFireBase('movies'); 
    const [comingSoonMovies] = useGetDocsFromFireBase('comingSoonMovies');

    return(
        <MoviesContext.Provider value={{MoviesDatas,comingSoonMovies,userWantedMovie,setUserWantedMovie}}>
            {children}
        </MoviesContext.Provider>
    )
}
export const useMoviesDatasContext=()=>useContext(MoviesContext)
