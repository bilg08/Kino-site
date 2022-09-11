import React, { useContext } from "react";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { AiOutlineClose } from "react-icons/ai";
import { getDocFromFirebase } from "../../firebaseForThisApp/getDoc";
import { MoviesContext } from "../../contexts/MoviesContext";
import { setDocToFirebase } from "../../firebaseForThisApp/setDoc";
import { Button, CardMedia, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import { BsBoxArrowInUp } from "react-icons/bs";
export const UserOrders = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { userUid } = useContext(WhetherUserLoggedOrNotContext);
  const { MoviesDatas } = useContext(MoviesContext);
  const {
    userWantedtoSeeCart,
    setUserWantedtoSeeCart,
    deleteOrder,
    userOrders,
  } = useContext(MovieOrderingContext);
  const styles = {
    userOrdersContainer: {
      width: 100 + "%",
      height: "100%",
      background: "black",
      position: "absolute",
      top: 0,
      left: 0,
      display: userWantedtoSeeCart === true ? "block" : "none",
    },
    //     userOrders: {
    //    height:'auto'
    //  },
    //     userOrder: {
    //       // width: 300 + "px",
    //       // height: '400px',
    //       background:'red'
    //     },
    orderMoviesContainer: (theme) => ({
      maxWidth: 100 + "%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      // [theme.breakpoints.down("md")]: {},
      // [theme.breakpoints.only("md")]: {},
      // [theme.breakpoints.up("md")]: {},
    }),
    movies: (theme) => ({
      maxWidth: 100 + "%",
      display: "flex",
      height: "auto",
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
      margin: "auto",
      [theme.breakpoints.down("md")]: {
        maxWidth: 260 + "px",
      },
    }),
  };
  return (
    <Box sx={styles.userOrdersContainer}>
      <Grid item lg={12} md={12} sm={12} sx={styles.orderMoviesContainer}>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <h1>Таны Захиалга</h1>
          <Button
            sx={{ color: "white" }}
            onClick={() => setUserWantedtoSeeCart(false)}>
            <CloseIcon />
          </Button>
        </Box>
        <Grid container justifyContent="center" sx={styles.movies}>
          {userOrders.map((order, i) => {
            return (
              <Grid sx={styles.movie} item md={3}>
                <CardMedia
                  onClick={async () => {}}
                  component="img"
                  height={{ width: 100 + "%", height: 50 + "%" }}
                  image={order.userOrderedMovieImg}
                />
                <h4>{order.userOrderedMovie}</h4>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  {order.Seat.map((el) => (
                    <p>{el}</p>
                  ))}
                </Box>
                <Button
                  onClick={async () => {
                    console.log("daragdlaa",order);
                    const orderData = getDocFromFirebase(
                      `users/${userUid}/myOrders/${order.uid}`
                    );
                    
                    orderData.then(async (order) => {
                      MoviesDatas.map((movieData) => {

                        if (movieData.MovieName === order.userOrderedMovie) {
                          order.Seat.map(async (sth) => {
                            let data = movieData;
                            if (
                              data.seat[sth].isOrdered === true &&
                              data.seat[sth].isOrdering === true
                            ) {
                              data.seat[sth].isOrdered = false;
                              data.seat[sth].isOrdering = false;

                              data.possibleSeatsAllNumber =
                                data.possibleSeatsAllNumber + 1;
                              await setDocToFirebase(
                                `movies/${data.MovieName}`,
                                data
                              );
                              deleteOrder(order.uid);
                            }
                          });
                        }
                      });
                    });
                  }}>
                  Захиалга Устгах
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      {/* <Box sx={{ display: "flex", justifyContent: "space-around" }}>
         <h2>Таны Захиалга</h2>
         <Button
           sx={{ color: "white" }}
           onClick={() => setUserWantedtoSeeCart(false)}>
           <CloseIcon />
         </Button>
       </Box>
      <Grid container sx={styles.userOrders} gap='10px' justifyContent='space-around'>
        {userOrders.map((order,i)=> {
          return (
            <Grid item md={4}  sx={styles.userOrder}>
              <CardMedia
                 component="img"
                 sx={{ width: 100 + "%", height: 100 + "%" }}
                 src={order.userOrderedMovieImg}
              />
                   <p>{`Киноны нэр:${order.userOrderedMovie}`}</p>
                 <p>Суудалын дугаар</p>
                 <Box sx={{ display: "flex", gap: "10px" }}>
                   {order.Seat.map((el) => (
                     <p>{el}</p>
                   ))}
                 </Box>
               <Button
                  onClick={async () => {
                    const orderData = getDocFromFirebase(
                      `users/${userUid}/myOrders/${order.uid}`
                    );
                    orderData.then(async (order) => {
                      MoviesDatas.map((movieData) => {
                        if (movieData.MovieName === order.userOrderedMovie) {
                          order.Seat.map(async (sth) => {
                            let data = movieData;
                            if (
                              data.seat[sth].isOrdered === true &&
                              data.seat[sth].isOrdering === true
                            ) {
                              data.seat[sth].isOrdered = false;
                              data.seat[sth].isOrdering = false;

                              data.possibleSeatsAllNumber =
                                data.possibleSeatsAllNumber + 1;
                              await setDocToFirebase(
                                `movies/${data.MovieName}`,
                                data
                              );
                              deleteOrder(order.uid);
                            }
                          });
                        }
                      });
                    });
                  }}>
                  Захиалга Устгах
                </Button>
             </Grid>
            )
          })}
      </Grid> */}
    </Box>
    // <Box sx={styles.userOrdersContainer}>
    //   <Box sx={{ display: "flex", justifyContent: "space-around" }}>
    //     <h2>Таны Захиалга</h2>
    //     <Button
    //       sx={{ color: "white" }}
    //       onClick={() => setUserWantedtoSeeCart(false)}>
    //       <CloseIcon />
    //     </Button>
    //   </Box>
    //   <Grid justifyContent='center' container md={12} sx={styles.userOrders}>
    //      {userOrders.length === 0 ? (
    //       <h1>Та захиалга өгөөгүй байна</h1>
    //     ) : (
    //       userOrders.map((order, i) => {
    //         return (
    //           <Grid item md={3} sm={10} sx={styles.userOrder}>
    //             <CardMedia
    //               component="img"
    //               sx={{ width: 100 + "%", height: 100 + "%" }}
    //               src={order.userOrderedMovieImg}
    //             />
    //             <p>{`Киноны нэр:${order.userOrderedMovie}`}</p>
    //             <p>Суудалын дугаар</p>
    //             <Box sx={{ display: "flex", gap: "10px" }}>
    //               {order.Seat.map((el) => (
    //                 <p>{el}</p>
    //               ))}
    //             </Box>
    //             <Button
    //               onClick={async () => {
    //                 const orderData = getDocFromFirebase(
    //                   `users/${userUid}/myOrders/${order.uid}`
    //                 );
    //                 orderData.then(async (order) => {
    //                   MoviesDatas.map((movieData) => {
    //                     if (movieData.MovieName === order.userOrderedMovie) {
    //                       order.Seat.map(async (sth) => {
    //                         let data = movieData;
    //                         if (
    //                           data.seat[sth].isOrdered === true &&
    //                           data.seat[sth].isOrdering === true
    //                         ) {
    //                           data.seat[sth].isOrdered = false;
    //                           data.seat[sth].isOrdering = false;

    //                           data.possibleSeatsAllNumber =
    //                             data.possibleSeatsAllNumber + 1;
    //                           await setDocToFirebase(
    //                             `movies/${data.MovieName}`,
    //                             data
    //                           );
    //                           deleteOrder(order.uid);
    //                         }
    //                       });
    //                     }
    //                   });
    //                 });
    //               }}>
    //               Захиалга Устгах
    //             </Button>
    //           </Grid>
    //         );
    //       })
    //     )}

    //   </Grid>
    // </Box>
  );
};
