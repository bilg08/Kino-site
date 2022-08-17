import React from "react";
import css from "./orderMovieTime.module.css";
import {Routes,Route,Link} from "react-router-dom";
import { Shadow } from "../Shadow/shadow";

export const OrderMovieTime = (props) => {

    const {zahialgiinMedeelel,TicketPrices,isAnyMovieGoingToBeWatched,takeUserInput,setTsagaaSongoson,tsagaaSongoh,takeOrder,tsagaaSongoson} = props;
console.log(zahialgiinMedeelel)
    
    return(
        
        <div style={{
            transform:isAnyMovieGoingToBeWatched===true?"translateY(0)":"translateY(-100vh)",
            opacity:isAnyMovieGoingToBeWatched?"1":"0"   
            }} className={css.OrderMovie}>

            <div 
                style={{
                    transform:tsagaaSongoson===true?"translateY(0)":"translateY(-100vh)"

                }} className={css.SuudalZahialga}> 

             <div>
                <p>Нэр:{zahialgiinMedeelel.ner}</p>
                <p>Нэр:{zahialgiinMedeelel.email}</p>
                <p>НийтҮнэ:{zahialgiinMedeelel.niitmongondun}Төг</p>
                <p>Нийт Хүн:{zahialgiinMedeelel.niithun}</p>
                <p>Утасны дугаар:{zahialgiinMedeelel.utasniiDugaar}</p>
             </div>
             <div>
                
             </div>

             
             </div>

            <div className={css.KinoniiZahialga}>
            <label>Захиалгын хэсэг</label>
                <label>Нэр</label>
                <input onChange={takeUserInput} name="ner" type="ner" />
                <label>Утас</label>
                <input onChange={takeUserInput} name="utasniiDugaar" type="utas" />
                <label>ИМайл</label>
                <input onChange={takeUserInput} name="email" type="email" />
                <label>Том хүн 1000Төгрөг</label>
                <input onChange={takeUserInput}  name="tomhun" />
                <label>Хүүхэд 500төгрөг</label>
                <input onChange={takeUserInput}  name="huuhed" />
                <p>НийтҮнэ:</p>

                <label>Цагаа сонгоно уу</label>
                <button onClick={(e) => tsagaaSongoh(e)} name="Үзэх Цаг">11:10</button>
                <button onClick={(e) => tsagaaSongoh(e)} name="Үзэх Цаг">12:10</button>
                <button onClick={(e) => tsagaaSongoh(e)} name="Үзэх Цаг">14:10</button>
                <button onClick={()=>{
                    takeOrder();
                    setTsagaaSongoson(true)
                }
                    
                }>Үргэлжлүүлэх</button>
                
                
            </div>
        </div>
            
    )
}