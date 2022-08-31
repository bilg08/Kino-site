import React from "react";
import css from "./homePage.module.css"
import { Header } from "../../components/site-header/siteHeader";
import { Movies } from "../../components/movies/movies";
import { MovieDetail } from "../MovieDetail/movieDetail";
import { UserOrders } from "../../components/userOrders/userOrders";
export const HomePage=()=>{
    return(
        <div className={css.HomePage}>
            <Header/> 
            <div className={css.HomePageMain}>
                <Movies/>
                <UserOrders/>
            </div>
        </div>
    )
}