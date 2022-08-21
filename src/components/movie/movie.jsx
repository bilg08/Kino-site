import React, { useContext } from "react";
import css from "./movie.module.css";
import { MovieImageCart } from "../movieImageCart/movieImageCart";
// import {Link} from "react-router-dom";
import { MoviesContext } from "../../contexts/MoviesContext";

export const Movie = (props) => {
    const {oneMovieData} = props;
    const {setUserWantedMovie} =useContext(MoviesContext);


    return(
        <div className={css.Movie}>
            <MovieImageCart imageSrc={oneMovieData.image}/>
                <p>{oneMovieData.MovieName}</p>
                <p>Төрөл: {oneMovieData.genre}</p>
            <button onClick={()=>{
                setUserWantedMovie(oneMovieData)}
            }>Дэлгэрэнгүй</button>
        </div>
    )
}              
