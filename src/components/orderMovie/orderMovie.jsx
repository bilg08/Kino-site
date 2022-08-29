import React, { useContext, useEffect, useState } from "react";
import css from "./orderMovie.module.css";
import { BsFillArrowLeftCircleFill, BsCart3 } from "react-icons/bs";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { MoviesContext } from "../../contexts/MoviesContext";
import { Link } from "react-router-dom";

export const OrderMovie=()=>{
    const { takeUserInput, 
            checkEmail,
            checkUserName,
            canUserResumeToPhoneNumber,
            canUserResumeToOrderChair,
            takeOrder,
            form,
            canUserResumeToAdultAndKidsForm,
            checkUserCount 
           } = useContext(MovieOrderingContext)
    const { userWantedMovie } = useContext(MoviesContext);
    const userWantedMovieSeats = userWantedMovie.seat;
    let [userChosenSeats, setUserChosenseats] = useState([])



    //suudal zahialah
    const checkSeat = (e) => {
        const seatId=parseInt(e.target.innerText)
        const possibleSeatToOrder=parseInt(form.Adult)+parseInt(form.Kids)
        //hervee niit hunii toonoos songoson suudliin too ihedeegui bol ene ajilna
        if(possibleSeatToOrder>userChosenSeats.length){
            //hervee darsan suudal zahialagdaagui bol
            if (userWantedMovieSeats[seatId].isOrdering === false) {
                userWantedMovieSeats[seatId].isOrdering = true;
                setUserChosenseats(prevVal => {
                    let prevValACopy = prevVal;
                    prevValACopy.push(seatId);
                    e.target.style.background = "green"
                    return (
                        prevVal = prevValACopy
                    )
                })
            //hervee darsan suudal zahialagdsan bol
            } else {
                userWantedMovieSeats[seatId].isOrdering = false;
                setUserChosenseats(prevVal => {
                    let prevValACopy = prevVal;
                    e.target.style.background = "blue"
                    prevValACopy.splice(prevValACopy.indexOf(seatId, 1));
                    return (
                        prevVal = prevValACopy
                    )
    
            })
            }
        }
        //hervee suudaliin too ihedeed hasah uyd ene heseg ajilna
        //tuhain hasahiig husej bui sandal songogdson sandalni arrayt baibal hasana
            for(let i=0;i<userChosenSeats.length;i++){
                if(parseInt(userChosenSeats[i])===seatId){
                    setUserChosenseats((prevVal)=>{
                        let prevValACopy=prevVal;
                        prevValACopy.splice(prevValACopy.indexOf(seatId),1)
                        e.target.style.background='blue'
                        return(
                            prevVal=prevValACopy
                        )
                    })
                }
            }
        
    }

    return (
        <div className={css.OrderMovie}>
            <div className={css.form}
                style={{
                    transform: canUserResumeToOrderChair === true ? 'translateY(-100vh)' :
                        'translateY(0vh)'
                }}
            >
                <div style={{ display: canUserResumeToPhoneNumber === true ? "none" : 'flex' }} className={css.userInputForm}>
                    <h1>Захиалга</h1>
                    <p>Нэр</p>
                    <button className={css.backButton}><BsFillArrowLeftCircleFill /></button>
                    <input id="userNameInput" onChange={(e) => takeUserInput(e)} name="Name" />
                    <button className={css.continueForm} onClick={() => checkUserName()}>Үргэлжлүүлэх</button>
                </div>

                <div
                    style={{
                        display: canUserResumeToPhoneNumber === true ? "flex" : 'none',
                        transform: canUserResumeToAdultAndKidsForm === false ? "translateY(0)" : "translateY(-100vh)"
                    }} className={css.userInputForm}>
                    <h1>Захиалга</h1>
                    <p>Имайл</p>
                    <button className={css.backButton} ><BsFillArrowLeftCircleFill /></button>
                    <input id="emailInput" onChange={(e) => takeUserInput(e)} name="Email" />
                    <button className={css.continueForm} onClick={checkEmail}>Үргэлжлүүлэх</button>
                </div>

                <div style={{
                    display: canUserResumeToAdultAndKidsForm === true ? "flex" : "none",
                    transform: canUserResumeToOrderChair === true ? 'translateY(-100vh)' :
                        'translateY(0vh)'
                }} className={css.userInputForm}>
                    <h1>Захиалга</h1>
                    <button className={css.backButton}><BsFillArrowLeftCircleFill /></button>
                    <p>Том Хүн</p>
                    <input id="Adult" onChange={(e) => takeUserInput(e)} name="Adult" />
                    <p>Хүүхэд</p>
                    <input id="Kids" onChange={(e) => takeUserInput(e)} name="Kids" />
                    <button className={css.continueForm} onClick={checkUserCount}>Үргэлжлүүлэх</button>
                </div>

            </div>

            <div
                className={css.seatsSection}
                style={{
                    transform: canUserResumeToOrderChair === true ? 'translateY(-100vh)' :
                        'translateY(0vh)'
                }}>
                <div className={css.aboutSeats}>
                    <div className={css.aboutRedSeat}>Захиалгатай</div>
                    <div className={css.aboutBlueSeat}>Захиалгагүй</div>
                    <div className={css.aboutGreenSeat}>Таны сонгосон</div>
                </div>
                <div className={css.theaterTelevision}></div>
                <div className={css.seats}>
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
                </div>
                <Link to="/">
                    <button onClick={()=>takeOrder(userChosenSeats)}><BsCart3 /></button>
                </Link>
            </div>

        </div>
    )
}
