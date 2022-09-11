import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebaseForThisApp/firebase";
import { useMovieOrderingContext } from "../contexts/MovieOrderingContext";
export const useGetDocsFromFireBaseForMovieData=(collectionName)=>{
   const [colName]=useState(collectionName);
    const { userOrderedMovieSoReTakeData, setUserOrderedMovieSoReTakeData } = useMovieOrderingContext()
    console.log(userOrderedMovieSoReTakeData)
   let [data,setDatas]=useState([]);
    const getData=async()=>{
        setDatas(data=[])
    try {
        const datas=await getDocs(collection(db,'movies'));
        datas.forEach(e=>{
            setDatas(prevVal=>{
                let prevValACopy=prevVal;
                prevValACopy = [...prevValACopy, e.data()];
                return(
                    prevVal=prevValACopy
                )
            })
        })
    } catch (error) {}
    }



    useEffect(()=>{
      getData();
    },[userOrderedMovieSoReTakeData])
    return [data]
}