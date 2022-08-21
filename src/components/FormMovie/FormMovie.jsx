import React, { Component, useContext, useState } from "react";
import css from "./FormMovie.module.css";
import { MoviesContext } from "../mainContent/mainContent";
export const FormMovie = (props) => {

    const {takeUserOrder} = props;
    let [tomHunOrder,setTomHunOrder] = useState(0);
    let [huuhedOrder,setHuuhedOrder] = useState(0);
console.log(tomHunOrder,huuhedOrder)
   const incrementTomHun = (e) => {
        setTomHunOrder(tomHunOrder+1);
   }
   const decrementTomHun = (e) => {
        setTomHunOrder(tomHunOrder-1);
        if(tomHunOrder<=0){
            setTomHunOrder(0)
        }
   }
   const incrementHuuhed = (e) => {
        setHuuhedOrder(huuhedOrder+1);    
   }
   const decrementHuuhed = (e) => {
        setHuuhedOrder(huuhedOrder-1);
        if(huuhedOrder<=0){
            setHuuhedOrder(0)
        }
   }
   if(huuhedOrder===0&&tomHunOrder===0) {
    const tomhun = Array.from(document.getElementsByClassName(css.tomhun))[0].getAttribute("class");
    const huuhed = Array.from(document.getElementsByClassName(css.huuhed))[0].getAttribute("class");
    let continueOrder = Array.from(document.getElementsByClassName(css.continueOrder))[0];

    continueOrder.disabled=true
    document.getElementsByClassName(tomhun)[0].style.background="red";
    document.getElementsByClassName(huuhed)[0].style.background="red";
    
   }else{
    const tomhun = Array.from(document.getElementsByClassName(css.tomhun))[0].getAttribute("class");
    const huuhed = Array.from(document.getElementsByClassName(css.huuhed))[0].getAttribute("class");
    let continueOrder = Array.from(document.getElementsByClassName(css.continueOrder))[0];
    

    continueOrder.disabled=false
    document.getElementsByClassName(tomhun)[0].style.background="transparent";
    document.getElementsByClassName(huuhed)[0].style.background="transparent";
   }
   
    return (
        <div className={css.FormMovieContainer}>
            <div className={css.FormMovie}>
                <h1>Захиалга</h1>
                <div className={css.formName}>
                    Нэр:<input onChange={takeUserOrder}  name="ner" type="text" />
                </div>
                <div className={css.email}>
                    Имайл:<input onChange={takeUserOrder}  name="email" type="email"/>
                </div>
                <div className={css.phoneNumber}>
                    Утасны дугаар:<input onChange={takeUserOrder}  name="phoneNumber" type="text" />
                </div>
                <div className={css.tomhun}>
                    <p>Том Хүн:</p>
                    <button name="TomHun" onClick={decrementTomHun}>-</button>
                    <p>{tomHunOrder}</p>
                    <button name="Tomhun" onClick={incrementTomHun}>+</button>
                </div>
                <div className={css.huuhed}>
                    <p>Хүүхэд:</p>
                    <button name="Huuhed" onClick={decrementHuuhed} >-</button>
                    <p>{huuhedOrder}</p>
                    <button name="Huuhed" onClick={incrementHuuhed} >+</button>
                </div>

                <button disabled={true} className={css.continueOrder}>Захиалах</button>
            </div>
        </div>
    )
}