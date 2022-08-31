import React, { useContext } from "react";
import css from "./userOrders.module.css";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";

export const UserOrders=()=>{
    const {userUid}=useContext(WhetherUserLoggedOrNotContext);
    return(
        <div className={css.UserOrders}>
            <div className={css.userOrder}>

            </div>
        </div>
    )
}