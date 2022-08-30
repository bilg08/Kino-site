import React, { useEffect, useState } from "react";
import { getDocs,collection, setDoc,doc, addDoc } from "firebase/firestore";
import { db } from "../firebaseForThisApp/firebase";
export const useFirebaseSetDoc=(docName)=>{

    const [data,setData]=useState(docName);
    
    useEffect(()=>{
      if(data==='red') {
        setDoc(doc(db,"colors",data),{
        color:data
        })
      }
    },[data])
    
   return[data,setData]
   
    
}