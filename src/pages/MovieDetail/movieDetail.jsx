import React, { useContext } from "react";
import css from "./movieDetail.module.css";
import { MoviesContext } from "../../contexts/MoviesContext";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import {Link} from "react-router-dom";
import { Header } from "../../components/site-header/siteHeader";
import { OrderMovie } from "../../components/orderMovie/orderMovie";

export const MovieDetail = (props) => {
    
    const {userWantedMovie} = useContext(MoviesContext);
    const {setUserWantedToOrder} = useContext(MovieOrderingContext);
     
    return(
        <div className={css.MovieDetailPage}>
            <Header/>
        <div className={css.MovieDetailPageMain}>
           <div style={{background:`url(${userWantedMovie.backgroundImage})`,backgroundPosition: "center",
                        backgroundSize: "cover",backgroundRepeat:"no-repeat",width:100+'%',height:100+"%"}}>
                <div className={css.movieMoreAbout}>
                    <div className={css.movieLogo}>
                            <img src={userWantedMovie.MovieLogo}/>
                    </div>
                    <h1>{userWantedMovie.MovieName}</h1>
                    <p className={css.genre}>{userWantedMovie.genre}</p>
                    <p>{userWantedMovie.about}</p>
                    
                   <div>
                     <button className={css.continue} onClick={()=>{
                        setUserWantedToOrder(true) }} >
                    Захиалах
                    </button>
                    <button className={css.backToMovies}>Буцах</button>
                   </div>
                </div>
            </div>
        </div>
        <OrderMovie/>
    </div>

    )
}
