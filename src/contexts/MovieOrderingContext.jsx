import { createContext,useContext,useEffect,useState } from "react";
import { checkInputMongolianAlphabetOrNot } from "../functions/checkInputMongolianOrNot";
import { MoviesContext } from "./MoviesContext";
export const MovieOrderingContext = createContext();
export const MovieOrderingContextProvider = ({ children }) => {


    let {userWantedMovie}=useContext(MoviesContext);
    let [userWantedToOrder, setUserWantedToOrder] = useState(false);
    let [canUserResumeToPhoneNumber,setCanUserResumeToPhoneNumber]=useState(false);
    let [canUserResumeToAdultAndKidsForm,setCanUserResumeToAdultAndKidsForm]=useState(false);
    let [canUserResumeToOrderChair,setCanUserResumeToOrderChair]=useState(false);
    let [orders,setOrders]=useState([])
    let userWantedMovieSeats=userWantedMovie.seat;
    
    let [form,setForm]=useState({
        Name:"",
        Email:"",
        Adult:0,
        Kids:0,
        Seat:[]
    });

    const takeUserInput=(e)=>{

    if(e.target.name==="Adult"||e.target.name==="Kids"){
            setForm({...form,[e.target.name]:parseInt(e.target.value)});
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
        if(form.Email.includes("@yahoo.com")){
            setCanUserResumeToAdultAndKidsForm(true)
        }else{
            setCanUserResumeToAdultAndKidsForm(false)
        }
    }
    const checkUserCount=()=>{  
        if(parseInt(form.Adult)===0&&parseInt(form.Kids)===0){
            setCanUserResumeToOrderChair(false)
        }else{
            setCanUserResumeToOrderChair(true);
        }
    }


const takeOrder=(userChosenSeats)=>{
    console.log(userChosenSeats)
    for(let i=0;i<userWantedMovieSeats.length;i++){
        if(userWantedMovieSeats[i].isOrdering===true){
            userWantedMovieSeats[i].isOrdered=true;
        }
    }
    setForm(prevVal=>{
        let prevValACopy=prevVal;
        prevValACopy.Seat=userChosenSeats
        
        return(
            prevVal=prevValACopy
        )
    })
    setOrders(prevVal=>{
        let prevValACopy=prevVal;
        prevValACopy.push(form)
        console.log(orders,'orders')
        return(
            prevVal=prevValACopy
        )
    })
    
    setCanUserResumeToOrderChair(false);
    setCanUserResumeToAdultAndKidsForm(false);
    //zahialga hiigdsenii daraa omnoh zahialgatai zahialgiin huseltiig hoosolno
    setForm(prevVal=>{
        let prevValACopy=prevVal;
        prevValACopy={
            Adult:0,
            Kids:0,
            Name:"",
            Email:""
        }
        return(
            prevVal=prevValACopy
        )
    });
}
    return (
        <MovieOrderingContext.Provider value={
            {
                userWantedToOrder,canUserResumeToPhoneNumber,checkEmail,checkUserCount,
                setUserWantedToOrder,takeUserInput,checkUserName,canUserResumeToAdultAndKidsForm,
                canUserResumeToOrderChair,form,takeOrder
            }
        }>  {children}
        </MovieOrderingContext.Provider>
    )
}
   


