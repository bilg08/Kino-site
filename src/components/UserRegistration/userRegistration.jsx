import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { auth } from "../../firebaseOfThisProject/firebase";
export const UserRegistration = () => {
console.log("HelloWorld")
const countryCode="+976";
const [phoneNumber,setPhoneNumber]=useState(countryCode);
const [otp,setOTP]=useState('');
const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptchaContainer', {
        'size': 'invisible',
        'callback': (response) => {
          console.log('responseOfRecaptcha ===>',response)
        }
      }, auth);
}
const sendOTPCode = ()=>{
        if (phoneNumber.length >= 8) {
            generateRecaptcha()
            let appVerifier = window.recaptchaVerifier;
            console.log('appVerifier===>',appVerifier)
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    console.log(phoneNumber)
                    alert("code sent")
                    window.confirmationResult = confirmationResult;
                    console.log("window.confirmationResult ===>",window.confirmationResult)
                })
                .catch((err) => {
                    alert(err);
                });
        }
}
const checkOTPCode =()=> {
   if(otp.length===6){
    let confirmationresult=window.confirmationResult
    confirmationresult.confirm(otp).then((result) => {
        
        const user = result.user;
        console.log('user.result===>',user,result)
        
      }).catch((error) => {
        
      });
   }
}

return(
    <div className="userRegistrationContainer">
        <div>
            <p>Утасны дугаар</p>
           <input value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>
           <button onClick={sendOTPCode}>Код авах</button>  
        </div>
        <div>
            <p>Ирсэн мессежийг оруулна уу</p>
            <input value={otp} onChange={e=>setOTP(e.target.value)}/>
            <button onClick={checkOTPCode}>Бүртгүүлэх</button>
        </div>
        <div id="recaptchaContainer">

        </div>
    </div>
)
}

