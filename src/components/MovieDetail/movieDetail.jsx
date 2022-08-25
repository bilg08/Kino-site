import React, { useContext, useEffect } from "react";
import css from "./movieDetail.module.css";
import { MoviesContext } from "../../contexts/MoviesContext";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import {Link} from "react-router-dom";

export const MovieDetail = (props) => {
    
    const {userWantedMovie} = useContext(MoviesContext);
    const {userWantedToOrder,setUserWantedToOrder} = useContext(MovieOrderingContext);
     
    return(
            <div style={{background:`url(${userWantedMovie.backgroundImage})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            overflow:"hidden",
                            backgroundRepeat:"no-repeat"}
                            } 
            className={css.MoreMovieAbout}>
                
                <div className={css.movieMoreAbout}>
                    <div className={css.movieLogo}>
                            <img src={userWantedMovie.MovieLogo}/>
                    </div>
                    <h1>{userWantedMovie.MovieName}</h1>
                    <p className={css.genre}>{userWantedMovie.genre}</p>
                    <p>{userWantedMovie.about}</p>
                    
                   <div>
                     <Link to="/OrderMovie"><button className={css.continue} onClick={()=>{
                        setUserWantedToOrder(true);
                        }} >
                    Захиалах
                    </button></Link>
                    <button>Буцах</button>
                   </div>
                </div>
            </div>

    )
}
