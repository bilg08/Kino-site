import css from "./style.module.css"
import React from "react";
import {ToolBar} from "../toolBar/toolBar"
import {MainContent} from "../mainContent/mainContent"

function App() {
  
  

  return (
    <div className={css.App}>
        <ToolBar/>
        <MainContent/>
    </div>
  );
}

export default App;
