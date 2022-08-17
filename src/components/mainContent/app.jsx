import React, { useState } from "react";
import { SearchMovies } from "../searchMovies/app";
import { Movies } from "../movies/app";
import css from "./style.module.css";
import {data} from "../asset/movies";
import { MovieMoreAbout } from "../movieMoreAbout/app";


export const MainContent = () => {
    let [movies, setMovies] = useState(data);
    let [movieUserWanted,setMovieUserWanted] = useState("");
    let [order,setOrder] = useState("");
    let [userInputs, setUserInputs] = useState("");
    let [suudalIluuBainauu,SetSuudalIluuBainauu] = useState();
    let [suudluud,setSuudluud] = useState("");
    let [tomHun,setTomhun] = useState(0);
    let [Huuhed,setHuuhed] = useState(0);
    let [niitHun,setNiitHun] = useState(0)
   

    const tsagaaSongoh = (e) => {
        setUserInputs({ ...userInputs, [e.target.name]: e.target.innerText });
    }
    
    const takeUserInput = (e) => {
        setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
        if(e.target.name === "Том Хүн") {
            console.log(tomHun)
            setTomhun(parseInt(e.target.value));
            setNiitHun(prevVal=>prevVal+parseInt(e.target.value))
            console.log(niitHun)
        }else if(e.target.name === "Хүүхэд") {
            setHuuhed(parseInt(e.target.value))
            setNiitHun(prevVal=>prevVal+parseInt(e.target.value))
        }
        
    }
    console.log("tom",tomHun,"huuhed",Huuhed,"niithun",niitHun)

    const TakeOrder = () => {
        console.log(userInputs);
    }




    return (
        <main className={css.MainContent}>
            <SearchMovies  />
            <Movies moviesDatas={data} setMovieUserWanted={setMovieUserWanted}/>
            <MovieMoreAbout movieUserWanted={movieUserWanted} setOrder={setOrder} zahialgaAvahFuntions={{tsagaaSongoh,takeUserInput,TakeOrder}}/>
        </main>
    )
}