import css from "./style.module.css";
import React from "react";
import {Header} from "../components/site-header/siteHeader";
import {MainSite} from "../components/mainSite/mainSite";
import {Route,Routes}from 'react-router-dom'
import { MovieDetail } from "../components/MovieDetail/movieDetail";
import { OrderMovie } from "../components/orderMovie/orderMovie";
import { UserRegisteration } from "../components/userRegisteration/userRegisteration";
import { UserOrders } from "../components/userOrders/userOrders";
function App() {
   
  return (
    <div className={css.App}>
      <Header/>
      <Routes>
        <Route path="/" element={<MainSite/>}/>
        <Route path="/login" element={<UserRegisteration/>}/>
        <Route path="/movies/:MovieName" element={<MovieDetail/>}/>
        <Route path="/OrderMovie" element={<OrderMovie/>}/>
        <Route path="/userOrders" element={<UserOrders/>}/>
      </Routes>
    </div>
  );
}

export default App;
