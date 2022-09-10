import { doc, getDoc } from "firebase/firestore"
import { db } from "./firebase"
export const getDocFromFirebase=async(path)=>{
   const sth=await getDoc(doc(db,path));
   return sth.data()
}