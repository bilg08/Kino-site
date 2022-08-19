import React from "react";
import css from "./orderMovie.module.css"
export const OrderMovie = (props) => {
    const {movieseat} = props;
    console.log(movieseat,"kkk")
    return(
        <div className={css.OrderMovie}>
            <h1>Захиалга</h1>
            <div className={css.userName}>
                <p>Нэр</p>
                <input/>
            </div>
            <div className={css.userName}>
                <p>Имайл</p>
                <input/>
            </div>
            <div className={css.chooseAdultQuantity}>
                <p>Том Хүн</p>
                <div>
                    <button>+</button>
                    <p>0</p>
                    <button>-</button>
                </div>
            </div>
            <div className={css.chooseKidQuantity}>
                <p>Хүүхэд</p>
                <div>
                    <button>+</button>
                    <p>0</p>
                    <button>-</button>
                </div>
            </div>
        </div>
    )
}