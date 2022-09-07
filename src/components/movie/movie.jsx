import React, { useContext } from "react";
import css from "./movie.module.css";
import { MovieImageCart } from "../movieImageCart/movieImageCart";
import { MoviesContext } from "../../contexts/MoviesContext";
import { Link } from "react-router-dom";
import {MdStarRate} from"react-icons/md";
import Button from '@mui/material/Button';
export const Movie = (props) => {
    
    const {setUserWantedMovie} =useContext(MoviesContext);
    const {oneMovieData} = props;

    return(
     
        <div className={css.Movie}>
            <MovieImageCart imageSrc={oneMovieData.image}/>
                <div className={css.movieCartBottom} >
                    <div style={{width:100+"%",display:"flex",gap:5+"%"}}>
                        <MdStarRate color="gold"/>{oneMovieData.rating}
                        </div>
                    <p>{oneMovieData.MovieName}</p>
                    <p>Төрөл: {oneMovieData.genre}</p>
                    <Link to={"/movies/"+oneMovieData.MovieName} style={{ textDecoration: 'none' }}> 
                     <Button
                        onClick={()=>{
                        setUserWantedMovie(oneMovieData)}} variant="contained">Дэлгэрэнгүй</Button>
                    </Link>
                </div>
        </div>
    
     
     
    )
}              
