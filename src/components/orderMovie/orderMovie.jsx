import React, { useContext } from "react";
import css from "./orderMovie.module.css";
import { MoviesContext } from "../mainContent/mainContent";
import { FormMovie } from "../FormMovie/FormMovie";
import { KinoniiSuudal } from "../KinoniiSuudal/kinoniiSuudal";
import { Link } from "react-router-dom";
export const OrderMovie = () => {
    const {userWantToWatch} = useContext(MoviesContext);
    console.log("OrderMovie",userWantToWatch)
    return(
        <div style={{
            transform:userWantToWatch===true?"translateY(0)":"translateY(-100vh)",
            opacity:userWantToWatch?"1":"0",  
            }} className={css.OrderMovie}>
            <FormMovie/>
             <KinoniiSuudal/>

            <Link to="/">
             <button>X</button>
            </Link>
        </div>
    )
}