import { createContext, useEffect, useState } from "react";
export const MovieOrderingContext = createContext();

export const MovieOrderingContextProvider = ({ children }) => {
    const [userWantedToOrder, setUserWantedToOrder] = useState(false);
    const [userWantedToOrderSeat, setUserWantedToOrderSeat] = useState(false);
    const [checkInputWhetherFullOrNot, setCheckInputWhetherFullOrNot] = useState(false);
    const [canUserContinueOrderSeat,setCanUserContinueOrderSeat] = useState(false)
    let [form, setForm] = useState({
        seats: []
    });

    useEffect(() => {

        if (form.Name === "" || form.Email === "") {
            setCheckInputWhetherFullOrNot(true)
        } else {
            setCheckInputWhetherFullOrNot(false)
        }

    }, [form])

    const takeUserInput = (e, seat,userWantedMovieSeats) => {
        setForm({ ...form, [e.target.name]: e.target.value });

        if((form.Email==="")&&(form.PhoneNumber==="")) {
            setCanUserContinueOrderSeat(true)
        }else{
            setCanUserContinueOrderSeat(false)           
        }


        if (e.target.name === "Email") {
            if (!e.target.value.includes("@yahoo.com")) {
                e.target.style.background = "red";
            } else {
                e.target.style.background = "transparent"
            }
        }
        if (e.target.name === "Adult") {
            let AdultInput = e.target.value;
            for (let i = 0; i < AdultInput.length; i++) {
                if (AdultInput[i].charCodeAt() >= 48 && AdultInput[i].charCodeAt() <= 57) {
                    e.target.style.background = "transparent"
                } else {
                    e.target.style.background = "red"
                }
            }
        }
        if (e.target.name === "Kid") {
            let KidInput = e.target.value;
            for (let i = 0; i < KidInput.length; i++) {
                if (KidInput[i].charCodeAt() >= 48 && KidInput[i].charCodeAt() <= 57) {
                    e.target.style.background = "transparent"
                } else {
                    e.target.style.background = "red"
                }
            }
        }

        if (e.target.name === "PhoneNumber") {
            let phoneNumber = e.target.value;

            for (let i = 0; i < phoneNumber.length; i++) {
                if (phoneNumber[i].charCodeAt() >= 48 && phoneNumber[i].charCodeAt() <= 57) {
                    e.target.style.background = "transparent"
                } else {
                    e.target.style.background = "red"
                }
            }
        }
        if (e.target.name === "Seat") {

            if (seat.isOrdering === true) {
                console.log(seat.isOrdering)
                const id = e.target.innerText;
              
                setForm(prevVal => {

                    let copyPrevVal = { ...prevVal };
                    const isExist = copyPrevVal.seats.findIndex((el) => el === id);
                    if (isExist > -1) {
                    } else {
                        copyPrevVal.seats.push(e.target.innerText);
                    }
                    return (
                        copyPrevVal
                    )
                })
            }else{
                const id = e.target.innerText;
                console.log(seat.isOrdering)
              
                setForm(prevVal => {

                    let copyPrevVal = { ...prevVal };
                    const indexOfThisItem=copyPrevVal.seats.indexOf(id)
                        copyPrevVal.seats.splice(indexOfThisItem,1);
                    return (
                        copyPrevVal
                    )
                })
            }
            
        }
        
    }



    const takeOrder = (userWantedMovieSeats) => {
       for(let i=0;i<userWantedMovieSeats.length;i++) {
        if(userWantedMovieSeats[i].isOrdering===true){
            userWantedMovieSeats[i].isOrdered=true
        }
       }
    }



    return (
        <MovieOrderingContext.Provider value={
            {
                takeOrder, takeUserInput,
                userWantedToOrder,
                setUserWantedToOrder, userWantedToOrderSeat,
                setUserWantedToOrderSeat, checkInputWhetherFullOrNot,
                canUserContinueOrderSeat
            }
        }>  {children}
        </MovieOrderingContext.Provider>
    )
}
