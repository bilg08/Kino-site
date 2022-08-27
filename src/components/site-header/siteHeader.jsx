import React from "react";
import css from "./siteHeader.module.css";
export const Header =()=>{
    return(
        <header className={css.siteHeader}>
          <div className={css.siteHeaderMain}>
            <div className={css.headerLogo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/>
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