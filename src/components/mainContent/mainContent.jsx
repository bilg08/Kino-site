import React, { useState, useContext, createContext } from "react";
import { Movies } from "../movies/movies";
import css from "./mainContent.module.css";
import { data } from "../../asset/movies";
import { Routes, Route } from "react-router-dom";
import { MoreAboutUserWantedMovie } from "../MovieDetail/movieDetail";
import {MoviesContextProvider, useMoviesContext} from "../../contexts/MoviesContext"


export const MoviesContext = createContext()
export const MainContent = () => {
    // let [movies, setMovies] = useState(data);
    let [movieUserWanted, setMovieUserWanted] = useState("");

    let {data} = useMoviesContext();
    console.log(data)
   
    



    return (
        <main className={css.MainContent}>
            <MoviesContextProvider>
                <Movies />
            </MoviesContextProvider>
        </main>
    )
}

