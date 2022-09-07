import React, { useContext } from "react";
import css from "./siteHeader.module.css";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseForThisApp/firebase";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
export const Header =()=>{
  const {isUserLogged,signOutFromWebSite,userUid}=useContext(WhetherUserLoggedOrNotContext);
  const {setUserWantedtoSeeCart,setUserOrders,userWantedToLogin,setUserWantedToLogin}=useContext(MovieOrderingContext);
    return(
          <AppBar component="header" sx={{background:'black',margin:'auto'}}>
            <Container maxWidth="xl">
              <Toolbar>
              <img style={{width:80+'px',height:50+'px'}} alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/>  
                <Box sx={{display:'flex',marginLeft:'auto'}} component="ul">
                      <Button onClick={async()=>{
                          setUserWantedtoSeeCart(true);
                          try {
                          const orders= await getDocs(collection(db,`users/${userUid}/myOrders`));
                          setUserOrders(prevVal=>prevVal=[])
                          orders.forEach(order=>{
                            setUserOrders(prevVal=>{
                              let prevValACopy=prevVal;
                              prevValACopy=[...prevValACopy,order.data()];
                              return prevVal=prevValACopy;
                            })
                          })
                          } catch (error) {
                          }
                    }} style={{display:isUserLogged===false?'none':'block'}}>Сагс</Button>
                    <Button onClick={()=>setUserWantedToLogin(true)} style={{display:isUserLogged===false?'block':'none'}}>Нэвтрэх</Button>
                    <Link to='/'>
                      <Button onClick={signOutFromWebSite} style={{display:isUserLogged===true?'block':'none'}}>Гарах</Button>
                    </Link>
                </Box>
              </Toolbar>
            </Container>
        </AppBar>
         
    )
}