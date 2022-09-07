import React from "react";

export const MovieImageCart = (props) => {
    const {imageSrc} = props;
    return(
        <img style={{width:100+'%',heigth:100+'%'}}  src={imageSrc}/>
    )
}