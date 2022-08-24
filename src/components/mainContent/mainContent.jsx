import React,{useContext}from "react";
import css from "./mainContent.module.css";
import { Movies } from "../movies/movies";
import { MovieDetail } from "../MovieDetail/movieDetail";
import { MovieOrderingContextProvider } from "../../contexts/MovieOrderingContext";


export const MainContent = () => {
    console.log("mainContentAjilla");
    
    return (
        <main className={css.MainContent}>
            <Movies />
            <MovieOrderingContextProvider>
             <MovieDetail/>
            </MovieOrderingContextProvider>
        </main>
    )
}

