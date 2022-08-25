import css from "./style.module.css";
import React from "react";
import {Header} from "../components/site-header/siteHeader";
import {MainSite} from "../components/mainSite/mainSite";
import {Route,Routes}from 'react-router-dom'
import { MovieDetail } from "../components/MovieDetail/movieDetail";
import { OrderMovie } from "../components/orderMovie/orderMovie";
function App() {
   
  return (
    <div className={css.App}>
      <Header/>
      <Routes>
        <Route path="/home" element={<MainSite/>}/>
        <Route path="/movies/:MovieName" element={<MovieDetail/>}/>
        <Route path="/OrderMovie" element={<OrderMovie/>}/>
      </Routes>
    </div>
  );
}

export default App;
