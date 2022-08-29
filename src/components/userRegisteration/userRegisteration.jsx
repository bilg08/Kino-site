import React, { useState } from "react";
import {RecaptchaVerifier,signInWithPhoneNumber}from "firebase/auth"
import { auth } from "../firebaseForThisApp/firebase";
import css from "./userRegisteration.module.css"
import { AiFillCloseCircle } from "react-icons/ai";
import { Shadow } from "../shadow/shadow";
export const UserRegisteration=()=>{
    const countryCode="+976";
    const [phoneNumber,setPhoneNumber]=useState(countryCode);
    const [otp,setOTP]=useState();
    let [sendRequest,setSentRequest]=useState(false);
    let [isOTPRight,setIsOTPRight]=useState(false)
    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptchaContainer', {
            'size': 'invisible',
            'callback': (response) => {
            }
          }, auth);
    }
    const requestOtpMessage=()=>{
        if(phoneNumber.length>=12) {
            setSentRequest(sendRequest=true)
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
            setIsOTPRight(isOTPRight=true)
          }).catch((error) => {

          });
    }

    return(
       <>
       <Shadow/>
       <div style={{display:isOTPRight===true?'none':'flex'}}  className={css.UserRegisteration}>
            <div className={css.loginHeader}>
              <p>Нэвтрэх</p>
              <button>x</button>
            </div>
            <div style={{display:sendRequest===true?'none':'flex'}} className={css.loginWithPhoneNumber}>
                <input value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)} placeholder="Утасны дугаараа оруулна уу"/>
                <button className={css.loginSectionsButton} onClick={()=>requestOtpMessage()}>Мессежеер код авах</button>
            </div>
            <div style={{display:sendRequest===true?'flex':'none'}} className={css.TakeMessageSection}>
                <input value={otp} onChange={e=>setOTP(e.target.value)} placeholder="Ирсэн кодыг оруулна уу"/>
                <button className={css.loginSectionsButton} onClick={checkThenCreateNewUser}>Бүртгүүлэх</button>
            </div>
            <div id="recaptchaContainer"></div>
        </div>
       </>
    )
}