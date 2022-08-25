import React, { useContext } from "react";
import css from "./movies.module.css";
import { Movie } from "../movie/movie";
import {MoviesContext} from "../../contexts/MoviesContext"
import { Spinning } from "../waitingSpinner/waitingSpinner";
export const Movies = () => {

    const {moviesDatas} = useContext(MoviesContext);
    
    return (
        <div className={css.MoviesContainer}>
            {moviesDatas.length > 0 ?  moviesDatas.map((oneMovie,index) => {
                return(
                    <Movie key={index} oneMovieData={oneMovie} />
                )
            }) : <Spinning/>}
        </div>
    )
    
}
