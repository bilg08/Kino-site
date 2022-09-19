import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebaseForThisApp/firebase";

export const useGetDocsFromFireBase = (collectionName) => {
    let [data, setDatas] = useState([]);
    
  async function getData () {
      
    setDatas((data = []));
    try {
      const datas = await getDocs(collection(db, collectionName));
      datas.forEach((e) => {
        setDatas((prevVal) => {
          let prevValACopy = prevVal;
          prevValACopy = [...prevValACopy, e.data()];
          return (prevVal = prevValACopy);
        });
      });
    } catch (error) {}
  };

  useEffect(() => {
      getData();
       
  }, []);
  return [data];
};
