import React,{useContext}from "react";
import css from "./mainContent.module.css";
import { Movies } from "../movies/movies";
import { MovieDetail } from "../MovieDetail/movieDetail";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { MovieOrderingContextProvider } from "../../contexts/MovieOrderingContext";
import { OrderMovie } from "../orderMovie/orderMovie";
import { Link } from "react-router-dom";

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

