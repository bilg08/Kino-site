import React,{useContext}from "react";
import css from "./mainSite.module.css";
import { Movies } from "../movies/movies";

export const MainSite = () => {
    return (
        <main className={css.MainContent}>
            <div className={css.MainContentMain}>
               <Movies/>
            </div>
        </main>
    )
}

