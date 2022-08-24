import React, { useContext, useEffect } from "react";
import css from "./movieDetail.module.css";
import { MovieImageCart } from "../movieImageCart/movieImageCart";
import { MoviesContext } from "../../contexts/MoviesContext";
import {OrderMovie} from "../orderMovie/orderMovie"
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";


export const MovieDetail = () => {
    
    const {userWantedMovie} = useContext(MoviesContext);

   
    const {userWantedToOrder,setUserWantedToOrder} = useContext(MovieOrderingContext);
     
    return(

            <div style={{
                display:!userWantedMovie?"none":"flex"
            }} className={css.MoreMovieAbout}>
                <div className={css.MovieImage}>
                    <MovieImageCart imageSrc={userWantedMovie.image}/>
                </div>
                <div className={css.movieMoreAbout}>
                    <h1>{userWantedMovie.MovieName}</h1>
                    <p className={css.genre}>{userWantedMovie.genre}</p>
                    <p>{userWantedMovie.about}</p>
                    
                    <button className={css.continue} onClick={()=>{
                        setUserWantedToOrder(true);
                        }} >
                    Захиалах
                    </button>
                    

                </div>
                 <OrderMovie userWantedMovie={userWantedMovie}/>
            </div>

    )
}
