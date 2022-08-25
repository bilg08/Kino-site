
import { createContext, useContext, useEffect, useState } from "react";
import { MoviesContext } from "./MoviesContext";
import {setDoc,doc,getDoc}from"firebase/firestore"
import { database } from "../firebase/firebase";
export const MovieOrderingContext = createContext();

export const MovieOrderingContextProvider = ({ children }) => {


    const [userWantedToOrder, setUserWantedToOrder] = useState(false);
    const {userWantedMovie,moviesDatas} = useContext(MoviesContext)
    const [userWantedToOrderSeat, setUserWantedToOrderSeat] = useState(false);
    const [checkInputWhetherFullOrNot, setCheckInputWhetherFullOrNot] = useState(false);
    const [canUserContinueOrderSeat,setCanUserContinueOrderSeat] = useState(false);
    const db =database;


    let [orders,setOrders]=useState([]);
    let [form, setForm] = useState({
        MovieName:"",
        seats: []
    });

    useEffect(() => {

        if (form.Name === ""|| form.Email === ""||form.PhoneNumber==="") {
            setCheckInputWhetherFullOrNot(true);
        } else {
            setCheckInputWhetherFullOrNot(false)
        }

    }, [form])

    const takeUserInput = (e, seat,userWantedMovieSeats) => {
        setForm({ ...form, [e.target.name]: e.target.value });
console.log(form)
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
                const id = e.target.innerText;
              
                setForm(prevVal => {

                    let copyPrevVal = { ...prevVal,MovieName:userWantedMovie.MovieName };
                    const isExist = copyPrevVal.seats.findIndex((el) => el === id);
                    
                    if (isExist > -1) {
                    } else {
                        copyPrevVal.seats=[...copyPrevVal.seats,id];
                    }
                    return (
                        copyPrevVal
                    )
                })
            }else{
                const id = e.target.innerText;              
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



    const takeOrder = async(userWantedMovieSeats) => {
      
       for(let i=0;i<userWantedMovieSeats.length;i++) {
        if(userWantedMovieSeats[i].isOrdering===true){
            userWantedMovieSeats[i].isOrdered=true;
            userWantedMovieSeats[i].isOrdering=false;
        }
       }
        setOrders((prevVal)=>{
           let prevValAcopy=[...prevVal];
           prevValAcopy.push(form);
           return(
               orders=prevValAcopy
           )
       });
    for(let i=0;i<moviesDatas.length;i++) {
        
    }
     setForm((prevVal)=> {
         let prevValAcopy={...prevVal}
         prevValAcopy={MovieName:"",seats:[]};
         return prevValAcopy
     })
       
       for(let i=0;i<moviesDatas.length;i++){
           console.log(moviesDatas[i].MovieName);
           await setDoc(doc(db,"movies",moviesDatas[i].MovieName),moviesDatas[i])
           getDoc(doc(db,"movies",moviesDatas[i].MovieName)).then((res)=>console.log(res.data()))
       }
    }



    return (
        <MovieOrderingContext.Provider value={
            {
                takeOrder, takeUserInput,
                userWantedToOrder,
                setUserWantedToOrder, userWantedToOrderSeat,
                setUserWantedToOrderSeat, checkInputWhetherFullOrNot,
                canUserContinueOrderSeat,form
            }
        }>  {children}
        </MovieOrderingContext.Provider>
    )
}
