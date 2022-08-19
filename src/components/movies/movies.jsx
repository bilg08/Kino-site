import React, { useContext } from "react";
import css from "./movies.module.css";
import { Movie } from "../movie/movie";
import { MoviesContext } from "../mainContent/MainContent";

export const Movies = () => {
   const {movies,movieUserWanted} = useContext(MoviesContext);
     console.log(movies)
    return (
        <div className={css.MoviesContainer}>
            {movies.map((movie,index) => {
                return(
                    <Movie key={index} movieData={movie} />
                )
            })}
        </div>
    )
}
