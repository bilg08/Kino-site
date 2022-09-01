import { createContext,useContext,useEffect,useState } from "react";
import { checkInputMongolianAlphabetOrNot } from "../functions/checkInputMongolianOrNot";
import { checkInputNumberOrNot } from "../functions/checkInputNumberOrNot";
import { MoviesContext } from "./MoviesContext";
import { addDocToFirebase } from "../components/firebaseForThisApp/addDoc";
import { setDocToFirebase } from "../components/firebaseForThisApp/setDoc";
import { WhetherUserLoggedOrNotContext } from "./whetherUserLoggedOrNot";
import { addDoc,collection } from "firebase/firestore";
import { db } from "../components/firebaseForThisApp/firebase";
export const MovieOrderingContext = createContext();
export const MovieOrderingContextProvider = ({ children }) => {


    let {userWantedMovie}=useContext(MoviesContext);
    let {userUid}=useContext(WhetherUserLoggedOrNotContext)
    let [userWantedToOrder, setUserWantedToOrder] = useState(false);
    let [userWantedToOrderChair, setUserWantedToOrderChair] = useState(false);
    let [userWantedtoSeeCart,setUserWantedtoSeeCart]=useState(false)
    let userWantedMovieSeats=userWantedMovie.seat;
    let [form,setForm]=useState({
        Name:"",
        Email:"",
        userOrderedMovie:"",
        Adult:0,
        Kids:0,
        Seat:[],
        userOrderedMovieImg:""
    });

    const takeUserInput=(e)=>{
        if(e.target.name==='Name'){
        let targetValue=e.target.value;
        checkInputMongolianAlphabetOrNot(targetValue)
        }else if(e.target.name==='Adult'||e.target.name==='Kids'){
            let targetValue=e.target.value;
            checkInputNumberOrNot(targetValue)
        }
        setForm({...form,userOrderedMovie:userWantedMovie.MovieName})
        setForm({...form,[e.target.name]:e.target.value});
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
        prevValACopy.userOrderedMovie=userWantedMovie.MovieName
        prevValACopy.userOrderedMovieImg=userWantedMovie.image;
        addDocToFirebase(`${userWantedMovie.MovieName}orders`,form)
        setDocToFirebase('movies',userWantedMovie.MovieName,userWantedMovie)
        await addDoc(collection(db,'users',userUid,'myOrders'),form)
        return(
            prevVal=prevValACopy
        )
    })
    
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
                userWantedToOrder,setUserWantedToOrder,takeUserInput,setUserWantedtoSeeCart,
                form,takeOrder,userWantedToOrderChair, setUserWantedToOrderChair,userWantedtoSeeCart
            }
        }>  {children}
        </MovieOrderingContext.Provider>
    )
}
   


