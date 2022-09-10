import React, { useContext, useState } from "react";
import css from "./orderMovie.module.css";
import { BsFillArrowLeftCircleFill, BsCart3 } from "react-icons/bs";
import { MovieOrderingContext, useMovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { MoviesContext } from "../../contexts/MoviesContext";
import { Link } from "react-router-dom";
export const OrderMovie=()=>{
    const { takeUserInput, 
            takeOrder,
            form,setUserWantedToOrder,
            userWantedToOrder,userWantedToOrderChair, setUserWantedToOrderChair
           } =useMovieOrderingContext()
    const { userWantedMovie } = useContext(MoviesContext);
    const userWantedMovieSeats = userWantedMovie.seat;
    let [userChosenSeats, setUserChosenseats] = useState([])



    const checkSeat = (e) => {
        const seatId = parseInt(e.target.innerText);
        const possibleSeatToOrder=parseInt(form.Adult)+parseInt(form.Kids)
        if(possibleSeatToOrder>userChosenSeats.length){
            if (userWantedMovieSeats[seatId].isOrdering === false) {
                userWantedMovieSeats[seatId].isOrdering = true;
                setUserChosenseats(prevVal => {
                    let prevValACopy = prevVal;
                    prevValACopy.push(seatId);
                    console.log(prevValACopy)
                    e.target.style.background = "green"
                    return (
                        prevVal = prevValACopy
                    )
                })
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

            for(let i=0;i<userChosenSeats.length;i++){
                if(parseInt(userChosenSeats[i])===seatId){
                    userWantedMovieSeats[seatId].isOrdering=false;
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
        <div className={css.OrderMovie} style={{transform:userWantedToOrder===true?"translateY(0vh)":"translateY(-100vh)",}}>
            <div style={{display:userWantedToOrderChair===true?"none":'flex'}} className={css.form}>
                <div className={css.formHeader}>
                    <h2>Захиалга</h2>
                    <button onClick={()=>setUserWantedToOrder(false)} className={css.exitFromForm}>X</button>
                </div>
                <div className={css.formMain}>
                    <p>Таны боломжит захиалганы тоо:{userWantedMovie.possibleSeatsAllNumber}</p>
                 <div className={css.personQuantity}>
                    <p>Том Хүн</p>
                    <input className={css.Adult} onChange={(e) => takeUserInput(e)} name="Adult" />
                    <p>Хүүхэд</p>
                    <input className={css.Kids} onChange={(e) => takeUserInput(e)} name="Kids" />
                 </div>
                 <button className={css.continueToOrderSeat} onClick={()=>setUserWantedToOrderChair(true)}>Үргэлжлүүлэх</button>
                </div>
           </div>

            <div className={css.seatsSection} style={{display:userWantedToOrderChair===true?"flex":'none'}}>
                <div className={css.aboutSeats}>
                    <div className={css.aboutRedSeat}>Захиалгатай</div>
                    <div className={css.aboutBlueSeat}>Захиалгагүй</div>
                    <div className={css.aboutGreenSeat}>Таны сонгосон</div>
                </div>
                <div className={css.theaterTelevision}></div>
                <div className={css.seats} >
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
                    <button
                        className={css.orderMovieBtn}
                        onClick={()=>{
                        takeOrder(userChosenSeats)
                        setUserWantedToOrderChair(false);
                        setUserWantedToOrder(false)
                    }}><BsCart3 /></button>
                </Link>

            </div>
        </div>
    )
}