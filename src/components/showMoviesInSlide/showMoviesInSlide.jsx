import React, { useContext, useEffect, useState } from "react";
import css from "./showMoviesInSlide.module.css";
import { MoviesContext } from "../../contexts/MoviesContext"
import { Spinning } from "../spinner/spinner";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
export const ShowMoviesInSlide = () => {
  const { MoviesDatas } = useContext(MoviesContext);
  let [upNextMovies, setUpNextMovies] = useState([])
  let [index, setIndex] = useState(0)
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
  const prevImg = (e) => {

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
    <div className={css.ShowMoviesInSlideContainer}>
      <div className={css.ShowMoviesInSlides}>
        {MoviesDatas.length <= 0 ? <Spinning /> : MoviesDatas.map((movie, MovieIndex) => {
          return (
            <div
              key={MovieIndex}
              style={
                {
                  transform: index === MovieIndex ? 'translateX(0vh)' : 'translateX(-200vh)',
                  display: 'flex',
                  justifyContent: 'space-between', alignItems: 'center',
                  position: 'absolute',
                  background: `url(${movie.backgroundImage})`, width: 100 + '%', height: 100 + '%', backgroundRepeat: 'no-repeat'
                  , backgroundPosition: 'center', backgroundSize: 'cover'
                }}>
              <p>Манай дэлгэцнээ</p>
              <button className={css.prevBtn} onClick={(e) => prevImg(e)}><AiFillCaretLeft /></button>
              <h1>{movie.MovieName}</h1>
              <button className={css.nextBtn} onClick={(e) => nextImg(e)}><AiFillCaretRight /></button>
            </div>
          )
        })}
      </div>
      <div className={css.upNextMoviesContainer}>

        <h2>Дараа нь</h2>
        <div className={css.upNextMovies}>
        {upNextMovies.map((movie, index) =>{
          return (
            <div
            className={css.upNextMovie} key={index}>
                  <img src={movie.image}/>
                  <h3>`{movie.MovieName}`</h3>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}