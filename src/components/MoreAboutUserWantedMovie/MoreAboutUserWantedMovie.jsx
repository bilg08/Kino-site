import React from "react";
import css from "./MoreAboutUserWantedMovie.module.css";
import { MovieImageCart } from "../movieImageCart/movieImageCart";
import {OrderMovieTime} from "../orderMovieTime/orderMovieTime";

export const MoreAboutUserWantedMovie = (props) => {
    const {zahialgiinMedeelel,movieUserWanted,isAnyMovieGoingToBeWatched,setIsAnyMovieGoingToBeWatched,takeUserInput ,takeOrder,tsagaaSongoh,setTsagaaSongoson,tsagaaSongoson,TicketPrices} = props;
    
    return(
        <div className={css.MoreMovieAbout}>
           <div className={css.MovieImage}>
            <MovieImageCart imageSrc={movieUserWanted.image}/>
           </div>
           <div className={css.movieMoreAbout}>
                <h1>{movieUserWanted.MovieName}</h1>
                <p>{movieUserWanted.genre}</p>
                <p>{movieUserWanted.about}</p>
                <button onClick={() =>{
                setIsAnyMovieGoingToBeWatched(prevValue=>!prevValue)
                }}>Үзэх</button>
                <button onClick={() =>{
                setIsAnyMovieGoingToBeWatched(false)
                }}>Буцах</button>
           </div>
           <OrderMovieTime isAnyMovieGoingToBeWatched={isAnyMovieGoingToBeWatched} takeUserInput={takeUserInput} tsagaaSongoh={tsagaaSongoh} TicketPrices={TicketPrices} takeOrder={takeOrder} setTsagaaSongoson={setTsagaaSongoson} zahialgiinMedeelel={zahialgiinMedeelel} tsagaaSongoson={tsagaaSongoson}/>
        </div>
    )
}