import {AppBar,Badge,Toolbar,styled,Box, InputBase,Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import siteLogo from "../../asset/logoSite.svg";
import LogoutIcon from '@mui/icons-material/Logout';
import { useMovieOrderingContext } from "../../contexts/MovieOrderingContext";
export const Header=()=>{
    const {setUserWantedToLogin}=useMovieOrderingContext()
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
    return(
        <AppBar sx={{position:'relative',color:'white',}}>
            <StyledToolBar >
                <StyledNavbarItems>
                        <img style={{width:50+'px',heigth:50+'px'}} src={siteLogo}/>
                </StyledNavbarItems>

                <StyledNavbarItems>
                        <Search>
                            <SearchIcon/>
                            <InputBase placeholder="Кино хайх..."/>
                        </Search>
                    <Icons sx={{display:'block'}}>
                        <Badge badgeContent={4} color='primary'>
                        <ShoppingCartIcon/>
                        </Badge>
                    </Icons>
                    <Button variant="contained" onClick={()=>setUserWantedToLogin(true)}><PersonIcon/>Нэвтрэх</Button>
                    <Button variant="contained"><LogoutIcon/>Гарах</Button>
              </StyledNavbarItems>
           </StyledToolBar>
        </AppBar>
    )
}