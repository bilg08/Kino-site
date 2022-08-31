import React, { createContext, useState } from "react";
export const WhetherUserLoggedOrNotContext=createContext();
export const WhetherUserLoggedOrNotProvider=({children})=>{
    let [isUserLogged,setWhetherUserLoggedOrNot]=useState(false)
    let [userUid,setUserUid]=useState('')
    return(
        <WhetherUserLoggedOrNotContext.Provider value={{isUserLogged,setWhetherUserLoggedOrNot,setUserUid,userUid}}>
           {children}
        </WhetherUserLoggedOrNotContext.Provider>
    )

}