import { useEffect } from "react";
import "./App.css";
import { getAllPlayers } from "./hooks/player-API";
import { PlayerCard } from "./components/PlayerCard";
import { usePlayers, useUpdatePlayers } from "./contexts/PlayersContext";
import { AddPlayer } from "./components/AddPlayer";

function App() {
  const players = usePlayers();
  const setPlayers = useUpdatePlayers();

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
      {players.players.map((Player) => (
        <PlayerCard key={Player._id} PlayerData={Player} />
      ))}
      <AddPlayer />
    </>
  );
}

export default App;
