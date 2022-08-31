import React,{useContext}from "react";
import css from "./mainSite.module.css";
import { Movies } from "../movies/movies";
import { UserRegisteration } from "../userRegisteration/userRegisteration";

export const MainSite = () => {
    return (
        <main className={css.MainContent}>
            <div className={css.MainContentMain}>
                {/* <UserRegisteration/> */}
               <Movies/>
            </div>
        </main>
    )
}

