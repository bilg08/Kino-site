import React, { useState, useContext, createContext } from "react";
import { Movies } from "../movies/movies";
import css from "./mainContent.module.css";
import { data } from "../asset/movies";
import { Routes, Route } from "react-router-dom";
import { MoreAboutUserWantedMovie } from "../MoreAboutUserWantedMovie/MoreAboutUserWantedMovie";



export const MoviesContext = createContext()
export const MainContent = () => {
    let [movies, setMovies] = useState(data);
    let [movieUserWanted, setMovieUserWanted] = useState("");
    let [userWantToWatch, setUserWantToWatch] = useState(false);
    let [Orders, setOrders] = useState("");
    let [hereglegcOrder,setHereglegcOrder] = useState("");
    let [suudalOrder,setSuudalOrder] = useState("");

    const takeUserOrder = (e) => {
    
    }

    const MoviesContextProvider = ({ children }) => {

        return (
            <MoviesContext.Provider
                value={{ movies, movieUserWanted, setMovies, setMovieUserWanted, setUserWantToWatch, userWantToWatch,Orders, setOrders,suudalOrder,setSuudalOrder ,hereglegcOrder,setHereglegcOrder}}
            >
                {children}
            </MoviesContext.Provider>
        )
    }



    return (
        <main className={css.MainContent}>
            <MoviesContextProvider>
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/MovieAbout" element={<MoreAboutUserWantedMovie />} />
                </Routes>
            </MoviesContextProvider>
        </main>
    )
}

