import { useEffect, useState } from "react";
import "./App.css";
import { postPlayer, getAllPlayers } from "./hooks/player-API";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const playersData = await getAllPlayers();
        console.log("Fetched players data:", playersData);
        setPlayers(playersData);
      } catch (error) {
        console.error("Error fetching players: ", error);
      }
    };
    fetchPlayers();
  }, []);

  return (
    <>
      {players.map((Player) => (
        <div> {Player.Name}</div>
      ))}
    </>
  );
}

export default App;
