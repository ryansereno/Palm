import "./App.css";
import React from "react";
import palmLogo from "./assets/condo icon.svg";
import Kanban from "./components/kanban/Kanban";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <header className="main-header">
        <img src={palmLogo} alt="" height={150} />
        <h1>Galleon Projects</h1>
      </header>
      <Kanban />
      <footer>
      <p>Made with love by the Palm🌴 Team</p>
      </footer>
    </DndProvider>
  );
}

export default App;
