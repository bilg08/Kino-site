import React, { useState } from "react";
import { Header } from "../../components/site-header/siteHeader";
import { UserRegisteration } from "../../components/Login/userRegisteration";
import { Box, Grid, CardMedia } from "@mui/material";
import moviesOfCinema from "../../asset/movies.json";
import { useEffect } from "react";
import { useMoviesDatasContext } from "../../contexts/MoviesContext";
import { useNavigate } from "react-router-dom";
import { UserOrders } from "../../components/userOrders/userOrders";
import comingSoonMovies from '../../asset/comingSoonMovies.json';
import {OrderMovie} from '../../components/orderMovie/orderMovie'
console.log(comingSoonMovies)
export const HomePage = () => {
  const [index, setIndex] = useState(0);
  const { setUserWantedMovie } = useMoviesDatasContext();
  // console.log(comingSoonMovies[0])
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
      height: 'auto',
      position:'relative'
    }),
    moviesSlide: (theme) => ({
      margin: "auto",
      width: 100 + '%',
      background: `url(${comingSoonMovies.img})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      padding: theme.spacing.unit,
      [theme.breakpoints.down('sm')]: {
        height: 70 + 'vh'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        height: 80 + 'vh',
      },
      [theme.breakpoints.up('md')]: {
        height: 50 + 'vh',
      },
      [theme.breakpoints.up('lg')]: {
        height: 80 + 'vh',
      },
    }),
    moviesOfCinemeContainer: (theme) => ({
      maxWidth: 100 + "%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      // [theme.breakpoints.down("md")]: {},
      // [theme.breakpoints.only("md")]: {},
      // [theme.breakpoints.up("md")]: {},
    }),
    moviesOfCinema: (theme) => ({
      maxWidth: 100 + "%",
      display: "flex",
      justifyContent: "center",
      gap: 15 + "px",
      overflow: "scroll",
      justifyContent: "space-between",
      // [theme.breakpoints.down("sm")]: {
      //   justifyContent: "center",
      // },[theme.breakpoints.down("md")]: {
      //   justifyContent: "center",
      // },
      // [theme.breakpoints.down("lg")]: {
      //   justifyContent: "center",
      // },
    }),
    movie: (theme) => ({
      margin:'auto',
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
        <Grid item  sx={styles.moviesSlide}>
          <h1>Тун Удахгүй</h1>
          <h1>{comingSoonMovies.MovieName}</h1>
        </Grid>

        <Grid item lg={12} md={12} sm={12}  sx={styles.moviesOfCinemeContainer}>
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
        <UserOrders />
        {/* <OrderMovie/> */}
      </Grid>
    </>
  );
};
