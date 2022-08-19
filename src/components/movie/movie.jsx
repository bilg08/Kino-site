import React,{useContext, useState}from "react";
import css from "./movie.module.css";
import { MovieImageCart } from "../movieImageCart/movieImageCart";
import {Link} from "react-router-dom";
import { MoviesContext } from "../mainContent/MainContent";
export const Movie = (props) => {
    const {movieData} = props;
    const { movies, movieUserWanted, setMovies,setMovieUserWanted} = useContext(MoviesContext)
    
    
    
    return(
        <div className={css.Movie}>
            <MovieImageCart imageSrc={movieData.image}/>
                <p>{movieData.MovieName}</p>
                <p>Төрөл: {movieData.genre}</p>
            <Link to="/MovieAbout">
            <button onClick={()=>{setMovieUserWanted(movieData)}}>Дэлгэрэнгүй</button>    
            </Link>
            
           
                    
            
        </div>
    )
}