import css from "./style.module.css";
import React from "react";
import {UserRegistration} from "../components/UserRegistration/userRegistration";
function App() {
   
  return (
    <div className={css.App}>
      <UserRegistration/>
    </div>
  );
}

export default App;
