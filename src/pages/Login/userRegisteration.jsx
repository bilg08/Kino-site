import React, { useContext, useState } from "react";
import {RecaptchaVerifier,signInWithPhoneNumber}from "firebase/auth"
import { auth } from "../../firebaseForThisApp/firebase";
import css from "./userRegisteration.module.css"
import { Link,useNavigate } from "react-router-dom";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
import { setDocToFirebase } from "../../firebaseForThisApp/setDoc";
import { Header } from "../../components/site-header/siteHeader";
export const UserRegisteration=()=>{
    const {setWhetherUserLoggedOrNot,setUserUid}=useContext(WhetherUserLoggedOrNotContext)
    const countryCode="+976";
    const [phoneNumber,setPhoneNumber]=useState(countryCode);
    const [otp,setOTP]=useState();
    const navigate = useNavigate();
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
            const appVerifier = window.recaptchaVerifier;
            generateRecaptcha()
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                alert('messeage ilgeelee')
                setSentRequest(sendRequest=true)
                window.confirmationResult = confirmationResult;
                }).catch((error) => {
                });
        }
    }
    const checkThenCreateNewUser = ()=>{
        const confirmationResult=window.confirmationResult;
        confirmationResult.confirm(otp).then((result) => {
            const user = result.user;
            setUserUid(user.uid);
            setDocToFirebase(`users/${user.uid}`,{phoneNumber:phoneNumber})
            setWhetherUserLoggedOrNot(true)
            navigate("/")
            setIsOTPRight(isOTPRight=true)
          }).catch((error) => {});
    }

    return(
       
       <>
       <Header/>
       <div style={{display:isOTPRight===true?'none':'flex'}}  className={css.UserRegisteration}>
            <div className={css.loginHeader}>
              <p>Нэвтрэх</p>
              <Link to="/" style={{textDecoration:'none'}}>
                <button>x</button>
              </Link>
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