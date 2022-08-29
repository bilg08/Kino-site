import React, { useContext } from "react";
import css from "./movies.module.css";
import {Movie}from "../movie/movie"
import { MoviesContext } from "../../contexts/MoviesContext";

export const Movies = () => {
    const {moviesDatas}=useContext(MoviesContext);
   
    return (
        <div className={css.MoviesContainer}>
            {moviesDatas.map((oneMovieData,index)=>
                <Movie key={index} oneMovieData={oneMovieData}/>
            )}
        </div>
    )
}
