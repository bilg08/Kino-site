import React, { useContext } from "react";
import css from "./siteHeader.module.css";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
import { Link } from "react-router-dom";
export const Header =()=>{
  const {isUserLogged}=useContext(WhetherUserLoggedOrNotContext)
  console.log(isUserLogged)
    return(
        <header className={css.siteHeader}>
          <div className={css.siteHeaderMain}>
            <div className={css.headerLogo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/>
            </div>
            <ul className={css.headerMenuItem}>
                <li>Үндсэн</li>
                <Link to='userOrders'>
                  <li style={{display:isUserLogged===false?'none':'block'}}>Сагс</li>
                </Link>
                <li style={{display:isUserLogged===false?'block':'none'}}>Бүртгүүлэх</li>
                <li style={{display:isUserLogged===false?'block':'none'}}>Нэвтрэх</li>
            </ul>
          </div>
        </header>
    )
}