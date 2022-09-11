import React, { useContext, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebaseForThisApp/firebase";
import { useNavigate } from "react-router-dom";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
import { setDocToFirebase } from "../../firebaseForThisApp/setDoc";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import {
  Backdrop,
  Button,
  styled,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const UserRegisteration = () => {
  const { setWhetherUserLoggedOrNot, setUserUid } = useContext(
    WhetherUserLoggedOrNotContext
  );
  const { setUserWantedToLogin, userWantedToLogin } =
    useContext(MovieOrderingContext);
  const countryCode = "+976";
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [otp, setOTP] = useState();
  const navigate = useNavigate();
  let [sendRequest, setSentRequest] = useState(false);
  let [isOTPRight, setIsOTPRight] = useState(false);
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptchaContainer",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  };
    const requestOtpMessage = () => {
        if (phoneNumber.length >= 12) {
      const appVerifier = window.recaptchaVerifier;
          generateRecaptcha();
          
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // alert("messeage ilgeelee");
          setSentRequest(sendRequest=true);
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {});
    }
  };
  const checkThenCreateNewUser = () => {
    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(otp)
      .then((result) => {
        const user = result.user;
        setUserUid(user.uid);
        setDocToFirebase(`users/${user.uid}`, { phoneNumber: phoneNumber });
        setWhetherUserLoggedOrNot(true);
        setUserWantedToLogin(false);
        navigate("/");
        setIsOTPRight((isOTPRight = true));
      })
      .catch((error) => {});
  };
  const styles = {
    styleForLoginSectionContainer: (theme) => ({
      background: "white",
      borderRadius: 10 + "px",
      width: 30 + "%",
      height: 40 + "vh",
      color: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
      display: userWantedToLogin === true ? "flex" : "none",
      [theme.breakpoints.down("md")]: {
        width: 80 + "%",
      },
      [theme.breakpoints.only("md")]: {
        width: 450 + "px",
        height:400+'px'
      },
      [theme.breakpoints.up("md")]: {
        width: 650 + "px",
      },
    }),
    buttonForExitLogin: (theme) => ({
      position: "absolute",
      top: 0,
      right: 0,
      color: "silver",
      fontSize: 35 + "px",
      "&:onclick": {
        opacity: 0.6,
      },
    }),
  };
  

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={userWantedToLogin}
    >
      <Box sx={styles.styleForLoginSectionContainer}>
        <Box>
          <h1>Нэвтрэх</h1>
        </Box>
        <Button
          onClick={() => setUserWantedToLogin(false)}
          sx={styles.buttonForExitLogin}
        >
          <CloseIcon />
        </Button>
      <Box sx={{border: "1px solid silver",
    padding: "10px",
    borderRadius: "10px",}}>
          <input
            style={{ border: "none", outline: "none" }}
            value={phoneNumber}
            variant="outlined"
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Утасны дугаараа оруулна уу"
          />
          <Button onClick={() => requestOtpMessage()}>
            <SendIcon />
          </Button>
        </Box>

        <Box sx={{
          display:sendRequest===true?'block':'none',
          border: "1px solid silver",
    padding: "10px",
    borderRadius: "10px",}}
        >
          <input
            style={{ border: "none", outline: "none" }}
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            placeholder="Ирсэн кодыг оруулна уу"
          />
          <Button onClick={checkThenCreateNewUser}>
            <SendIcon />
          </Button>
        </Box>
        <div id="recaptchaContainer"></div>
      </Box>
    </Backdrop>
  );
};
