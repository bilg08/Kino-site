import React, { useState } from "react";
import { useFirebaseSetDoc } from "./useUseDoc";
export const Test=()=>{
    
const [isClicked,setIsClicked]=useState(false);
const [docName,setDocName]=useFirebaseSetDoc('bil');

    return(
        <div>
            <input value={docName}
            onChange={(e)=>{
                setDocName((e.target.value))
            }}
             />
            {/* <button onClick={()=>setIsClicked(true)}
            style={{background:"white",color:'black',border:'1px solid black'}}>Нэмэх</button> */}
        </div>
    )
}