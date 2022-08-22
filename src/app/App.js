import css from "./style.module.css";
import React from "react";
import {MainContent} from "../components/mainContent/mainContent";
import {Route,Routes} from "react-router-dom";
import {MoviesContextProvider} from "../contexts/MoviesContext";
import { OrderMovie } from "../components/orderMovie/orderMovie";
import { Test } from "../components/test/test";
// import {MovieOrderingContextProvider} from "../contexts/MovieOrderingContext"
function App() {
   


  return (
    <div className={css.App}>
        <Routes>
          <Route path="/Home" element={
            <MoviesContextProvider>
              <MainContent/>
            </MoviesContextProvider>
            }
          />
            
        </Routes>
        {/* <Test/> */}
    </div>
  );
}

export default App;
