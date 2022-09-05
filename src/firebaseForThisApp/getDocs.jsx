import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "./firebase";


export const useGetDocsFromFireBase=(collectionName)=>{
   const [colName]=useState(collectionName);
   
   let [data,setDatas]=useState([]);
    const getData=async()=>{
        setDatas(data=[])
    try {
        const datas=await getDocs(collection(db,colName));
        datas.forEach(e=>{
            setDatas(prevVal=>{
                let prevValACopy=prevVal;
                prevValACopy=[...prevValACopy,e.data()];
                return(
                    prevVal=prevValACopy
                )
            })
        })
    } catch (error) {}
    }
    useEffect(()=>{
      getData();
    },[])
    return [data]
}