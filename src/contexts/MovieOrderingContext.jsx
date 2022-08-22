import { createContext, useContext, useEffect, useState } from "react";
import { MoviesContext } from "./MoviesContext";
export const MovieOrderingContext = createContext();

export const MovieOrderingContextProvider = ({children}) => {
    const [userWantedToOrder,setUserWantedToOrder]=useState(false);
    const [orders,setOrders] = useState([]);
    const [userWantedToOrderSeat,setUserWantedToOrderSeat]=useState(false);
    const [checkInputWhetherFullOrNot,setCheckInputWhetherFullOrNot]=useState(false)
    const [form,setForm]=useState({});

    useEffect(() => {

        if(form.Name===""||form.Email==="") {
            setCheckInputWhetherFullOrNot(true)
           }else{
            setCheckInputWhetherFullOrNot(false)
           } 
       
    }, [form])

    const takeUserInput = (e) => {
      setForm({...form,[e.target.name]:e.target.value});
      
     
        if(e.target.name==="Email") {
            if(!e.target.value.includes("@yahoo.com")) {
                e.target.style.background="red";
            }else{
                e.target.style.background="transparent"
            }
        }
        if(e.target.name==="Adult") {
            let AdultInput=e.target.value;
            for(let i=0;i<AdultInput.length;i++) {
                if(AdultInput[i].charCodeAt()>=48&&AdultInput[i].charCodeAt()<=57) {
                    e.target.style.background="transparent"
                }else{
                    e.target.style.background="red"
                } 
            }
        }
        if(e.target.name==="Kid") {
            let KidInput=e.target.value;
            for(let i=0;i<KidInput.length;i++) {
                if(KidInput[i].charCodeAt()>=48&&KidInput[i].charCodeAt()<=57) {
                    e.target.style.background="transparent"
                }else{
                    e.target.style.background="red"
                } 
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
    }
   
       
   
    const takeOrder = (userOrderedSeat) => {
        console.log(form)
        console.log(userOrderedSeat);
        // let copyForm={...form,seat:userOrderedSeat};
        // console.log("copyForm",copyForm);
        setForm({...form,seat:userOrderedSeat})
        console.log("form1",form)
    }
    console.log("form2",form)
    // useEffect(takeOrder,[])
    
    return(
        <MovieOrderingContext.Provider value={
            {takeOrder,takeUserInput,
            userWantedToOrder,
            setUserWantedToOrder,userWantedToOrderSeat,
            setUserWantedToOrderSeat,checkInputWhetherFullOrNot,
            
            
        }
        }>  {children}
        </MovieOrderingContext.Provider>
    )
}
