import React, { useContext } from "react";
import css from "./kinoniiSuudal.module.css";
import { MoviesContext } from "../mainContent/mainContent";
export const KinoniiSuudal = () => {
    const {movieUserWanted,setMovies,movies} = useContext(MoviesContext);
    const TuhainKinoniiSuudaluud = movieUserWanted.suudaluud;
    const TuhainKinoniiId = movieUserWanted.id;
    // prevVal[TuhainKinoniiId].suudaluud[parseInt(e.target.innerText)].hunZahialsan=true
  const suudalZahialla = (e) => {
      setMovies((prevVal) => {
          let prevValACopy = [...prevVal];
          prevValACopy[TuhainKinoniiId].suudaluud[parseInt(e.target.innerText)].hunZahialsan=true;
          return(
            prevVal=prevValACopy
          )
      })
      
      

  }
    return(
        <div className={css.KinoniiSuudal}>
            {TuhainKinoniiSuudaluud.map((suudal,index) => {
                console.log(suudal.hunZahialsan,"suudal")
                return(
                    <button disabled={suudal.hunZahialsan}  key={index} onClick={suudalZahialla}id={index}>{index}</button>
                )
            })}
        </div>
    )
}