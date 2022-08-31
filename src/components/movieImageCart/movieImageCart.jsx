import React from "react";

export const MovieImageCart = (props) => {
    const {imageSrc} = props;
    return(
        <img src={imageSrc}/>
    )
}