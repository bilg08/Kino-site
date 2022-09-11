import React, { createContext, useContext, useState } from "react";
import {signOut,onAuthStateChanged} from 'firebase/auth';
import { auth } from "../firebaseForThisApp/firebase";
export const WhetherUserLoggedOrNotContext=createContext();
export const WhetherUserLoggedOrNotProvider=({children})=>{
    let [isUserLogged,setWhetherUserLoggedOrNot]=useState(false);
    let [userUid, setUserUid] = useState('');
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setWhetherUserLoggedOrNot(isUserLogged=true)
            setUserUid(userUid = user.uid)
        }else{
            setWhetherUserLoggedOrNot(isUserLogged=false)
        }
    })
    const signOutFromWebSite=()=>{
        signOut(auth).then(()=>{
            alert('garlaa')
            setWhetherUserLoggedOrNot(isUserLogged=false)
        })
    }
    return(
        <WhetherUserLoggedOrNotContext.Provider value={{signOutFromWebSite,isUserLogged,setWhetherUserLoggedOrNot,setUserUid,userUid}}>
           {children}
        </WhetherUserLoggedOrNotContext.Provider>
    )
}
export const useWhetherUserLoggedOrNotContext = () => useContext(WhetherUserLoggedOrNotContext)
