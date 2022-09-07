import {AppBar,Badge,Toolbar,Menu,styled,MenuItem,Typography,Box, InputBase,Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export const Header=()=>{
    const StyledToolBar=styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
    });
    const Search=styled('div')(({theme})=>({
        background:'white',
        padding:"0 10px",
        borderRadius:'10px'
    }))
    const Icons=styled('div')(({theme})=>({
        color:'white',
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
    }))
   
    return(
        <AppBar position="static">
           <StyledToolBar sx={{background:'black'}} >
              <img style={{width:100+'px',heigth:100+'%'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/>
              <Box sx={{display:'flex',justifyContent:'space-between',gap:20+"px"}}>
              <Search><InputBase placeholder="Кино хайх..."/></Search>
              <Icons>
                <Badge badgeContent={4} color='primary'>
                <ShoppingCartIcon/>
                </Badge>
              </Icons>
              <Button variant="contained">Нэвтрэх</Button>
              <Button variant="contained">Гарах</Button>
              </Box>
           </StyledToolBar>
        </AppBar>
    )
}
// import React, { useContext } from "react";
// import css from "./siteHeader.module.css";
// import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
// import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
// import { Link } from "react-router-dom";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebaseForThisApp/firebase";
// import { AppBar, Button, Container, Toolbar } from "@mui/material";
// import { Box } from "@mui/system";
// export const Header =()=>{
//   const {isUserLogged,signOutFromWebSite,userUid}=useContext(WhetherUserLoggedOrNotContext);
//   const {setUserWantedtoSeeCart,setUserOrders,userWantedToLogin,setUserWantedToLogin}=useContext(MovieOrderingContext);
//     return(
//           <AppBar component="header" sx={{background:'black',margin:'auto'}}>
//             <Container maxWidth="xl">
//               <Toolbar>
//               <img style={{width:80+'px',height:50+'px'}} alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/>  
//                 <Box sx={{display:'flex',marginLeft:'auto'}} component="ul">
//                       <Button onClick={async()=>{
//                           setUserWantedtoSeeCart(true);
//                           try {
//                           const orders= await getDocs(collection(db,`users/${userUid}/myOrders`));
//                           setUserOrders(prevVal=>prevVal=[])
//                           orders.forEach(order=>{
//                             setUserOrders(prevVal=>{
//                               let prevValACopy=prevVal;
//                               prevValACopy=[...prevValACopy,order.data()];
//                               return prevVal=prevValACopy;
//                             })
//                           })
//                           } catch (error) {
//                           }
//                     }} style={{display:isUserLogged===false?'none':'block'}}>Сагс</Button>
//                     <Button onClick={()=>setUserWantedToLogin(true)} style={{display:isUserLogged===false?'block':'none'}}>Нэвтрэх</Button>
//                     <Link to='/'>
//                       <Button onClick={signOutFromWebSite} style={{display:isUserLogged===true?'block':'none'}}>Гарах</Button>
//                     </Link>
//                 </Box>
//               </Toolbar>
//             </Container>
//         </AppBar>
         
//     )
// }