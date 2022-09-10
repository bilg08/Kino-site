import { doc, getDoc } from "firebase/firestore"
import { useEffect } from "react"
import { useState } from "react"
import { db } from "./firebase"
export const useGetDocFromFirebase = (path) => {
   console.log(path,'hell')
   const [data,setData]=useState()
   const getData = async () => {
      try {
         const comingData = await getDoc(doc(db, path));
         setData(comingData.data())
      } catch (error) {
         
      }
   }
   useEffect(() => {
      getData()
   }, [])
   return [data]
}