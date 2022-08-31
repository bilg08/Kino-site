import { createContext,useContext,useState } from "react";
import { checkInputMongolianAlphabetOrNot } from "../functions/checkInputMongolianOrNot";
import { MoviesContext } from "./MoviesContext";
import { addDocToFirebase } from "../components/firebaseForThisApp/addDoc";
import { setDocToFirebase } from "../components/firebaseForThisApp/setDoc";
import { WhetherUserLoggedOrNotContext } from "./whetherUserLoggedOrNot";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../components/firebaseForThisApp/firebase";
export const MovieOrderingContext = createContext();
export const MovieOrderingContextProvider = ({ children }) => {


    let {userWantedMovie}=useContext(MoviesContext);
    let {userUid}=useContext(WhetherUserLoggedOrNotContext)
    let [userWantedToOrder, setUserWantedToOrder] = useState(false);
    let [canUserResumeToPhoneNumber,setCanUserResumeToPhoneNumber]=useState(false);
    let [canUserResumeToAdultAndKidsForm,setCanUserResumeToAdultAndKidsForm]=useState(false);
    let [canUserResumeToOrderChair,setCanUserResumeToOrderChair]=useState(false);
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


const takeOrder=async(userChosenSeats)=>{
    for(let i=0;i<userWantedMovieSeats.length;i++){
        if(userWantedMovieSeats[i].isOrdering===true){
            userWantedMovieSeats[i].isOrdered=true;
        }
    }
    setForm(async(prevVal)=>{
        let prevValACopy=prevVal;
        prevValACopy.Seat=userChosenSeats;
        addDocToFirebase(`${userWantedMovie.MovieName}orders`,form)
        setDocToFirebase('movies',userWantedMovie.MovieName,userWantedMovie)
        await addDoc(collection(db,'users',userUid,'myOrders'),form)
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
   


