import React,{useEffect, useState} from "react";

export const Test = ()=> {

const [ner,setNer] = useState("");
const [email,setEmail] = useState("");
const [utasniiDugaar,setUtasniiDugaar] = useState("");
const [order,setOrder]=useState({})
let [arr,setArr]=useState([])
const takeUserInput =(e)=> {
    if(e.target.name==="ner"){
        setNer(e.target.value);
        setOrder({...order,[e.target.name]:e.target.value})
    }else if(e.target.name==="email"){
        setEmail(e.target.value)
        setOrder({...order,[e.target.name]:e.target.value})
    }else if(e.target.name==="utasniiDugaar"){
        setUtasniiDugaar(e.target.value)
        setOrder({...order,[e.target.name]:e.target.value})

    }else if(e.target.name==="seat"){
       setArr((prevVal)=> {
        let arrCopy=[...prevVal];
        arrCopy.push(e.target.innerText);
        console.log("afterArr",arrCopy)
        return(
            arr=arrCopy
        )
       });
       setTimeout(()=> {
        setOrder(order=>{
            console.log({...order,arr},"hello")
        })
       },1000)
       setOrder({...order,[e.target.name]:e.target.value})

    }

}

    return(
        <div>
            <input name="ner" value={ner} onChange={takeUserInput} placeholder="ner"/>
            <input name="email" value={email} onChange={takeUserInput} placeholder="email"/>
            <input name="utasniiDugaar" value={utasniiDugaar}onChange={takeUserInput} placeholder="utasniiDugaar"/>
            <button name="seat" onClick={takeUserInput}>hadgalah1</button>
            <button name="seat" onClick={takeUserInput}>hadgalah2</button>

        </div>
    )
}