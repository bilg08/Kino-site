import React from "react";
import css from "./style.module.css";

export const MenuItem = (props) => {
    return(
        <li className={css.MenuItem}>
           <a href="/">{props.children}</a>
        </li>
    )
}