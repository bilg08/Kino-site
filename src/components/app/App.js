import css from "./style.module.css"
import React from "react";
import {ToolBar} from "../toolBar/app"
import {MainContent} from "../mainContent/app"

function App() {
  
  

  return (
    <div className={css.App}>
        <ToolBar/>
        <MainContent/>
    </div>
  );
}

export default App;
