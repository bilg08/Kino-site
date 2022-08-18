import React, { useContext, useState } from "react";
import css from "./orderMovie.module.css";
import { MoviesContext } from "../mainContent/mainContent";
import { FormMovie } from "../FormMovie/FormMovie";
import { KinoniiSuudal } from "../KinoniiSuudal/kinoniiSuudal";
import { Link } from "react-router-dom";
export const OrderMovie = () => {
    const { userWantToWatch, setUserWantToWatch } = useContext(MoviesContext);
    const [orders, setOrders] = useState("");
    console.log("ORderMovie",userWantToWatch)

    const takeUserOrder = (e) => {
        setOrders({ ...orders, [e.target.name]: e.target.value });
        if (e.target.name === "email") {
            if (e.target.value.includes("@yahoo.com") || e.target.value.includes("@gmail.com")) {
                e.target.parentElement.style.background = "transparent"
            } else {
                e.target.parentElement.style.background = "red"
            }
        }
        if (e.target.name === "phoneNumber") {
            let phoneNumber = e.target.value;
            for (let i = 0; i < phoneNumber.length; i++) {
                if (phoneNumber[i].charCodeAt() >= 48 && phoneNumber[i].charCodeAt() < 57) {
                    e.target.parentElement.style.background = "transparent"
                } else {
                    e.target.parentElement.style.background = "red"
                }
            }

        }

    }


    return (
        <div style={{
        }} className={userWantToWatch ? css.OrderMovieafter : css.OrderMoviebefore}>
            <FormMovie takeUserOrder={takeUserOrder} />

            <button onClick={() => setUserWantToWatch(false)}>X</button>

        </div>
    )
}