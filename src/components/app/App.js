import css from "./style.module.css"
import React from "react";
import {MainContent} from "../mainContent/MainContent"
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  
  

  return (
    <div className={css.App}>
        <Routes>
          <Route path="/" element={<MainContent/>}/>
        </Routes>
    </div>
  );
}

export default App;
