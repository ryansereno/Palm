import "./App.css";
import React from "react";
import palmLogo from "./assets/condo icon.svg";
import Kanban from "./components/kanban/Kanban";
import DndComponent from "./components/kanban/DndComponent";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <header className="main-header">
        <img src={palmLogo} alt="" height={150} />
      </header>
      <DndComponent />

      {/*<Kanban />
       */}
    </DndProvider>
  );
}

export default App;
