import { createContext, useContext, useEffect, useState } from "react";
import { MoviesContext } from "./MoviesContext";

export const MovieOrderingContext = createContext();

export const MovieOrderingContextProvider = ({ children }) => {

    const [userWantedToOrder, setUserWantedToOrder] = useState(false);
    const {userWantedMovie} = useContext(MoviesContext)
    const [userWantedToOrderSeat, setUserWantedToOrderSeat] = useState(false);
    const [checkInputWhetherFullOrNot, setCheckInputWhetherFullOrNot] = useState(false);
    const [canUserContinueOrderSeat,setCanUserContinueOrderSeat] = useState(false);
    // const [checkUserInputFullOrNot,setCheckUserInputFullOrNot]=useState(false)


    let [orders,setOrders]=useState([]);
    let [form, setForm] = useState({
        MovieName:"",
        Adult:"",
        Kid:"",
        Email:"",
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
    const kidQuantity=parseInt(form.Kid);
    const AdultQuantity=parseInt(form.Adult);
    const seatsQuantity=parseInt(form.seats.length);
        setForm({ ...form, [e.target.name]: e.target.value });

        if((form.Email==="")||(form.PhoneNumber==="")) {
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

            for (let i = 0; i < e.target.value.length; i++) {
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
    
    const checkUserInputFullOrNot=()=>{
        console.log('ko');
        
            if (!form.Email.includes("@yahoo.com")||form.PhoneNumber==="") {
              console.log('KKKa',form.PhoneNumber)
            }  
          
    }


    const takeOrder = async(userWantedMovieSeats) => {
      
       for(let i=0;i<userWantedMovieSeats.length;i++) {
        if(userWantedMovieSeats[i].isOrdering===true){
            userWantedMovieSeats[i].isOrdered=true
        }
       }
       
        setOrders((prevVal)=>{
           let prevValAcopy=[...prevVal];
           prevValAcopy.push(form);
           console.log(prevValAcopy)
           return(
               orders=prevValAcopy
           )
       });
     setForm((prevVal)=> {
         let prevValAcopy={...prevVal}
         prevValAcopy={MovieName:"",seats:[]};
         return prevValAcopy
     })
       
       
    }



    return (
        <MovieOrderingContext.Provider value={
            {
                takeOrder, takeUserInput,
                userWantedToOrder,
                setUserWantedToOrder, userWantedToOrderSeat,
                setUserWantedToOrderSeat, checkInputWhetherFullOrNot,
                canUserContinueOrderSeat,form,checkUserInputFullOrNot
            }
        }>  {children}
        </MovieOrderingContext.Provider>
    )
}
