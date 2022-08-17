import React from  "react";
import css from "./style.module.css"
import logoImage from "../asset/urguuLogo.png"
export const Logo = () => {
    return(
        <div className={css.Logo}>
            <img src={logoImage}/>
        </div>

    )
}