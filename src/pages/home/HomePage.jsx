import React from "react";
import css from "./homePage.module.css"
import { Header } from "../../components/site-header/siteHeader";
import { Movies } from "../../components/movies/movies";
import { UserOrders } from "../../components/userOrders/userOrders";
import { ShowMoviesInSlide } from "../../components/showMoviesInSlide/showMoviesInSlide";
import { UserRegisteration } from "../../components/Login/userRegisteration";
import { Box, Container } from "@mui/material";
export const HomePage=()=>{
    
    return(
        <Container maxWidth="xl" className="hello">
            <Box className="helloWorld" sx={{ height: 'auto' }} >
                <Header/>
                <ShowMoviesInSlide/>
                {/* <UserRegisteration/> */}
                {/* <Movies/> */}
                {/* <UserOrders/> */}
            </Box>
        </Container>
    )
}
