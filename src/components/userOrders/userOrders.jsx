import React, { useContext } from "react";
import css from "./userOrders.module.css";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import {AiOutlineClose} from "react-icons/ai";
import { getDocFromFirebase } from "../../firebaseForThisApp/getDoc";
import { MoviesContext } from "../../contexts/MoviesContext";
import { setDocToFirebase } from "../../firebaseForThisApp/setDoc";
export const UserOrders = () => {
    const { userUid } = useContext(WhetherUserLoggedOrNotContext);
    const {MoviesDatas}=useContext(MoviesContext)
    const {userWantedtoSeeCart,setUserWantedtoSeeCart,deleteOrder,userOrders}=useContext(MovieOrderingContext);    
    return (
        <div style={{display:userWantedtoSeeCart===true?"block":"none"}} className={css.userOrdersContainer}>
            <div className={css.UserOrdersHeader}>
                <h2>Таны Захиалга</h2>
                <button className={css.exitCart} onClick={()=>setUserWantedtoSeeCart(false)}><AiOutlineClose/></button>
            </div>
            <div className={css.userOrders}>
                {userOrders.length===0?<h1>Таньд одоогоор захиалга байхгүй байна</h1>:userOrders.map(order=>{
                    return(
                        <div className={css.userOrder} id={order.uid}>
                            <img alt="" src={order.userOrderedMovieImg}/>
                            <div className={css.movieNameForCart}>{`Киноны нэр:${order.userOrderedMovie}`}</div>
                            <span className={css.cartSeats}>
                                Суудалын дугаар
                                {order.Seat.map(el=><p>{el}</p>)}
                            </span>
                             <button
                             className={css.deleteOrderBtn}
                             onClick={async()=>{
                              const orderData= getDocFromFirebase(`users/${userUid}/myOrders/${order.uid}`);
                              orderData.then(async(order)=>{
                              MoviesDatas.map(movieData=>{
                                if(movieData.MovieName===order.userOrderedMovie){
                                    order.Seat.map(async(sth)=>{
                                       let data=movieData;
                                       if(data.seat[sth].isOrdered===true&&data.seat[sth].isOrdering===true){
                                        data.seat[sth].isOrdered=false;
                                        data.seat[sth].isOrdering=false;
                                        data.possibleSeatsAllNumber=data.possibleSeatsAllNumber+1
                                        await setDocToFirebase(`movies/${data.MovieName}`,data);
                                        deleteOrder(order.uid)
                                        }
                                    
                                    });

                                }
                              })
                              
                               
                              })
                             }}>Захиалга Устгах</button>
                        </div>
                    )
                })}
            </div> 
        </div>
    
    )
}
