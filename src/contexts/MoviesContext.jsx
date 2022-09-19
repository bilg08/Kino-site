import { createContext, useContext, useState } from "react";
import { useGetDocsFromFireBase } from "../firebaseForThisApp/getDocs";
export const MoviesContext=createContext();
export const MoviesContextProvider = ({children}) => {

    const [userWantedMovie,setUserWantedMovie]=useState("");
    const [MoviesDatas] = useGetDocsFromFireBase('movies'); 
    console.log(MoviesDatas)
    const [comingSoonMovies] = useGetDocsFromFireBase('comingSoonMovies');
    console.log(comingSoonMovies)
    return(
        <MoviesContext.Provider value={{MoviesDatas,comingSoonMovies,userWantedMovie,setUserWantedMovie}}>
            {children}
        </MoviesContext.Provider>
    )
}
export const useMoviesDatasContext=()=>useContext(MoviesContext)
