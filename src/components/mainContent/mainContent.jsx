import React, { useState } from "react";
import { Movies } from "../movies/movies";
import css from "./mainContent.module.css";
import {data} from "../asset/movies";
import {Routes,Route} from "react-router-dom";
import { MoreAboutUserWantedMovie } from "../MoreAboutUserWantedMovie/MoreAboutUserWantedMovie";
// import { OrderMovie } from "../orderMovieTime/orderMovie";

const TicketPrices = {"tomhun":1000,"huuhed":500}
export const MainContent = () => {
    let [movies, setMovies] = useState(data);
    let [movieUserWanted,setMovieUserWanted] = useState("");
    let [isAnyMovieGoingToBeWatched,setIsAnyMovieGoingToBeWatched] = useState(false);
    let [zahialga,setZahialga] = useState("");
    let [tsagaaSongoson,setTsagaaSongoson] = useState(false);
    
    const takeUserInput = (e) => {
       setZahialga({...zahialga,[e.target.name]:e.target.value});
       
    }
    const tsagaaSongoh = (e) => {
        setZahialga({...zahialga,[e.target.name]:e.target.innerText})
     }
    
    const takeOrder = () => {
        console.log(zahialga.tomhun*TicketPrices.tomhun+zahialga.huuhed*TicketPrices.huuhed)
        console.log(tsagaaSongoson);
        console.log(zahialga)
    }
    
    
    
    
    
   
    return (
        <main className={css.MainContent}>
            
            <Routes>
                <Route path="movies"  element={<Movies moviesDatas={data} setMovieUserWanted={setMovieUserWanted}/>}/>
                <Route path="/movieUserWanted" element={<MoreAboutUserWantedMovie takeOrder={takeOrder}   movieUserWanted={movieUserWanted} setIsAnyMovieGoingToBeWatched={setIsAnyMovieGoingToBeWatched} isAnyMovieGoingToBeWatched={isAnyMovieGoingToBeWatched} takeUserInput={takeUserInput} tsagaaSongoh={tsagaaSongoh} setTsagaaSongoson={setTsagaaSongoson} TicketPrices={TicketPrices} tsagaaSongoson={tsagaaSongoson} zahialgiinMedeelel={{"niithun":parseInt(zahialga.tomhun)+parseInt(zahialga.huuhed),"niitmongondun":parseInt(zahialga.tomhun*TicketPrices.tomhun+zahialga.huuhed*TicketPrices.huuhed),"ner":zahialga.ner,"email":zahialga.email,"utasniiDugaar":zahialga.utasniiDugaar}}/>}/>
            </Routes>
        </main>
    )
}