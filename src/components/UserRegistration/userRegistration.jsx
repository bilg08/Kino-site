import React, { useEffect, useState } from "react";
import css from "./UserRegisteration.module.css";
import { auth } from "../../firebaseOfThisProject/firebase";
import {RecaptchaVerifier }from"firebase/auth";
export const UserRegistration =() => {
    const [phoneNumber,setPhoneNumber]=useState("");
    const authFirebase = auth;
   
    const takeUserPhoneNumber= (e) =>{
        setPhoneNumber(e.target.value);
        console.log(phoneNumber,"PhoneNumber")
    }
    window.recaptchaVerifier = new RecaptchaVerifier('CaptchaContainer', {
        'size': 'invisible',
        'callback': (response) => {
          
        }
      }, authFirebase);
    
    return(
        <div className={css.UserRegisteration}>
            <div className={css.userPhoneNumber}>
                <p>Утасны дугаар</p>
                <input value={phoneNumber} onChange={takeUserPhoneNumber}/>
            </div>
            <div className={css.CaptchaContainer}></div>
        </div>
    )
}