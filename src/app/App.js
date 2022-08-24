import css from "./style.module.css";
import React from "react";
import {MainContent} from "../components/mainContent/mainContent";
import {Route,Routes} from "react-router-dom";
import {MoviesContextProvider} from "../contexts/MoviesContext";
import {UserRegistration} from "../components/UserRegistration/userRegistration";
function App() {
   
  return (
    <div className={css.App}>
      <UserRegistration/>
    </div>
  );
}
{/* <Routes>
          <Route path="/Home" element={
            <MoviesContextProvider>
              <MainContent/>
            </MoviesContextProvider>
            }
          />
            
    </Routes> */}
export default App;
