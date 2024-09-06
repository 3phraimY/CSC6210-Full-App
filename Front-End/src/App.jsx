import { useState } from "react";
import "./App.css";
import { postPlayer, getAllPlayers } from "./hooks/player-API";

function App() {
  return (
    <>
      <button onClick={async () => getAllPlayers()}> save </button>
    </>
  );
}

export default App;
