import './App.css'
import React, { Fragment } from "react";
import palmLogo from "./assets/condo icon.svg";
function App() {
  return (
    <Fragment>
      <header className="main-header">
        <img src={palmLogo} alt="" height={150} />
      </header>
      <div className="kanban">
        <div className="column">Upcoming</div>
        <div className="column">In Progress</div>
        <div className="column">Completed</div>
      </div>
    </Fragment>
  );
}

export default App;
