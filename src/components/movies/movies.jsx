import React from "react";
import css from "./movies.module.css";
import { Movie } from "../movie/movie";

export const Movies = (props) => {
    const { moviesDatas,setMovieUserWanted} = props;
    
    return (
        <div className={css.MoviesContainer}>
            {moviesDatas.map((movie,index) => {
                
                return(
                    <Movie key={index} movieData={movie} movieID={index} setMovieUserWanted={setMovieUserWanted}/>
                )
            })}
        </div>
    )
}
