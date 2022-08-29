import React, { useState } from "react";
import {RecaptchaVerifier,signInWithPhoneNumber}from "firebase/auth"
import { auth } from "../firebaseForThisApp/firebase";
export const UserRegisteration=()=>{
    const countryCode="+976";
    const [phoneNumber,setPhoneNumber]=useState(countryCode);
    const [otp,setOTP]=useState();
    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptchaContainer', {
            'size': 'invisible',
            'callback': (response) => {
            }
          }, auth);
    }
    const requestOtpMessage=()=>{
        if(phoneNumber.length>=12) {
            const appVerifier = window.recaptchaVerifier;
            generateRecaptcha()
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                alert('messeage ilgeelee')
                window.confirmationResult = confirmationResult;
                }).catch((error) => {
                });
        }
    }
    const checkThenCreateNewUser = ()=>{
        const confirmationResult=window.confirmationResult;
        confirmationResult.confirm(otp).then((result) => {
            const user = result.user;
            console.log(user)
            alert('amjilttai')
          }).catch((error) => {

          });
    }

    return(
        <div>
            <div>
                <input value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)} placeholder="Утасны дугаараа оруулна уу"/>
                <button onClick={requestOtpMessage}>Мессежеер код авах</button>
            </div>
            <div>
                <input value={otp} onChange={e=>setOTP(e.target.value)} placeholder="Ирсэн кодыг оруулна уу"/>
                <button onClick={checkThenCreateNewUser}>Бүртгүүлэх</button>
            </div>
            <div id="recaptchaContainer"></div>
        </div>
    )
}