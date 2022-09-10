import React, { useContext } from "react";
import { useMoviesDatasContext } from "../../contexts/MoviesContext";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { Header } from "../../components/site-header/siteHeader";
import { useNavigate } from "react-router-dom";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
import {
  Box,
  Button,
  Dialog,
  Grid,
} from "@mui/material";
import { UserRegisteration } from "../../components/Login/userRegisteration";
import { UserOrders } from "../../components/userOrders/userOrders";
import { OrderMovie } from "../../components/orderMovie/orderMovie";
export const MovieDetail = () => {
  const { userWantedMovie } = useMoviesDatasContext();
  const { setUserWantedToOrder } = useContext(MovieOrderingContext);
  const { isUserLogged } = useContext(WhetherUserLoggedOrNotContext);
  const navigate = useNavigate();
  const styles = {
    movieDetailStyle: (theme) => ({
      background: `url(${userWantedMovie.backgroundImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: 100 + "%",
      height: 60 + "vh",
      position: "relative",
    }),
    movieShadowAndAbout: (theme) => ({
      background:
        "linear-gradient(90deg,#181818 10%,hsla(0,0%,9%,.98) 20%,hsla(0,0%,9%,.97) 25%,hsla(0,0%,9%,.95) 35%,hsla(0,0%,9%,.94) 40%,hsla(0,0%,9%,.92) 45%,hsla(0,0%,9%,.9) 50%,hsla(0,0%,9%,.87) 55%,hsla(0,0%,9%,.82) 60%,hsla(0,0%,9%,.75) 65%,hsla(0,0%,9%,.63) 70%,hsla(0,0%,9%,.45) 75%,hsla(0,0%,9%,.27) 80%,hsla(0,0%,9%,.15) 85%,hsla(0,0%,9%,.08) 90%,hsla(0,0%,9%,.03) 95%,hsla(0,0%,9%,0))",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: 70 + "%",
      height: 100 + "%",
      position: "relative",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }),
    movieLogo: (theme) => ({
      backgroundPosition: "center",
      background: `url(${userWantedMovie.MovieLogo})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: 100 + "%",
      height: 30 + "%",
    }),
    aboutMovie: (theme) => ({
      width: 100 + "%",
      height: 50 + "%",
      color: "silver",
    }),
  };
  return (
    <Box sx={{ width: 100 + "%", height: "auto" }}>
      <Header />
      <Grid container item sx={styles.movieDetailStyle}>
        <Grid item container sx={styles.movieShadowAndAbout}>
          <Grid item sx={styles.movieLogo}></Grid>
          <Grid item sx={styles.aboutMovie}>
            <h3>{userWantedMovie.MovieName}</h3>
            <p>
              {userWantedMovie.duration}|{userWantedMovie.genre}
            </p>
            <p>{userWantedMovie.about}</p>
            <Button
              variant="outlined"
              onClick={() => {
                if (isUserLogged === true) {
                  setUserWantedToOrder(true);
                } else {
                  alert("Ta nevtreegui Baina");
                }
              }}>
              Захиалах
            </Button>
            <Button onClick={() => navigate("/")}>Буцах</Button>
          </Grid>
        </Grid>
      </Grid>
      <UserRegisteration />
      <UserOrders />
      <OrderMovie/>
    </Box>
  );
};
