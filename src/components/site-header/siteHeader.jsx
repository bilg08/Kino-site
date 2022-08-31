import React, { useContext } from "react";
import css from "./siteHeader.module.css";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { Link } from "react-router-dom";
export const Header =()=>{
  const {isUserLogged}=useContext(WhetherUserLoggedOrNotContext)
  const {setUserWantedtoSeeCart}=useContext(MovieOrderingContext)
    return(
        <header className={css.siteHeader}>
          <div className={css.siteHeaderMain}>
            <div className={css.headerLogo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/>
            </div>
            <ul className={css.headerMenuItem}>
                <li>Үндсэн</li>
                <li onClick={()=>setUserWantedtoSeeCart(true)} style={{display:isUserLogged===false?'none':'block'}}>Сагс</li>
                 <Link to='/login'>
                 <li style={{display:isUserLogged===false?'block':'none'}}>Нэвтрэх</li>
                 </Link>
            </ul>
          </div>
        </header>
    )
}