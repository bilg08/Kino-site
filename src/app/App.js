import css from "./style.module.css";
import React from "react";
import {Route,Routes}from 'react-router-dom';
import { MovieDetail } from "../pages/MovieDetail/movieDetail"
import { OrderMovie } from "../components/orderMovie/orderMovie";
import { UserRegisteration } from "../components/Login/userRegisteration";
import { HomePage } from "../pages/home/HomePage";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Box, Container, Grid } from "@mui/material";
import { Header } from "../components/site-header/siteHeader";
const themes = createTheme({
  
});
function App() {
  return (
    <ThemeProvider theme={themes}>
      <Grid container sx={{margin:'auto'}} lg={10} md={12} xs={12}>
        {/* <Grid item lg={12} md={12} xs={12}> */}
        {/* </Grid> */}
      <Routes>
          <Route element={<HomePage />} path="/" />
          <Route path="/movies/:MovieName" element={<MovieDetail/>} />
        </Routes>
        
      </Grid>
    </ThemeProvider>
  );
}
export default App;
