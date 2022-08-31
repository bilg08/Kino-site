import React, { useContext } from "react";
import css from "./userOrders.module.css";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseForThisApp/firebase";
import { useGetDocsFromFireBase } from "../firebaseForThisApp/getDocs";

export const UserOrders = () => {
    const { userUid } = useContext(WhetherUserLoggedOrNotContext);
    const {userWantedtoSeeCart}=useContext(MovieOrderingContext);
    
    const userOrders=useGetDocsFromFireBase(`users/${userUid}/myOrders`)
    return (
        <div style={{display:userWantedtoSeeCart===true?"block":"none"}} className={css.userOrder}>
          <ul>
          {userOrders===""?null:userOrders.map(el=>{
            el.map(el2=>{
                console.log(el2,'el2')
                return(
                    <p>{el2.Name}</p>
                )
            })
        })}
          </ul>
        </div>
    )
}