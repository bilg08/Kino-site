import React, { useContext, useEffect, useState } from "react";
import css from "./orderMovie.module.css";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/MoviesContext";

export const OrderMovie = (props) => {
    const { userWantedMovie } = props;
    const { setUserWantedMovie } = useContext(MoviesContext);
    const userWantedMovieSeats = userWantedMovie.seat;
    const { takeUserInput, userWantedToOrder, setUserWantedToOrder,
            takeOrder, setUserWantedToOrderSeat, userWantedToOrderSeat,
            checkInputWhetherFullOrNot
            
    } = useContext(MovieOrderingContext);
    const userOrderedSeat = [];

    const checkSeat = (e) => {
        const TotalPerson = parseInt(document.getElementById("Adult").value) + parseInt(document.getElementById("Kids").value);


        const thisClickedSeatId = parseInt(e.target.innerText);
        if (userWantedMovieSeats[thisClickedSeatId].isOrdered === false) {
            userWantedMovieSeats[thisClickedSeatId].isOrdered = true;
            userOrderedSeat.push(parseInt(e.target.innerText));
            e.target.style.background = "green";
            if (TotalPerson < userOrderedSeat.length) {
                userWantedMovieSeats[userOrderedSeat.length - 1].isOrdered = false;
                e.target.style.background = "blue";
                userOrderedSeat.splice(userOrderedSeat.indexOf(userOrderedSeat[userOrderedSeat.length - 1]), 1);
            }


        } else if (userWantedMovieSeats[thisClickedSeatId].isOrdered === true) {
            userWantedMovieSeats[thisClickedSeatId].isOrdered = false;
            e.target.style.background = "blue";
            userOrderedSeat.splice(userOrderedSeat.indexOf(parseInt(e.target.innerText)), 1);
        }
    }




    return (
        <div style={{
            transform: userWantedToOrder === true ? "translateY(0)" : "translateY(-100vh)",
            opacity: userWantedToOrder === true ? "1" : "0"
        }} className={css.OrderMovie}>

            <div className={css.form}>
                <button onClick={() => {
                    setUserWantedMovie(false)
                    setUserWantedToOrderSeat(false)
                }}>Болих</button>
                <h1>Захиалга</h1>
                <div className={css.userName}>
                    <p>Нэр</p>
                    <input id="userNameInput" onChange={(e) => { takeUserInput(e) }} name="Name" />
                </div>
                <div className={css.email}>
                    <p>Имайл</p>
                    <input id="emailInput" onChange={(e) => takeUserInput(e)} name="Email" />
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
                <button 
                disabled={checkInputWhetherFullOrNot===true?true:false}
                onClick={() => {
                    setUserWantedToOrderSeat(true);
                }}>Суудал Захиалах</button>
            </div>

            <div
                style={{
                    transform: userWantedToOrderSeat === true ? "translateY(0)" : "translateY(-100vh)",
                    transition: 0.3 + "s",

                }}
                className={css.seats}>
                <div className={css.aboutSeats}>
                    <div className={css.aboutRedSeat}>Захиалгатай</div>
                    <div className={css.aboutBlueSeat}>Захиалгагүй</div>
                    <div className={css.aboutGreenSeat}>Таны сонгосон</div>
                </div>

                {userWantedMovieSeats === undefined ? console.log("bolohgui") : userWantedMovieSeats.map((seat, index) => {
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
                onClick={() => {
                    // const userOrderedMovie = userWantedMovie.MovieName;
                    // const userName = document.getElementById("userNameInput").value;
                    // const email = document.getElementById("emailInput").value;
                    // const phoneNumber = document.getElementById("phoneNumberInput").value;
                    // const Adult = parseInt(document.getElementById("Adult").value);
                    // const Kids = parseInt(document.getElementById("Kids").value);
                    // userOrderedMovie, userName, email, phoneNumber, Adult, Kids, 
                    takeOrder(userOrderedSeat);
                    setUserWantedMovie(false);
                    setUserWantedToOrder(false);
                    setUserWantedToOrderSeat(false)
                }}>
                Захиалах
            </button>
        </div>
    )
}