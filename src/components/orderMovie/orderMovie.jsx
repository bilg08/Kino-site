import React, { useContext,useEffect } from "react";
import css from "./orderMovie.module.css";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/MoviesContext";

export const OrderMovie = (props) => {
    const { userWantedMovie } = props;
    const {setUserWantedMovie}=useContext(MoviesContext);
   const  {userOrder}=useContext(MovieOrderingContext)
    const userWantedMovieSeats = userWantedMovie.seat;

    const {takeUserInput,userWantedToOrder,
           setUserOrder,takeOrder,
           userWantedToOrderSeat,setUserWantedToOrderSeat
           } = useContext(MovieOrderingContext);
    const userOrderedSeat=[];
    
    const checkSeat = (e) => {
      userOrderedSeat.push(parseInt(e.target.innerText));
      console.log(userOrderedSeat);
    
        const thisClickedSeatId = parseInt(e.target.innerText);
        if (userWantedMovieSeats[thisClickedSeatId].isOrdered === false) {
            userWantedMovieSeats[thisClickedSeatId].isOrdered = true;
            e.target.style.background="green"
        } else if (userWantedMovieSeats[thisClickedSeatId].isOrdered === true) {
            userWantedMovieSeats[thisClickedSeatId].isOrdered = false;
            console.log(userWantedMovieSeats);
            e.target.style.background="blue"
        }
    }
    
    const checkInputWhetherEmptyOrNot = ()=> {
        // if(((
        //     document.getElementById("emailInput").value===""
        //     ||document.getElementById("userNameInput").value===""
        //     ||document.getElementById("phoneNumberInput").value===""
        //     )&&
        //     ((document.getElementById("Adult").value==="")||(document.getElementById("Kids").value==="")))
            
        //     )
        // { 
        //     return true
        // }else{
        //     return false
        // }
    }
    
    
    return (
        <div style={{
            transform: userWantedToOrder === true ? "translateY(0)" : "translateY(-100vh)",
            opacity: userWantedToOrder === true ? "1" : "0"
        }} className={css.OrderMovie}>
            <div className={css.form}>
                <h1>Захиалга</h1>
                <div className={css.userName}>
                    <p>Нэр</p>
                    <input id="userNameInput" onChange={(e) => takeUserInput(e)} name="Name" />
                </div>
                <div className={css.email}>
                    <p>Имайл</p>
                    <input id="emailInput"  onChange={(e) => takeUserInput(e)} name="Email" />
                </div>
                <div className={css.userName}>
                    <p>Утасны дугаар</p>
                    <input id="phoneNumberInput" onChange={(e) => takeUserInput(e)} name="PhoneNumber" />
                </div>
                <div className={css.chooseAdultQuantity}>
                    <p>Том Хүн</p>
                    <input id="Adult" onChange={(e) => takeUserInput(e)} name="Adult" />
                </div>
                <div className={css.chooseKidQuantity}>
                    <p>Хүүхэд</p>
                    <input id="Kids" onChange={(e) => takeUserInput(e)} name="Kid" />
                </div>
            </div>
           
            <div
            style={{
                transform:userWantedToOrderSeat===true?"translateY(0)":"translateY(-100vh)",
                transition:0.3+"s",
                
            }}
            className={css.seats}>
                <div className={css.aboutSeats}>
                    <div className={css.aboutRedSeat}>Захиалгатай</div>
                    <div className={css.aboutBlueSeat}>Захиалгагүй</div>
                    <div className={css.aboutGreenSeat}>Таны сонгосон</div>
                </div>

                {userWantedMovieSeats===undefined?console.log("bolohgui"):userWantedMovieSeats.map((seat, index) => {
                    return (
                        <button name="Seat" key={index} style={{
                            background: seat.isOrdered === true ? "red" : "blue"
                        }}
                            disabled={seat.isOrdered === true ? true : false}
                            onClick={checkSeat} className={css.seat}>
                            {index}
                        </button>
                    )
                })}
                
            </div>
            <button
                   onClick={()=>{
                    const userOrderedMovie=userWantedMovie.MovieName
                   const userName =document.getElementById("userNameInput").value;
                   const email =document.getElementById("emailInput").value;
                   const phoneNumber =document.getElementById("phoneNumberInput").value;
                   const Adult =document.getElementById("Adult").value;
                   const Kids =document.getElementById("Kids").value;
                  
                    takeOrder(userOrderedMovie,userName,email,phoneNumber,Adult,Kids,userOrderedSeat);
                    setUserWantedMovie(false)
                }}>
                Захиалах
            </button>
        </div>
    )
}