import React from "react";
import css from "./style.module.css";

export const Movies = (props) => {
    const { moviesDatas,setMovieUserWanted} = props;

    return (
        <div className={css.MoviesContainer}>
            {moviesDatas.map((movieData, index) => {
                return (
                    <div key={index} className={css.Movie}>
                        <img src={movieData.image} />
                        <p>{movieData.MovieName}</p>
                        <p>{movieData.genre}</p>
                        <p>{movieData.about}</p>
                        <button onClick={() => setMovieUserWanted(movieData)}>Дэлгэрэнгүй</button>
                    </div>
                )
            })}
        </div>
    )
}