import React, { useContext } from "react";
import css from "./movies.module.css";
import {Movie}from "../movie/movie"
import { MoviesContext } from "../../contexts/MoviesContext";
import { Spinning } from "../spinner/spinner";

export const Movies = () => {
    const {MoviesDatas}=useContext(MoviesContext);
//    console.log('Movies',moviesDatas)
    return (
        <div className={css.MoviesContainer}>
            {MoviesDatas.length > 0 ?  MoviesDatas.map((oneMovie,index) => {
                return(
                    <Movie key={index} oneMovieData={oneMovie} />
                )
            }) : <Spinning/>}
        </div>
    )
}
