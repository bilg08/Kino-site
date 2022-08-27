import { createContext,useContext,useEffect,useState } from "react";
import { checkInputMongolianAlphabetOrNot } from "../functions/checkInputMongolianOrNot";
import { MoviesContext } from "./MoviesContext";
export const MovieOrderingContext = createContext();
export const MovieOrderingContextProvider = ({ children }) => {


    const {userWantedMovie}=useContext(MoviesContext)
    const [userWantedToOrder, setUserWantedToOrder] = useState(false);
    const [canUserResumeToPhoneNumber,setCanUserResumeToPhoneNumber]=useState(false);
    const [canUserResumeToAdultAndKidsForm,setCanUserResumeToAdultAndKidsForm]=useState(false);
    const [canUserResumeToOrderChair,setCanUserResumeToOrderChair]=useState(false);
    const userWantedMovieSeats=userWantedMovie.seat;
    const [possibleSeattoOrder,setPossibleSeatToOrder]=useState(0);
    let [exceededPossibleOrderSeat,setExceededPossibleOrderSeat]=useState(false)
    console.log(exceededPossibleOrderSeat)
    let [form,setForm]=useState({
        Name:"",
        Email:"",
        Adult:0,
        Kids:0
    });

    const takeUserInput=(e)=>{
        if(e.target.name==="Adult"||e.target.name==="Kids"){
            console.log('hah')
            setForm({...form,[e.target.name]:parseInt(e.target.value)});
            console.log(typeof e.target.value)
        }
        setForm({...form,[e.target.name]:e.target.value});
    }
    const checkUserName=()=>{
     const result=checkInputMongolianAlphabetOrNot(form.Name);
     if(result===true){
       setCanUserResumeToPhoneNumber(true)
     }
    }
    const checkEmail=()=>{
        console.log('ss',form.Email)
        if(form.Email.includes("@yahoo.com")){
            setCanUserResumeToAdultAndKidsForm(true)
        }else{
            setCanUserResumeToAdultAndKidsForm(false)
        }
    }
    const checkUserCount=()=>{  
        console.log(typeof form.Adult,typeof form.Kids)
        if(parseInt(form.Adult)===0&&parseInt(form.Kids)===0){
            setCanUserResumeToOrderChair(false)
        }else{
            setCanUserResumeToOrderChair(true);
        }

    }

    const checkSeat=(e)=>{
        const seatId=parseInt(e.target.innerText);
           if(exceededPossibleOrderSeat===false){
            console.log('ihdeegui')
            if(userWantedMovieSeats[seatId].isOrdering===false){
                userWantedMovieSeats[seatId].isOrdering=true;
                e.target.style.background="green";
                setPossibleSeatToOrder(prevVal=>prevVal+1);
               
            }else{
                userWantedMovieSeats[seatId].isOrdering=false;
                e.target.style.background="blue";
                setPossibleSeatToOrder(prevVal=>prevVal-1);
            }
            
           }else{
            return null
           }
        }
useEffect(()=>{
    console.log("parseInt(form.Adult)+parseInt(form.Kids)",parseInt(form.Adult)+parseInt(form.Kids),"seat",possibleSeattoOrder)
    if(parseInt(form.Adult)+parseInt(form.Kids)<possibleSeattoOrder){
        console.log('ih')
        setExceededPossibleOrderSeat(exceededPossibleOrderSeat=true)
    }
},[possibleSeattoOrder])

const takeOrder=()=>{
    for(let i=0;i<userWantedMovieSeats.length;i++){
        if(userWantedMovieSeats[i].isOrdering===true){
            userWantedMovieSeats[i].isOrdered=true
        }
    }
}
    return (
        <MovieOrderingContext.Provider value={
            {
                userWantedToOrder,canUserResumeToPhoneNumber,checkEmail,checkUserCount,
                setUserWantedToOrder,takeUserInput,checkUserName,canUserResumeToAdultAndKidsForm,
                canUserResumeToOrderChair,form,checkSeat,takeOrder
                
            }
        }>  {children}
        </MovieOrderingContext.Provider>
    )
}
   


