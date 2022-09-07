// import React, { useContext, useEffect, useState } from "react";
// import css from "./showMoviesInSlide.module.css";
// import { MoviesContext } from "../../contexts/MoviesContext"
// import { Spinning } from "../spinner/spinner";
// import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
// import { Box } from "@mui/system";
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
// export const ShowMoviesInSlide = () => {
//   const { MoviesDatas } = useContext(MoviesContext);
//   const {setUserWantedMovie}=useContext(MoviesContext)
//   let [upNextMovies,setUpNextMovies] = useState([])
//   let [index, setIndex] = useState(0);
//   let navigate=useNavigate()
//   const nextImg = () => {
//     setIndex(prevVal => {
//       let prevValACopy = prevVal;
//       prevValACopy = prevValACopy + 1;

//       if (prevValACopy > MoviesDatas.length - 1) {
//         prevValACopy = 0;
//         return (
//           prevVal = prevValACopy
//         )
//       }
//       return (
//         prevVal = prevValACopy
//       )

//     });
//   }
//   const prevImg = () => {

//     setIndex(prevVal => {
//       let prevValACopy = prevVal;
//       prevValACopy = prevValACopy - 1;

//       if (prevValACopy < 0) {
//         prevValACopy = MoviesDatas.length - 1;
//         return (
//           prevVal = prevValACopy
//         )
//       }
//       return (
//         prevVal = prevValACopy
//       )
//     });
//   }
//   useEffect(() => {
//     setUpNextMovies(prevVal => {
//       let prevValACopy = prevVal;
//       prevValACopy = MoviesDatas.filter((el, i) => i !== index);
//       return (
//         prevVal = prevValACopy
//       )
//     })
//   }, [index,MoviesDatas])
//   return (
//     <Box className={css.ShowMoviesInSlideContainer} style={{width:100+'%',height:70+'vh'}}>
//      <Box className={css.ShowMoviesInSlides}>
//          {MoviesDatas.length <= 0 ? <Spinning /> : MoviesDatas.map((movie, MovieIndex) => {
//           return (
//             <div
//               key={MovieIndex}
//               style={
//                 {
//                   transform: index === MovieIndex ? 'translateX(0vh)' : 'translateX(-200vh)',
//                   display: 'flex',
//                   justifyContent: 'space-between', alignItems: 'center',
//                   position: 'absolute',
//                   background: `url(${movie.backgroundImage})`, width: 100 + '%', height: 100 + '%', backgroundRepeat: 'no-repeat'
//                   ,backgroundPosition: 'center', backgroundSize: 'cover'
//                 }}>
//               <button className={css.prevBtn} onClick={() => prevImg()}><AiFillCaretLeft /></button>
//               <Box className={css.MoviesInSlideAbout}>
//                 <h1>{movie.MovieName}</h1>
//                      <Button
//                         onClick={async()=>{
//                         await setUserWantedMovie(movie)
//                         navigate(`movies/${movie.MovieName}`)
//                         }} variant="contained">Дэлгэрэнгүй</Button>
//               </Box>
//               <button className={css.nextBtn} onClick={() => nextImg()}><AiFillCaretRight /></button>
//             </div>
//           )
//         })}
//       </Box>
//     </Box>
//   )
// }

import React, { useContext, useEffect, useState } from "react";
import css from "./showMoviesInSlide.module.css";
import { MoviesContext } from "../../contexts/MoviesContext"
import { Spinning } from "../spinner/spinner";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
export const ShowMoviesInSlide = () => {
  const { MoviesDatas } = useContext(MoviesContext);
  const {setUserWantedMovie}=useContext(MoviesContext)
  let [upNextMovies,setUpNextMovies] = useState([])
  let [index, setIndex] = useState(0);
  let navigate=useNavigate()
  const nextImg = () => {
    setIndex(prevVal => {
      let prevValACopy = prevVal;
      prevValACopy = prevValACopy + 1;

      if (prevValACopy > MoviesDatas.length - 1) {
        prevValACopy = 0;
        return (
          prevVal = prevValACopy
        )
      }
      return (
        prevVal = prevValACopy
      )

    });
  }
  const prevImg = () => {

    setIndex(prevVal => {
      let prevValACopy = prevVal;
      prevValACopy = prevValACopy - 1;

      if (prevValACopy < 0) {
        prevValACopy = MoviesDatas.length - 1;
        return (
          prevVal = prevValACopy
        )
      }
      return (
        prevVal = prevValACopy
      )
    });
  }
  useEffect(() => {
    setUpNextMovies(prevVal => {
      let prevValACopy = prevVal;
      prevValACopy = MoviesDatas.filter((el, i) => i !== index);
      return (
        prevVal = prevValACopy
      )
    })
  }, [index,MoviesDatas])
  return (
    <Box className={css.ShowMoviesInSlideContainer} sx={{width:100+'%',height:70+'vh',marginTop:4+'%'}}>
     <Box className={css.ShowMoviesInSlides}>
         {MoviesDatas.length <= 0 ? <Spinning /> : MoviesDatas.map((movie, MovieIndex) => {
          return (
            <div
              key={MovieIndex}
              style={
                {
                  transform: index === MovieIndex ? 'translateX(0vh)' : 'translateX(-220vh)',
                  display: 'flex',
                  justifyContent: 'space-between', alignItems: 'center',
                  position: 'absolute',
                  background: `url(${movie.backgroundImage})`, width: 100 + '%', height: 100 + '%', backgroundRepeat: 'no-repeat'
                  ,backgroundPosition: 'center', backgroundSize: 'cover'
                }}>
              <button className={css.prevBtn} onClick={() => prevImg()}><AiFillCaretLeft /></button>
              <Box className={css.MoviesInSlideAbout}>
                <h1>{movie.MovieName}</h1>
                     <Button
                        onClick={async()=>{
                        await setUserWantedMovie(movie)
                        navigate(`movies/${movie.MovieName}`)
                        }} variant="contained">Дэлгэрэнгүй</Button>
              </Box>
              <button className={css.nextBtn} onClick={() => nextImg()}><AiFillCaretRight /></button>
            </div>
          )
        })}
      </Box>
    </Box>
  )
}
