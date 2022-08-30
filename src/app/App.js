import css from "./style.module.css";
import React from "react";
import {Header} from "../components/site-header/siteHeader";
import {MainSite} from "../components/mainSite/mainSite";
import {Route,Routes}from 'react-router-dom'
import { MovieDetail } from "../components/MovieDetail/movieDetail";
import { OrderMovie } from "../components/orderMovie/orderMovie";
import {  } from "../components/testForFirebaseCustomHook/useUseDoc";
import { Test } from "../components/testForFirebaseCustomHook/testForSetDoc";
function App() {
   
  return (
    <div className={css.App}>
      <Test/>
      {/* <UserRegisteration/> */}
       {/* <Header/>
      <Routes>
        <Route path="/" element={<MainSite/>}/>
        <Route path="/movies/:MovieName" element={<MovieDetail/>}/>
        <Route path="/OrderMovie" element={<OrderMovie/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
