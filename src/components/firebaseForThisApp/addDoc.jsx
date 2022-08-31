import { addDoc,collection,getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const addDocToFirebase=async(collectionName,data)=>{
  await addDoc(collection(db,collectionName),data)
}