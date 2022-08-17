import React from "react";
import css from "./style.module.css"
export const SearchMovies = (props) => {
   

    return (
        <input
            placeholder="Кино хайх"

            className={css.SearchMoviesInput}
        />
    )
}