import { setDoc,doc } from "firebase/firestore";
import { db } from "./firebase";

export const setDocToFirebase=async(collectionName,docName,data)=>{
  await setDoc(doc(db,collectionName,docName),data)
}