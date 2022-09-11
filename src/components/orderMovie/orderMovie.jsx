import React, { useContext, useState } from "react";
import css from "./orderMovie.module.css";
import { BsFillArrowLeftCircleFill, BsCart3 } from "react-icons/bs";
import {
  MovieOrderingContext,
  useMovieOrderingContext,
} from "../../contexts/MovieOrderingContext";
import { MoviesContext } from "../../contexts/MoviesContext";
import { Link } from "react-router-dom";
import { Backdrop, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
export const OrderMovie = () => {
    const styles = {
        moviesOrderingContainer: (theme) => ({
            width: '100%',
            height: '100%',
            position: 'relative',
            top: 0,
            left: 0,
            margin: 'auto',
            bottom: 300,
            background: 'red',
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
            width: '80%',
            height: '80%',
            margin:'auto',
            // top: 0,
            // left: 0,
            // margin: 'auto',
            // bottom: 300,
            background: 'yellow',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'column'
            // transform: userWantedToOrder === true ? "translateY(0vh)" : "translateY(-500vh)",
        }),
        
    };

  const {
    takeUserInput,
    takeOrder,
    form,
    setUserWantedToOrder,
    userWantedToOrder,
    userWantedToOrderChair,
    setUserWantedToOrderChair,
  } = useMovieOrderingContext();
  const { userWantedMovie } = useContext(MoviesContext);
  const userWantedMovieSeats = userWantedMovie.seat;
  let [userChosenSeats, setUserChosenseats] = useState([]);

  const checkSeat = (e) => {
    const seatId = parseInt(e.target.innerText);
    const possibleSeatToOrder = parseInt(form.Adult) + parseInt(form.Kids);
    console.log(possibleSeatToOrder);
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
      <div className={css.OrderMovie} style={{transform:userWantedToOrder===true?"translateY(0vh)":"translateY(-500vh)",}}>
    <div style={{display:userWantedToOrderChair===true?"none":'flex'}} className={css.form}>
        <div className={css.formHeader}>
            <h2>Захиалга</h2>
            <button onClick={()=>setUserWantedToOrder(false)} className={css.exitFromForm}>X</button>
        </div>
        <div className={css.formMain}>
            <p>Таны боломжит захиалганы тоо:{userWantedMovie.possibleSeatsAllNumber}</p>
         <div className={css.personQuantity}>
            <p>Том Хүн</p>
            <input className={css.Adult} onChange={(e) => takeUserInput(e)} name="Adult" />
            <p>Хүүхэд</p>
            <input className={css.Kids} onChange={(e) => takeUserInput(e)} name="Kids" />
         </div>
         <button className={css.continueToOrderSeat} onClick={()=>setUserWantedToOrderChair(true)}>Үргэлжлүүлэх</button>
        </div>
   </div>

    <div className={css.seatsSection} style={{display:userWantedToOrderChair===true?"flex":'none'}}>
        <div className={css.aboutSeats}>
            <div className={css.aboutRedSeat}>Захиалгатай</div>
            <div className={css.aboutBlueSeat}>Захиалгагүй</div>
            <div className={css.aboutGreenSeat}>Таны сонгосон</div>
        </div>
        <div className={css.theaterTelevision}></div>
        <div className={css.seats} >
            {userWantedMovieSeats === undefined ? "" : userWantedMovieSeats.map((seat, index) => {
                return (
                    <button name="Seat" key={index} style={{
                        background: seat.isOrdered === true ? "red" : "blue"
                    }}
                        disabled={seat.isOrdered === true ? true : false}
                        onClick={(e) => {
                            checkSeat(e)
                            takeUserInput(e, seat, userWantedMovieSeats)
                        }} className={css.seat}>
                        {index}
                    </button>
                )
            })}
        </div>
        <Link to="/">
            <button
                className={css.orderMovieBtn}
                onClick={()=>{
                takeOrder(userChosenSeats)
                setUserWantedToOrderChair(false);
                setUserWantedToOrder(false)
            }}><BsCart3 /></button>
        </Link>

    </div>
</div>

    //   <Backdrop
    //   sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 ,position:"absolute",top:0,left:0,width:'100%',height:'100%'}}
    //   //   open={userWantedToLogin}
    //   >
//     <Grid container sx={styles.moviesOrderingContainer}>
//           <Grid item sx={styles.moviesForm}>
//               <h2>Захиалга</h2>
//               <Grid item sx={{border: "1px solid silver",
//             padding: "10px",
//                   borderRadius: "10px"
//               }}>
//                    <p>Том Хүн</p>
//                    <input onChange={(e) => takeUserInput(e)} name="Adult" />
//               </Grid>
//               <Grid>
//                    <p>Хүүхэд</p>
//                    <input onChange={(e) => takeUserInput(e)} name="Adult" />
//               </Grid>
//           </Grid>

//         <Grid item>
            
//         </Grid>
//     </Grid>
//     // </Backdrop>
  );
};
