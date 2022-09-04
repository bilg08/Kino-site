import { setDoc,doc } from "firebase/firestore";
import { db } from "./firebase";

export const RegisterUserInFirebase=async(userUid,phoneNumber)=>{
    await setDoc(doc(db,'users',userUid),{
        phoneNumber:phoneNumber
    })
}