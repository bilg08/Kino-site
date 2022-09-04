import React, { useContext } from "react";
import css from "./userOrders.module.css";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { useGetDocsFromFireBase } from "../../firebaseForThisApp/getDocs";
import {AiOutlineClose} from "react-icons/ai" 

export const UserOrders = () => {
    const { userUid } = useContext(WhetherUserLoggedOrNotContext);
    const {userWantedtoSeeCart,setUserWantedtoSeeCart,deleteOrder}=useContext(MovieOrderingContext);
    const userOrders=useGetDocsFromFireBase(`users/${userUid}/myOrders`)
    return (
        
        <div style={{display:userWantedtoSeeCart===true?"block":"none"}} className={css.userOrdersContainer}>
            <div className={css.UserOrdersHeader}>
                <h2>Таны Захиалга</h2>
                <button className={css.exitCart} onClick={()=>setUserWantedtoSeeCart(false)}><AiOutlineClose/></button>
            </div>
            <div className={css.userOrders}>
                {userOrders[0].length===0?<h1>Таньд одоогоор захиалга байхгүй байна</h1>:userOrders[0].map(order=>{
                    return(
                        <div className={css.userOrder} id={order.uid}>
                            <img src={order.userOrderedMovieImg}/>
                            <div className={css.movieNameForCart}>{`Киноны нэр:${order.userOrderedMovie}`}</div>
                            <span className={css.cartSeats}>
                                Суудалын дугаар
                                {order.Seat.map(el=><p>{el}</p>)}
                            </span>
                             <button onClick={()=>deleteOrder(order.uid)}>Захиалга Устгах</button>
                        </div>
                    )
                })}
            </div> 
        </div>
    
    )
}
