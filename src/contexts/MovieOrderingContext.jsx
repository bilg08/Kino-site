import { createContext, useContext, useState } from "react";
import { MoviesContext } from "./MoviesContext";
export const MovieOrderingContext = createContext();

export const MovieOrderingContextProvider = ({children}) => {
    const [userWantedToOrder,setUserWantedToOrder]=useState(false);
    const [orders,setOrders] = useState([]);
    const [userWantedToOrderSeat,setUserWantedToOrderSeat]=useState(false);
    // const [usersOrders,setUsersOrders]=useState([])


    const takeUserInput = (e) => {


        if(e.target.name==="Email") {
            if(!e.target.value.includes("@yahoo.com")) {
                e.target.style.background="red";
            }else{
                e.target.style.background="transparent"
            }
        }

        if(e.target.name==="PhoneNumber") {
            let phoneNumber=e.target.value;
            
            for(let i=0;i<phoneNumber.length;i++) {
                if(phoneNumber[i].charCodeAt()>=48&&phoneNumber[i].charCodeAt()<=57) {
                    e.target.style.background="transparent"
                }else{
                    e.target.style.background="red"
                } 
            }
        }
        
    // setUserOrder(prevVal=> {
    //     let prevValACopy={...prevVal};
    //     prevValACopy={...prevValACopy,[e.target.name]:e.target.value};
    //     return(
    //         prevVal=prevValACopy
    //     )
    //    });
    }
    const takeOrder = (userOrderedMovie,userName,email,phoneNumber,Adult,Kids,userOrderedSeat) => {
        console.log(userName,email,phoneNumber,Adult,Kids,userOrderedSeat)
        const order = {
            userOrderedMovie:userOrderedMovie,
            userName:userName,
            email:email,
            phoneNumber:phoneNumber,
            Adult:Adult,
            Kids:Kids,
            userOrderedSeat:userOrderedSeat
        }
        setOrders(PrevOrders=>{
            
            console.log(PrevOrders);
            let prevOrderACopy=PrevOrders;
            prevOrderACopy.push(order);
            return(
                PrevOrders=prevOrderACopy
            )
        })
        console.log(orders)
    }
    
    return(
        <MovieOrderingContext.Provider value={
            {takeOrder,takeUserInput,
            userWantedToOrder,
            setUserWantedToOrder,userWantedToOrderSeat,
            setUserWantedToOrderSeat,
        }
        }>  {children}
        </MovieOrderingContext.Provider>
    )
}
