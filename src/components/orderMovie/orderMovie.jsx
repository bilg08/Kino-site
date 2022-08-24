import React, { useContext } from "react";
import css from "./orderMovie.module.css";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { MoviesContext } from "../../contexts/MoviesContext";
import { BsFillArrowLeftCircleFill, BsCart3 } from "react-icons/bs";
///////////////////////////////////////////////firebase/////////////////////////////////////////////////
// import { initializeApp } from "firebase/app";
// import {getDocs,getDoc,setDoc,doc,collection,getFirestore,addDoc} from "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyB3d_wMRiKnFQJeuqQP-3wvPeEegp84MwE",
//     authDomain: "zbilguun-moviesite.firebaseapp.com",
//     projectId: "zbilguun-moviesite",
//     storageBucket: "zbilguun-moviesite.appspot.com",
//     messagingSenderId: "805291568664",
//     appId: "1:805291568664:web:4e3ae223c699f49783dd6d",
//     measurementId: "G-47DY21SGX5"
// };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const OrderMovie = (props) => {
    const { userWantedMovie } = props;
    const { setUserWantedMovie } = useContext(MoviesContext);
    const userWantedMovieSeats = userWantedMovie.seat;
    const { takeUserInput, userWantedToOrder, setUserWantedToOrder,
        takeOrder, setUserWantedToOrderSeat, userWantedToOrderSeat,
        canUserContinueOrderSeat,form,checkUserInputFullOrNot
    } = useContext(MovieOrderingContext);
    
   
    
    const checkSeat = (e) => {
    const kidQuantity=parseInt(form.Kid);
    const AdultQuantity=parseInt(form.Adult);
    const seatsQuantity=parseInt(form.seats.length);
   
        const thisClickedSeatId = parseInt(e.target.innerText);
        if (userWantedMovieSeats[thisClickedSeatId].isOrdered === false) {
            if (userWantedMovieSeats[thisClickedSeatId].isOrdering === false) {
                e.target.style.background = "green";
                userWantedMovieSeats[thisClickedSeatId].isOrdering = true;
            } else {
                e.target.style.background = "blue";
                userWantedMovieSeats[thisClickedSeatId].isOrdering = false;
            }



        } else if (userWantedMovieSeats[thisClickedSeatId].isOrdered === true) {
            userWantedMovieSeats[thisClickedSeatId].isOrdered = false;
            e.target.style.background = "blue";
        }
        else if(''){

        }
       console.log({kid:kidQuantity},{adult:AdultQuantity},{seat:seatsQuantity})
       
    }




    return (
        <div style={{
            transform: userWantedToOrder === true ? "translateY(0)" : "translateY(-100vh)",
            opacity: userWantedToOrder === true ? "1" : "0"
        }} className={css.OrderMovie}>

            <div className={css.form}>
                <button className={css.backToMovieBtn} onClick={() => {
                    setUserWantedMovie(false)
                    setUserWantedToOrderSeat(false)
                }}><BsFillArrowLeftCircleFill /></button>
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
                    
                    onClick={() => {
                        // setUserWantedToOrderSeat(true);
                        checkUserInputFullOrNot()
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

                {userWantedMovieSeats === undefined ? "" : userWantedMovieSeats.map((seat, index) => {
                    return (
                        <button name="Seat" key={index} style={{
                            background: seat.isOrdered === true ? "red" : "blue"
                        }}
                            disabled={seat.isOrdered === true ? true : false}
                            onClick={(e) => {
                                checkSeat(e)
                                takeUserInput(e, seat, userWantedMovieSeats)
                            }} className={css.seat}>
                            {index}
                        </button>
                    )
                })}
                <button
                    onClick={() => {
                        takeOrder(userWantedMovieSeats);
                        setUserWantedMovie(false);
                        setUserWantedToOrder(false);
                        setUserWantedToOrderSeat(false)
                    }}>
                    <BsCart3 />
                </button>
            </div>

        </div>
    )
}