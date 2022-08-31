import css from "./style.module.css";
import React from "react";
import {Route,Routes}from 'react-router-dom'
import { MovieDetail } from "../pages/MovieDetail/movieDetail"
import { OrderMovie } from "../components/orderMovie/orderMovie";
import { UserRegisteration } from "../pages/Login/userRegisteration";
import { UserOrders } from "../components/userOrders/userOrders";
import { HomePage } from "../pages/home/HomePage";
function App() {
   
  return (
    <div className={css.App}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<UserRegisteration/>}/>
        <Route path="/movies/:MovieName" element={<MovieDetail/>}/>
        <Route path="/OrderMovie" element={<OrderMovie/>}/>
        <Route path="/userOrders" element={<UserOrders/>}/>
      </Routes>
    </div>
  );
}

export default App;
