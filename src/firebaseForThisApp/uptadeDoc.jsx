import { doc, updateDoc } from "firebase/firestore"

export const uptadeDocFirebase=(path,data)=>{
    updateDoc(doc(path),data)
}