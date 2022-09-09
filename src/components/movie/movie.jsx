import React, { useContext } from "react";
import { MovieImageCart } from "../movieImageCart/movieImageCart";
import { MoviesContext } from "../../contexts/MoviesContext";
import { Link } from "react-router-dom";
import {MdStarRate} from"react-icons/md";
import Button from '@mui/material/Button';
import { Grid,Box } from "@mui/material";
export const Movie = (props) => {
    
    const {setUserWantedMovie} =useContext(MoviesContext);
    const {oneMovieData} = props;

    return(
     
        <Grid element xs={3} md={3} sx={{
            height:60+'%'}}>
            <img src={oneMovieData.image} style={{width:100+'%',height:'auto'}}/>
                <Box >
                    <Box style={{width:100+"%",display:"flex",gap:5+"%"}}>
                        <MdStarRate color="gold"/>{oneMovieData.rating}
                    </Box>
                    <p>{oneMovieData.MovieName}</p>
                    <p>Төрөл: {oneMovieData.genre}</p>
                    <Link to={"/movies/"+oneMovieData.MovieName} style={{ textDecoration: 'none' }}> 
                     <Button
                        onClick={()=>{
                        setUserWantedMovie(oneMovieData)}} variant="contained">Дэлгэрэнгүй</Button>
                    </Link>
               </Box>
         </Grid>
    
     
     
    )
}              
