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
    let [userChosenSeats,setUserChosenseats]=useState([]);
    let userWantedMovieSeats=userWantedMovie.seat;
    let [exceededPossibleOrderSeat,setExceededPossibleOrderSeat]=useState(false);
    
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
        console.log(form,"form")

    }

    const checkSeat=(e)=>{
        const seatId=parseInt(e.target.innerText);
        
        
        
//hervee songoh ystoi sandalliin toonoosoo ihdeegui bol
            if(exceededPossibleOrderSeat===false){
               
                    if(userWantedMovieSeats[seatId].isOrdering===false){
                        userWantedMovieSeats[seatId].isOrdering=true;
                        e.target.style.background="green"
                        setUserChosenseats(prevVal=>{
                            let prevValACopy=prevVal;
                            prevValACopy.push(seatId);
                            console.log(prevValACopy,'after1Push')
                            return(
                                prevVal=prevValACopy
                            )
                        })
                        setForm(prevVal=>{
                            let prevValACopy=prevVal;
                            prevValACopy.Seat=userChosenSeats
                            console.log(prevValACopy,'after2Form')
                            return(
                                prevVal=prevValACopy
                            )
                        })
                        
                    }else{
                        userWantedMovieSeats[seatId].isOrdering=false;
                        e.target.style.background="blue"                       
                        setUserChosenseats(prevVal=>{
                            let prevValACopy=prevVal;
                            prevValACopy.splice(prevValACopy.indexOf(seatId,1));
                            return(
                                prevVal=prevValACopy
                            )
                            
                        })
                        setForm(prevVal=>{
                            let prevValACopy=prevVal;
                            prevValACopy.Seat=userChosenSeats
                            return(
                                prevVal=prevValACopy
                            )
                        })
                    }
            //hervee songoh ystoi sandalliin toonoosoo ihedsen bol
            }else {
            for(let i=0;i<userChosenSeats.length;i++){
                if(seatId===userChosenSeats[i]){
                    e.target.style.background="blue"                       
                    setUserChosenseats(prevVal=>{
                        let prevValACopy=prevVal;
                        prevValACopy.splice(prevValACopy.indexOf(seatId,1));
                        return(
                            prevVal=prevValACopy
                        )
                    })
                    setForm(prevVal=>{
                        let prevValACopy=prevVal;
                        prevValACopy.Seat=userChosenSeats
                        return(
                            prevVal=prevValACopy
                        )
                    })
                }
             }
            }
            
           
    }
    useEffect(()=>{
        if(userChosenSeats.length>parseInt(form.Adult)+parseInt(form.Kids)){
          setExceededPossibleOrderSeat(exceededPossibleOrderSeat=true);
        }else{
            setExceededPossibleOrderSeat(exceededPossibleOrderSeat=false);
        }
    },[userChosenSeats.length]);


const takeOrder=()=>{
    for(let i=0;i<userWantedMovieSeats.length;i++){
        if(userWantedMovieSeats[i].isOrdering===true){
            userWantedMovieSeats[i].isOrdered=true;
        }
    }
    setCanUserResumeToOrderChair(false);
    setCanUserResumeToAdultAndKidsForm(false);
    setUserChosenseats(userChosenSeats=[]);
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
                canUserResumeToOrderChair,form,takeOrder,checkSeat
            }
        }>  {children}
        </MovieOrderingContext.Provider>
    )
}
   


