import css from "./style.module.css";
import React from "react";
import {Route,Routes}from 'react-router-dom';
import { MovieDetail } from "../pages/MovieDetail/movieDetail"
import { OrderMovie } from "../components/orderMovie/orderMovie";
import { UserRegisteration } from "../components/Login/userRegisteration";
import { HomePage } from "../pages/home/HomePage";
function App() {
  return (
    <div className={css.App}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<UserRegisteration/>}/>
        <Route path="/movies/:MovieName" element={<MovieDetail/>}/>
        <Route path="/OrderMovie" element={<OrderMovie/>}/>
      </Routes>
    </div>
  );
}

export default App;
