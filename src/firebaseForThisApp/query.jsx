import { collection, query, where } from "firebase/firestore"
import { db } from "./firebase"

export const queryFirebase=async(path,name,arr=[])=>{
   await query(collection(db,path),where(name in arr))
}