import React from "react";
import css from "./siteHeader.module.css";
import logoImage from "../../asset/urguuLogo.png";
export const Header =()=>{
    return(
        <header className={css.siteHeader}>
          <div className={css.siteHeaderMain}>
            <div className={css.headerLogo}>
                <img src={logoImage}/>
            </div>
            <ul className={css.headerMenuItem}>
                <li>Үндсэн</li>
                <li>Сагс</li>
                <li>Бүртгүүлэх</li>
                <li>Нэвтрэх</li>
            </ul>
          </div>
        </header>
    )
}