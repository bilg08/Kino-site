import { createContext, useState } from "react";
import  moviesDatas  from "../asset/movies";
export const MoviesContext=createContext();
export const MoviesContextProvider = ({children}) => {
    const [userWantedMovie,setUserWantedMovie]=useState("");
    return(
        <MoviesContext.Provider value={{moviesDatas,userWantedMovie,setUserWantedMovie}}>
            {children}
        </MoviesContext.Provider>
    )
}
