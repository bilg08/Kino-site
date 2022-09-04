import React, { useContext } from "react";
import css from "./movies.module.css";
import {Movie}from "../movie/movie"
import { MoviesContext } from "../../contexts/MoviesContext";
import { Spinning } from "../spinner/spinner";

export const Movies = () => {
    const {MoviesDatas}=useContext(MoviesContext);
    return (
        <div className={css.Movies}>
            <div className={css.MoviesHeader}>
                <h1>Кинонууд</h1>
            </div>
            <div className={css.MoviesContainer}>
            {MoviesDatas.length > 0 ?  MoviesDatas.map((oneMovie,index) => {
                return(
                    <Movie key={index} oneMovieData={oneMovie} />
                )
            }) : <Spinning/>}
            </div>
        </div>
    )
}
