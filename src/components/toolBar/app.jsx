import React from "react";
import css from "./style.module.css";
import { Logo } from "../logo/app";
import { HamburgerMenu } from "../hamburgerMenu/app";
import { Menu } from "../menu/app";

export const ToolBar = () => {
    return(
        <header className={css.Toolbar}>
            <HamburgerMenu/>
            <Logo/>
            <Menu/>
        </header>
    )
}