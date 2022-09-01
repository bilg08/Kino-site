import React, { useContext } from "react";
import css from "./userOrders.module.css";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { useGetDocsFromFireBase } from "../../components/firebaseForThisApp/getDocs";

export const UserOrders = () => {
    const { userUid } = useContext(WhetherUserLoggedOrNotContext);
    const {userWantedtoSeeCart}=useContext(MovieOrderingContext);
    const userOrders=useGetDocsFromFireBase(`users/${userUid}/myOrders`)
    return (
        
        <div style={{display:userWantedtoSeeCart===true?"block":"none"}} className={css.userOrders}>
            <div className={css.UserOrdersHeader}><h2>Таны Захиалга</h2></div>
           {userOrders[0].map(order=>{
               return(
                   <div className={css.userOrder}>
                      <img src={order.userOrderedMovieImg}/>
                      <p>{`Киноны нэр:${order.userOrderedMovie}`}</p>
                      <ul>
                          Киноны суудал
                          {order.Seat.map(seat=><li>{`${seat},`}</li>)}
                      </ul>
                   </div>
               )
           })}
        </div>
    
    )
}
