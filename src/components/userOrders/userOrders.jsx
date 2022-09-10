import React, { useContext } from "react";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import {AiOutlineClose} from "react-icons/ai";
import { getDocFromFirebase } from "../../firebaseForThisApp/getDoc";
import { MoviesContext } from "../../contexts/MoviesContext";
import { setDocToFirebase } from "../../firebaseForThisApp/setDoc";
import { Grid } from "@mui/material";
export const UserOrders = () => {
    const { userUid } = useContext(WhetherUserLoggedOrNotContext);
    const {MoviesDatas}=useContext(MoviesContext)
    const {userWantedtoSeeCart,setUserWantedtoSeeCart,deleteOrder,userOrders}=useContext(MovieOrderingContext);    
    console.log(userOrders)
    const styles = {
        userOrdersContainer: {
            width:90+'%',
            height: 'auto',
            background: 'red',
            position: 'absolute',
            top: 0,
            left: 0,
            margin:'auto'
        }
    }
    return (
        <Grid sx={styles.userOrdersContainer} container lg={12} md={12} sm={12}>
            <h2 style={{background:'yellow'}}>Таны Захиалга</h2>
             <Grid item container md={12} sm={12}>
                {userOrders.length === 0 ? <h1>Та захиалга өгөөгүй байна</h1> : userOrders.map((el, i) => {
                    return (
                        <Grid item>
                            Hello
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
        // <div style={{display:userWantedtoSeeCart===true?"block":"none"}} >
        //     <div>
        //         <h2>Таны Захиалга</h2>
        //         <button  onClick={()=>setUserWantedtoSeeCart(false)}><AiOutlineClose/></button>
        //     </div>
        //     <div >
        //         {userOrders.length===0?<h1>Таньд одоогоор захиалга байхгүй байна</h1>:userOrders.map(order=>{
        //             return(
        //                 <div  id={order.uid}>
        //                     <img alt="" src={order.userOrderedMovieImg}/>
        //                     <div>{`Киноны нэр:${order.userOrderedMovie}`}</div>
        //                     <span >
        //                         Суудалын дугаар
        //                         {order.Seat.map(el=><p>{el}</p>)}
        //                     </span>
        //                      <button
        //                      onClick={async()=>{
        //                          console.log('daragdlaa')
        //                       const orderData= getDocFromFirebase(`users/${userUid}/myOrders/${order.uid}`);
        //                       orderData.then(async(order)=>{
        //                       MoviesDatas.map(movieData=>{
        //                         if(movieData.MovieName===order.userOrderedMovie){
        //                             order.Seat.map(async(sth)=>{
        //                                let data=movieData;
        //                                if(data.seat[sth].isOrdered===true&&data.seat[sth].isOrdering===true){
        //                                 data.seat[sth].isOrdered=false;
        //                                 data.seat[sth].isOrdering=false;

        //                                 data.possibleSeatsAllNumber=data.possibleSeatsAllNumber+1
        //                                 await setDocToFirebase(`movies/${data.MovieName}`,data);
        //                                 deleteOrder(order.uid)
        //                                 }
                                    
        //                             });

        //                         }
        //                       })
        //                       })
        //                      }}>Захиалга Устгах</button>
        //                 </div>
        //             )
        //         })}
        //     </div> 
        // </div>
    
    )
}
