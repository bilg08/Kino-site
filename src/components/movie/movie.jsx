import React, { useContext } from "react";
import css from "./movie.module.css";
import { MovieImageCart } from "../movieImageCart/movieImageCart";
import { MoviesContext } from "../../contexts/MoviesContext";
import { Link } from "react-router-dom";
import {MdStarRate} from"react-icons/md"
export const Movie = (props) => {
    
    const {setUserWantedMovie} =useContext(MoviesContext);
    const {oneMovieData} = props;
    console.log(oneMovieData)


    return(
     
        <div className={css.Movie}>
            <MovieImageCart imageSrc={oneMovieData.image}/>
                <div className={css.movieCartBottom} >
                    <div style={{width:100+"%",display:"flex",gap:5+"%"}}><MdStarRate color="yellow"/>{oneMovieData.rating}</div>
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
