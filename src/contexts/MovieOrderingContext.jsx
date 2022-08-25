import { createContext,useEffect,useState } from "react";
import { checkInputMongolianAlphabetOrNot } from "../functions/checkInputMongolianOrNot";
export const MovieOrderingContext = createContext();
export const MovieOrderingContextProvider = ({ children }) => {



    const [userWantedToOrder, setUserWantedToOrder] = useState(false);
    const [canUserResumeToPhoneNumber,setCanUserResumeToPhoneNumber]=useState(false);
    const [canUserResumeToAdultAndKidsForm,setCanUserResumeToAdultAndKidsForm]=useState(false);
    const [canUserResumeToOrderChair,setCanUserResumeToOrderChair]=useState(false);
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
            console.log(form.Email)
            console.log("unen")
            setCanUserResumeToAdultAndKidsForm(true)
        }else{
            setCanUserResumeToAdultAndKidsForm(false)
        }
    }
    const checkUserCount=()=>{  
        console.log(typeof form.Adult,typeof form.Kids)
        if(parseInt(form.Adult)===0&&parseInt(form.Kids)===0){
            setCanUserResumeToOrderChair(false)
            console.log('buruu')
        }else{
            setCanUserResumeToOrderChair(true);
            console.log('zov')
        }

    }

    return (
        <MovieOrderingContext.Provider value={
            {
                userWantedToOrder,canUserResumeToPhoneNumber,checkEmail,checkUserCount,
                setUserWantedToOrder,takeUserInput,checkUserName,canUserResumeToAdultAndKidsForm
                
            }
        }>  {children}
        </MovieOrderingContext.Provider>
    )
}
   


