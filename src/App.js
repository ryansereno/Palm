import './App.css'
import React, { Fragment } from "react";
import palmLogo from "./assets/condo icon.svg";
import Kanban from './components/kanban/Kanban'
function App() {
  return (
    <Fragment>
      <header className="main-header">
        <img src={palmLogo} alt="" height={150} />
      </header>
      <Kanban />
      
    </Fragment>
  );
}

export default App;
