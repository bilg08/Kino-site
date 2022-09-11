import React, { useContext, useState } from "react";
import css from "./orderMovie.module.css";
import { BsFillArrowLeftCircleFill, BsCart3 } from "react-icons/bs";
import {
  MovieOrderingContext,
  useMovieOrderingContext,
} from "../../contexts/MovieOrderingContext";
import { MoviesContext, useMoviesDatasContext } from "../../contexts/MoviesContext";
import { Link, useNavigate } from "react-router-dom";
import { Backdrop, Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
export const OrderMovie = () => {
  const navigate=useNavigate()
   const {
    takeUserInput,
    takeOrder,
    form,
    setUserWantedToOrder,
    userWantedToOrder,
    userWantedToOrderChair,
    setUserWantedToOrderChair,
  } = useMovieOrderingContext();
  const { userWantedMovie } = useMoviesDatasContext();
  const userWantedMovieSeats = userWantedMovie.seat;
  let [userChosenSeats, setUserChosenseats] = useState([]);
    const styles = {
        moviesOrderingContainer: (theme) => ({
            width: '100%',
            height: '100%',
            position: 'relative',
            top: 0,
            left: 0,
            margin: 'auto',
            bottom: 300,
            transform: userWantedToOrder === true ? "translateY(0vh)" : "translateY(-500vh)",
            //   margin: "auto",
            //   width: 100 + "%",
            //   background: `url(${comingSoonMovies.img})`,
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            //   backgroundSize: "cover",
            //   padding: theme.spacing.unit,
            //   [theme.breakpoints.down("sm")]: {
            //     height: 70 + "vh",
            //   },
            //   [theme.breakpoints.between("sm", "md")]: {
            //     height: 80 + "vh",
            //   },
            //   [theme.breakpoints.up("md")]: {
            //     height: 50 + "vh",
            //   },
            //   [theme.breakpoints.up("lg")]: {
            //     height: 80 + "vh",
            //   },
        }),
        moviesForm: (theme) => ({
            width: '50%',
            height: '50%',
            margin:'auto',
            // top: 0,
            // left: 0,
            // margin: 'auto',
            // bottom: 300,
          background: 'white',
            borderRadius:'10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          flexDirection: 'column',
          gap: '5px',
            position:'relative'
            // transform: userWantedToOrder === true ? "translateY(0vh)" : "translateY(-500vh)",
      }),
        moviesSeat: (theme) => ({
            width: '90%',
            height: '50%',
            margin:'auto',
            // background: 'green',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '10px',
            display:userWantedToOrderChair===true?"flex":"none",
            // transform: userWantedToOrder === true ? "translateY(0vh)" : "translateY(-500vh)",
      }),
      televison: (theme) => ({
        width: '20%',
        height: '2px',
        background:'white'
      }),
      aboutSeat: (theme) => ({
        width: '50%',
        height: '80px',
        display: 'flex',
        justifyContent:'space-between'
         
      }),
      seatContainer: (theme) => ({
        width: '80%',
        height: '50%',
        border: '1px solid black',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems:'center',
        gap:'10px'
        
      })
        
    };

 

  const checkSeat = (e) => {
    const seatId = parseInt(e.target.innerText);
    const possibleSeatToOrder = parseInt(form.Adult) + parseInt(form.Kids);
    if (possibleSeatToOrder > userChosenSeats.length) {
      if (userWantedMovieSeats[seatId].isOrdering === false) {
        userWantedMovieSeats[seatId].isOrdering = true;
        setUserChosenseats((prevVal) => {
          let prevValACopy = prevVal;
          prevValACopy.push(seatId);
          console.log(prevValACopy, userWantedMovieSeats[seatId].isOrdering);
          e.target.style.background = "green";
          return (prevVal = prevValACopy);
        });
      } else {
        userWantedMovieSeats[seatId].isOrdering = false;
        setUserChosenseats((prevVal) => {
          let prevValACopy = prevVal;
          e.target.style.background = "blue";
          prevValACopy.splice(prevValACopy.indexOf(seatId, 1));
          return (prevVal = prevValACopy);
        });
      }
    } else {
      for (let i = 0; i < userChosenSeats.length; i++) {
        if (parseInt(userChosenSeats[i]) === seatId) {
          userWantedMovieSeats[seatId].isOrdering = false;
          setUserChosenseats((prevVal) => {
            let prevValACopy = prevVal;
            prevValACopy.splice(prevValACopy.indexOf(seatId), 1);
            e.target.style.background = "blue";
            return (prevVal = prevValACopy);
          });
        }
      }
    }
  };

  return (
    <Grid container sx={styles.moviesOrderingContainer}>
      <Grid item  sx={styles.moviesForm}>
        <h2>Захиалга</h2>
       <Button sx={{position:'absolute',top:0,right:0}} onClick={()=>setUserWantedToOrder(false)} >X</Button>
        <TextField type='number' variant="outlined" name="Adult" onChange={(e) => takeUserInput(e)} label='Том хүн' />
        <TextField type='number' variant="outlined" name="Kids" onChange={(e) => takeUserInput(e)} label='Хүүхэд' />
        <Button variant="contained" onClick={()=>setUserWantedToOrderChair(true)}>Үргэлжлүүлэх</Button>
      </Grid>
      <Grid item sx={styles.moviesSeat}>
        <Box sx={styles.televison}></Box>
        <Grid item sx={styles.aboutSeat}>
          <Grid item md={3} sx={{width:'auto',height:'100%',background:'red'}}>Захиалгатай</Grid>
          <Grid item md={3} sx={{width:'auto',height:'100%',background:'green'}}>Таны сонгосон</Grid>
          <Grid item md={3} sx={{width:'auto',height:'100%',background:'blue'}}>Захиалгагүй</Grid>
        </Grid>
        <Grid item sx={styles.seatContainer}>
             {userWantedMovieSeats === undefined ? "" : userWantedMovieSeats.map((seat, index) => {
                 return (
                     <Button name="Seat" key={index} style={{
                         background: seat.isOrdered === true ? "red" : "blue"
                     }}
                         disabled={seat.isOrdered === true ? true : false}
                         onClick={(e) => {
                             checkSeat(e)
                             takeUserInput(e, seat, userWantedMovieSeats)
                         }} className={css.seat}>
                         {index}
                     </Button>
                 )
             })}
          <Button
            onClick={() => {
              takeOrder(userChosenSeats)
              setUserWantedToOrderChair(false);
              setUserWantedToOrder(false);
              navigate('/')
            }}
            > Захиалах</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
