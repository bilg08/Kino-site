import React, { useContext } from "react";
import css from "./siteHeader.module.css";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseForThisApp/firebase";
export const Header =()=>{
  const {isUserLogged,signOutFromWebSite,userUid}=useContext(WhetherUserLoggedOrNotContext);
  const {setUserWantedtoSeeCart,setUserOrders,userWantedToLogin,setUserWantedToLogin}=useContext(MovieOrderingContext);
    return(
        <header className={css.siteHeader}>
          <div className={css.siteHeaderMain}>
            <div className={css.headerLogo}>
                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/>
            </div>
            <ul className={css.headerMenuItem}>
                <Link to='/' style={{textDecoration:'none'}}>
                <li>Үндсэн</li>
                </Link>
                <li onClick={async()=>{
                  setUserWantedtoSeeCart(true);
                 try {
                  const orders= await getDocs(collection(db,`users/${userUid}/myOrders`));
                  setUserOrders(prevVal=>prevVal=[])
                  orders.forEach(order=>{
                    setUserOrders(prevVal=>{
                      let prevValACopy=prevVal;
                      prevValACopy=[...prevValACopy,order.data()];
                      return prevVal=prevValACopy;
                    })
                  })
                 } catch (error) {
                 }
                }} style={{display:isUserLogged===false?'none':'block'}}>Сагс</li>
                <li onClick={()=>setUserWantedToLogin(true)} style={{display:isUserLogged===false?'block':'none'}}>Нэвтрэх</li>
                <Link to='/'>
                <li onClick={signOutFromWebSite} style={{display:isUserLogged===true?'block':'none'}}>Гарах</li>
                </Link>
            </ul>
          </div>
        </header>
    )
}


