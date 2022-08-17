import React,{useState}from "react";
import css from "./movie.module.css";
import { MovieImageCart } from "../movieImageCart/movieImageCart";
import {Link} from "react-router-dom";

export const Movie = (props) => {
    const {movieData,setMovieUserWanted,movieID} = props;
    const [isThisAboutToBeWatched,setThisAboutToBeWatched] = useState(false);
    
    
    return(
        <div className={css.Movie}>
            <MovieImageCart imageSrc={movieData.image}/>
            <p>{movieData.MovieName}</p>
            <p>Төрөл: {movieData.genre}</p>
            <Link to="/movieUserWanted">
            <button onClick={()=>{setMovieUserWanted(movieData)}}>Дэлгэрэнгүй</button>
            </Link>
        </div>
    )
}