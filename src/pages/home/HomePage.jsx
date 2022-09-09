import React, { useState } from "react";
import { Header } from "../../components/site-header/siteHeader";
import { UserRegisteration } from "../../components/Login/userRegisteration";
import { Box, Grid, CardMedia } from "@mui/material";
import comingSoonMovies from "../../asset/comingSoonMovies.json";
import moviesOfCinema from "../../asset/movies.json";
import { useEffect } from "react";
import { useMoviesDatasContext } from "../../contexts/MoviesContext";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [index, setIndex] = useState(0);
  const { setUserWantedMovie } = useMoviesDatasContext();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setIndex((prevVal) => {
        let prevValACopy = prevVal;
        prevValACopy = prevValACopy + 1;
        if (prevValACopy > comingSoonMovies.length - 1) {
          prevValACopy = 0;
        }
        return prevValACopy;
      });
    }, 5000);
  }, [index]);
  const styles = {
    parentGridOfHomePage: (theme) => ({
      gap: 10 + "px",
      color: "white",
    }),
    moviesSlide: (theme) => ({
      margin: "auto",
      [theme.breakpoints.down("md")]: {
        backgroundColor: "red",
      },
      [theme.breakpoints.only("md")]: {
        backgroundColor: "yellow",
      },
      [theme.breakpoints.up("md")]: {
        height: 50 + "vh",
      },
    }),
    moviesOfCinemeContainer: (theme) => ({
      maxWidth: 100 + "%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.only("md")]: {},
      [theme.breakpoints.up("md")]: {},
    }),
    moviesOfCinema: (theme) => ({
      maxWidth: 100 + "%",
      display: "flex",
      justifyContent: "center",
      gap: 15 + "px",
      overflow: "scroll",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
      },
    }),
    movie: (theme) => ({
      [theme.breakpoints.down("md")]: {
        maxWidth: 260 + "px",
      },
      "&:hover": {
        opacity: 0.6,
      },
    }),
  };
  return (
    <>
      <Header />
      <Grid container sx={styles.parentGridOfHomePage}>
        <Grid item lg={12} md={12} sm={12} sx={styles.moviesSlide}>
          {comingSoonMovies.map((movie, MovieIndex) => {
            return (
              <img
                key={MovieIndex}
                style={{
                  display: MovieIndex === index ? "block" : "none",
                  width: 100 + "%",
                  height: 100 + "%",
                }}
                src={movie.img}
              />
            );
          })}
        </Grid>

        <Grid item lg={12} md={12} sm={12} sx={styles.moviesOfCinemeContainer}>
          <Box>
            <h1>Манай дэлгэцнээ</h1>
          </Box>
          <Grid container sx={styles.moviesOfCinema}>
            {moviesOfCinema.map((movie, index) => {
              return (
                <Grid sx={styles.movie} item md={3}>
                  <CardMedia
                    onClick={async () => {
                      setUserWantedMovie(movie);
                      navigate(`/movies/${movie.MovieName}`);
                    }}
                    component="img"
                    height={{ width: 100 + "%", height: 50 + "%" }}
                    image={movie.image}
                  />
                  <h4>{movie.MovieName}</h4>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <UserRegisteration />
      </Grid>
    </>
  );
};
