import React, { useContext, useState } from "react";
import css from "./orderMovie.module.css";
import { BsCart3 } from "react-icons/bs";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { MoviesContext } from "../../contexts/MoviesContext";
import { Link } from "react-router-dom";
export const OrderMovie=()=>{
    const { takeUserInput, 
            takeOrder,
            form,setUserWantedToOrder,canUserClickBtnForOrderChair,
            userWantedToOrder,userWantedToOrderChair, setUserWantedToOrderChair
           } = useContext(MovieOrderingContext)
    const { userWantedMovie } = useContext(MoviesContext);
    const userWantedMovieSeats = userWantedMovie.seat;
    const possibleSeatsAllNumber=userWantedMovie.possibleSeatsAllNumber
    let [userChosenSeats, setUserChosenseats] = useState([]);
    const [adultNum,setAdult]=useState(0);
    const [kidsNum,setKids]=useState(0)




    const checkSeat = (e) => {

        const seatId=parseInt(e.target.innerText)
        const possibleSeatToOrder=parseInt(form.Adult)+parseInt(form.Kids)
        if(possibleSeatToOrder>userChosenSeats.length){
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
                    <p>Таны боломжит захиалганы тоо:{possibleSeatsAllNumber}</p>
                 <div className={css.personQuantity}>
                    <p>Том Хүн</p>
                    <input className={css.Adult} value={adultNum} type='number' min="0" max={possibleSeatsAllNumber}  onChange={(e) => {
                        takeUserInput(e);
                        setAdult(e.target.value)
                    }} name="Adult" />
                    <p>Хүүхэд</p>
                    <input className={css.Kids} value={kidsNum} type='number' min='0' max={possibleSeatsAllNumber}  onChange={(e) => {
                        takeUserInput(e);
                        setKids(e.target.value)
                    }} name="Kids" />
                 </div>
                 <button disabled={canUserClickBtnForOrderChair} className={css.continueToOrderSeat} onClick={()=>{
                    if((parseInt(form.Adult)+parseInt(form.Kids))>possibleSeatsAllNumber){
                        alert('Та боломжит суудалаас их суудал сонгосон байна')
                        console.log(possibleSeatsAllNumber,form.Adult+form.Kids)
                    }else if( (parseInt(form.Adult)+parseInt(form.Kids))===0){
                        alert('Тань суудлын тоо 0 байна')
                    }else{
                        setUserWantedToOrderChair(true)
                    }
                }}>Үргэлжлүүлэх</button>
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
