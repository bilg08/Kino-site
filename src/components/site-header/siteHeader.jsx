import {AppBar,Badge,Toolbar,styled,Box, InputBase,Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import siteLogo from "../../asset/logoSite.svg";
import LogoutIcon from '@mui/icons-material/Logout';
import { useMovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { useWhetherUserLoggedOrNotContext} from "../../contexts/whetherUserLoggedOrNot";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseForThisApp/firebase";
import {useNavigate} from "react-router-dom"
export const Header = () => {
    const {isUserLogged,signOutFromWebSite,userUid}=useWhetherUserLoggedOrNotContext();
const navigate=useNavigate()
    const {setUserWantedToLogin,setUserWantedtoSeeCart,userOrders,setUserOrders}=useMovieOrderingContext()
    const StyledToolBar=styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between",
        background:'black',
    });
    const Search=styled('div')(({theme})=>({
        background:'white',
        height:60+'%',
        borderRadius:'10px',
        display:'flex',
        alignItems:'center'
    }));
    const Icons=styled('div')(({theme})=>({
        color:'white',
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
    }));
    const StyledNavbarItems=styled(Box)(({them})=>({
        display:"flex",
        justifyContent:"space-between",
        alignItems:'center',
        gap:5+'%',
        width:'auto',
    }));
    const styles = {
        ifUserNotLoggedItems: (theme) => ({
           display:isUserLogged===true?'none':'flex'
        }),
        ifUserLoggedItem: (theme) => ({
           display:isUserLogged===true?'flex':'none'
    }),
    }
    return(
        <AppBar sx={{position:'relative',color:'white',}}>
            <StyledToolBar >
                <StyledNavbarItems>
                        <img style={{width:50+'px',heigth:50+'px'}} src={siteLogo}/>
                </StyledNavbarItems>

                <StyledNavbarItems>
                        <Search>
                            <SearchIcon/>
                            <InputBase placeholder="???????? ????????..."/>
                        </Search>
                    <Icons onClick={async () => {
                        setUserWantedtoSeeCart(true);
                         try {
                            const orders= await getDocs(collection(db,`users/${userUid}/myOrders`));
                            setUserOrders(prevVal=>prevVal=[])
                            orders.forEach(order=>{
                                setUserOrders(prevVal=>{
                                let prevValACopy=prevVal;
                                    prevValACopy = [...prevValACopy, order.data()];
                                return prevVal=prevValACopy;
                                })
                            })

                            } catch (error) {

                            }
                    }} sx={styles.ifUserLoggedItem}>
                        <Badge color='primary'>
                        <ShoppingCartIcon/>
                        </Badge>
                    </Icons>
                    <Button sx={styles.ifUserNotLoggedItems} variant="contained" onClick={()=>setUserWantedToLogin(true)}><PersonIcon/>??????????????</Button>
                    <Button onClick={()=>signOutFromWebSite()} sx={styles.ifUserLoggedItem} variant="contained"><LogoutIcon/>??????????</Button>
              </StyledNavbarItems>
           </StyledToolBar>
        </AppBar>
    )
}