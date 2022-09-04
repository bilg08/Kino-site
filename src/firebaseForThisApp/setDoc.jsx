import { setDoc,doc } from "firebase/firestore";
import { db } from "./firebase";

export const setDocToFirebase=async(path,data)=>{
  await setDoc(doc(db,path),data,{merge:true})
}