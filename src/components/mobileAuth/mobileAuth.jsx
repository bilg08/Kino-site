import React, { useState } from "react";
import{getAuth,RecaptchaVerifier,signInWithPhoneNumber} from"firebase/auth"
import {initializeApp} from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCFrG91j3QybW3CLGFXd7Bg2nODd2h4Ze8",
    authDomain: "phoneauth-ba8f7.firebaseapp.com",
    projectId: "phoneauth-ba8f7",
    storageBucket: "phoneauth-ba8f7.appspot.com",
    messagingSenderId: "486794513691",
    appId: "1:486794513691:web:2d3e4eaae9d4a7a3eb97be",
    measurementId: "G-CB96Z31TZE"
  };




const app=initializeApp(firebaseConfig);
const auth=getAuth(app);

export const MobileAuth = ()=>{
    const [phoneNumber,setPhoneNumber]=useState("");
    const takePhoneNumber=(e)=>{
        setPhoneNumber(e.target.value)
    }


const captcha =()=>{
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
         
        }
      }, auth);
}
const OTP =()=> {
    captcha()
}


    
    return(
        <div className="MobileAuth">
           <input value={phoneNumber} onChange={takePhoneNumber}  placeholder="Utasnii Dugaar"/>
           <button onClick={OTP} className="sign-in-button">OTP</button>
           

           <div className="CaptchaContainer"></div>
        </div>
    )
}