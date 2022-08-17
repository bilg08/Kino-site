import React from "react";
import css from "./style.module.css";
import { MenuItem } from "../menuItems/app";

export const Menu = () => {
    return(
        <ul className={css.Menu}>
            <MenuItem>Миний захиалга</MenuItem>
            <MenuItem>Нэвтрэх</MenuItem>
        </ul>
    )
}