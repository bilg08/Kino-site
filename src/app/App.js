import css from "./style.module.css";
import React from "react";
import {Route,Routes}from 'react-router-dom';
import { MovieDetail } from "../pages/MovieDetail/movieDetail"
import { OrderMovie } from "../components/orderMovie/orderMovie";
import { UserRegisteration } from "../components/Login/userRegisteration";
import { HomePage } from "../pages/home/HomePage";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Box, Container } from "@mui/material";
import { Header } from "../components/site-header/siteHeader";
const themes = createTheme({
  
});
function App() {
  return (
    <ThemeProvider theme={themes}>
      <Container maxWidth="xl">
        <Box sx={{ height: "auto" }}>
          {/* <Header /> */}
          {/* { <HomePage />*} */}
          
        </Box>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route path="/movies/:MovieName" element={<MovieDetail/>} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}
export default App;
