import React, { useContext } from "react";
import css from "./movies.module.css";
import {Movie}from "../movie/movie"
import { MoviesContext } from "../../contexts/MoviesContext";
import { Spinning } from "../spinner/spinner";
import { Box } from "@mui/material";

export const Movies = () => {
    const {MoviesDatas}=useContext(MoviesContext);
    return (
        <Box className={css.Movies}>
            <div className={css.MoviesHeader}>
                <h1>Кинонууд</h1>
            </div>
            <Box sx={{}} className={css.MoviesContainer}>
            {MoviesDatas.length > 0 ?  MoviesDatas.map((oneMovie,index) => {
                return(
                    <Movie key={index} oneMovieData={oneMovie} />
                )
            }) : <Spinning/>}
            </Box>
        </Box>
    )
}
