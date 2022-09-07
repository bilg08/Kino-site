import React from "react";
import css from "./homePage.module.css"
import { Header } from "../../components/site-header/siteHeader";
import { Movies } from "../../components/movies/movies";
import { UserOrders } from "../../components/userOrders/userOrders";
import { ShowMoviesInSlide } from "../../components/showMoviesInSlide/showMoviesInSlide";
import { UserRegisteration } from "../../components/Login/userRegisteration";
export const HomePage=()=>{
    return(
        <div className={css.HomePage}>
            <Header/> 
            <div className={css.HomePageMain}>
                <ShowMoviesInSlide/>
                <Movies/>
                <UserOrders/>
                <UserRegisteration/>
            </div>
        </div>
    )
}