import css from "./style.module.css";
import React from "react";
import {MainContent} from "../components/mainContent/mainContent";
import {Route,Routes} from "react-router-dom";
import {MoviesContextProvider} from "../contexts/MoviesContext";
import { OrderMovie } from "../components/orderMovie/orderMovie";
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
            {/* // <OrderMovie/>  */}
        </Routes>
    </div>
  );
}

export default App;
