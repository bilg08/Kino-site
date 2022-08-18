import React from "react";
import css from "./FormMovie.module.css";
export const FormMovie = () => {
    return (
        <div className={css.FormMovieContainer}>
            <div className={css.FormMovie}>
                <p>Захиалга</p>

                <div className={css.formName}>
                    Нэр:<input type="text" className={css.nerInput} />
                </div>


                <div className={css.tomhun}>
                    <p>Том Хүн:</p>
                    <button>-</button>
                    <p>0</p>
                    <button>+</button>
                </div>

                <div className={css.huuhed}>
                    <p>Хүүхэд:</p>
                    <button>-</button>
                    <p>0</p>
                    <button>+</button>
                </div>


                <button className={css.Zahialah}>Захиалах</button>
            </div>
        </div>
    )
}