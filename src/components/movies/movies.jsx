import React, { useContext } from "react";
import {Movie}from "../movie/movie"
import { MoviesContext } from "../../contexts/MoviesContext";
import { Spinning } from "../spinner/spinner";
import { Box, Grid } from "@mui/material";

export const Movies = () => {
    const {MoviesDatas}=useContext(MoviesContext);
    return (
        <Box sx={{color:'white'}}>
            <h1 style={{color:'white'}}>Кинонууд</h1>
                <Grid justifyContent='space-between'container>
                    {MoviesDatas.length > 0 ?  MoviesDatas.map((oneMovie,index) => {
                        return(
                            <Movie key={index} oneMovieData={oneMovie} />
                        )
                    }) : <Spinning/>}
            </Grid>
        </Box>
    )
}
