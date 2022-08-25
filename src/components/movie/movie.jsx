import React, { useContext } from "react";
import css from "./movie.module.css";
import { MovieImageCart } from "../movieImageCart/movieImageCart";
import { MoviesContext } from "../../contexts/MoviesContext";
import { Link } from "react-router-dom";
export const Movie = (props) => {
    
    const {setUserWantedMovie} =useContext(MoviesContext);
    const {oneMovieData} = props;
    console.log(oneMovieData)


    return(
     
        <div className={css.Movie}>
            <MovieImageCart imageSrc={oneMovieData.image}/>
                <div className={css.movieCartBottom} >
                    <p>{oneMovieData.MovieName}</p>
                    <p>Төрөл: {oneMovieData.genre}</p>
                    <Link to={"/movies/"+oneMovieData.MovieName} style={{ textDecoration: 'none' }}>
                    <button onClick={()=>{
                        setUserWantedMovie(oneMovieData)}
                    }>
                     Дэлгэрэнгүй 
                    </button></Link>
                </div>
        </div>
    
     
     
    )
}              
