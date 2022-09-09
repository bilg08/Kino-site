import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../contexts/MoviesContext"
import { Spinning } from "../spinner/spinner";
import { Box } from "@mui/system";
import { Button,styled,CardMedia} from "@mui/material";
import comingSoonMovies from '../../asset/comingSoonMovies.json'
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
export const ShowMoviesInSlide = () => {
  const { MoviesDatas } = useContext(MoviesContext);
  const {setUserWantedMovie}=useContext(MoviesContext)
   
  let [index, setIndex] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
           setIndex((prevVal)=>{
               let prevValACopy=prevVal;
               prevValACopy=prevValACopy+1;
               if(prevValACopy>comingSoonMovies.length-1){
                prevValACopy=0
               }
               return(prevValACopy)
           })
        },5000)
    },[index])
 

  return (
    
    <Box sx={{
      width:100+'%',height:50+'vh',position:'relative'}}>
       <h1 style={{position:'absolute',top:0,left:0,zIndex:1,color:'white'}}>Тун Удахгүй</h1>
      {comingSoonMovies.map((movieData,i)=>{
          return(
               <img
                  key={i}
                  style={{
                  width:100+'%',
                  height:100+'%',
                  transition:0.3+'s',
                  position:'absolute',
                  transform: index ===i? 'translateX(0vh)' : 'translateX(-290vh)'}}
                  component="img"
                  src={movieData.img}
               />
      )
      })}
  </Box>
  )
}
