import { createContext, useContext, useState } from "react";
import { checkInputMongolianAlphabetOrNot } from "../functions/checkInputMongolianOrNot";
import { checkInputNumberOrNot } from "../functions/checkInputNumberOrNot";
import { MoviesContext } from "./MoviesContext";
import { addDocToFirebase } from "../firebaseForThisApp/addDoc";
import { setDocToFirebase } from "../firebaseForThisApp/setDoc";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseForThisApp/firebase";
import { WhetherUserLoggedOrNotContext } from "./whetherUserLoggedOrNot";
import { uuidv4 } from "@firebase/util";
import { deleteDocOfFirebase } from "../firebaseForThisApp/deleteDoc";
import { useNavigate } from "react-router-dom";
export const MovieOrderingContext = createContext();
export const MovieOrderingContextProvider = ({ children }) => {

  const navigate=useNavigate()
    let { userWantedMovie } = useContext(MoviesContext);
    let { userUid } = useContext(WhetherUserLoggedOrNotContext);
    let [userWantedToOrder, setUserWantedToOrder] = useState(false);
    let [userWantedToOrderChair, setUserWantedToOrderChair] = useState(false);
    let [userWantedtoSeeCart, setUserWantedtoSeeCart] = useState(false)
    let userWantedMovieSeats = userWantedMovie.seat;
    let [form, setForm] = useState({
        Name: "",
        Email: "",
        userOrderedMovie: "",
        Adult: 0,
        Kids: 0,
        Seat: [],
        userOrderedMovieImg: "",
        uid:""
    });

    const takeUserInput = (e) => {
        if (e.target.name === 'Name') {
            let targetValue = e.target.value;
            checkInputMongolianAlphabetOrNot(targetValue)
        } else if (e.target.name === 'Adult' || e.target.name === 'Kids') {
            let targetValue = e.target.value;
            checkInputNumberOrNot(targetValue)
        }
        setForm({ ...form, userOrderedMovie: userWantedMovie.MovieName })
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const deleteOrder=(DocUid)=>{
      deleteDocOfFirebase(`users/${userUid}/myOrders/${DocUid}`).then(setUserWantedtoSeeCart(false))
    }
     

    const takeOrder = async (userChosenSeats) => {
        const uuidForOrderDoc=uuidv4()
        for (let i = 0; i < userWantedMovieSeats.length; i++) {
            if (userWantedMovieSeats[i].isOrdering === true) {
                userWantedMovieSeats[i].isOrdered = true;
            }
        }
        setForm(async (prevVal) => {
            let prevValACopy = prevVal;
            prevValACopy.Seat = userChosenSeats;
            prevValACopy.userOrderedMovie = userWantedMovie.MovieName
            prevValACopy.userOrderedMovieImg = userWantedMovie.image;
            prevValACopy.uid=uuidForOrderDoc;
            userWantedMovie.possibleSeatsAllNumber= userWantedMovie.possibleSeatsAllNumber-(parseInt(form.Adult)+parseInt(form.Kids))
            addDocToFirebase(`${userWantedMovie.MovieName}orders`, form)
            setDocToFirebase(`movies/${userWantedMovie.MovieName}`, userWantedMovie);
            await setDocToFirebase(`users/${userUid}/myOrders/${uuidForOrderDoc}`,form);
            return (
                prevVal = prevValACopy
            )
        })

        //zahialga hiigdsenii daraa omnoh zahialgatai zahialgiin huseltiig hoosolno
        setForm(prevVal => {
            let prevValACopy = prevVal;
            prevValACopy = {
                Adult: 0,
                Kids: 0,
                Name: "",
                Email: ""
            }
            return (
                prevVal = prevValACopy
            )
        });
    }
    return (
        <MovieOrderingContext.Provider value={
            {
                userWantedToOrder, setUserWantedToOrder, takeUserInput, setUserWantedtoSeeCart,deleteOrder,
                form, takeOrder, userWantedToOrderChair, setUserWantedToOrderChair, userWantedtoSeeCart
            }
        }>  {children}
        </MovieOrderingContext.Provider>
    )
}



