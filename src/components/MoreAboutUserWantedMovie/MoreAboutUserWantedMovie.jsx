import React, { useContext, useState } from "react";
import css from "./MoreAboutUserWantedMovie.module.css";
import { MovieImageCart } from "../movieImageCart/movieImageCart";
import { MoviesContext } from "../mainContent/mainContent";
import { Link } from "react-router-dom";
import { OrderMovie } from "../orderMovie/orderMovie";

export const MoreAboutUserWantedMovie = () => {
    const {movieUserWanted,movies,setUserWantToWatch} = useContext(MoviesContext);

    return(
        <div className={css.MoreMovieAbout}>
           <div className={css.MovieImage}>
            <MovieImageCart imageSrc={movieUserWanted.image}/>
           </div>
           <div className={css.movieMoreAbout}>
                <h1>{movieUserWanted.MovieName}</h1>
                <p className={css.genre}>{movieUserWanted.genre}</p>
                <p>{movieUserWanted.about}</p>
                <button className={css.continue} onClick={() => setUserWantToWatch(true)}>Үзмээр Байна</button>
                <Link to="/">
                <button className={css.backToMovies} onClick={() => setUserWantToWatch(false)}>Буцах</button>
                </Link>
           </div>
           <OrderMovie/>
        </div>
    )
}
