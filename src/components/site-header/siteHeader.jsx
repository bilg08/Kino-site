import React, { useContext } from "react";
import css from "./siteHeader.module.css";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { Link } from "react-router-dom";
export const Header =()=>{
  const {isUserLogged,signOutFromWebSite}=useContext(WhetherUserLoggedOrNotContext);
  const {setUserWantedtoSeeCart}=useContext(MovieOrderingContext);
    return(
        <header className={css.siteHeader}>
          <div className={css.siteHeaderMain}>
            <div className={css.headerLogo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/>
            </div>
            <ul className={css.headerMenuItem}>
                <Link to='/' style={{textDecoration:'none'}}>
                <li>Үндсэн</li>
                </Link>
                <li onClick={()=>setUserWantedtoSeeCart(true)} style={{display:isUserLogged===false?'none':'block'}}>Сагс</li>
                <Link to='/login' style={{textDecoration:'none'}}>
                <li style={{display:isUserLogged===false?'block':'none'}}>Нэвтрэх</li>
                </Link>
                <Link to='/'>
                <li onClick={signOutFromWebSite} style={{display:isUserLogged===true?'block':'none'}}>Гарах</li>
                </Link>
            </ul>
          </div>
        </header>
    )
}