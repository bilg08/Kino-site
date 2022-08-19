import { createContext, useContext } from "react";
import { data } from "../asset/movies";
export const MoviesContext = createContext();

export const MoviesContextProvider = ({children}) => {
    return(
        <MoviesContext.Provider value={data}>
            {children}
        </MoviesContext.Provider>
    )
}
export const useMoviesContext = () => useContext(MoviesContext);