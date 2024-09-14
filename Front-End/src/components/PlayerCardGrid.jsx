import { useEffect, useState } from "react";
import { getAllPlayers } from "../hooks/player-API";
import { PlayerCard } from "./PlayerCard";
import { usePlayers, useUpdatePlayers } from "../contexts/PlayersContext";
import { AddPlayer } from "./AddPlayer";

function PlayerCardGrid() {
  const players = usePlayers();
  const setPlayers = useUpdatePlayers();
  const [playersChanged, setPlayersChanged] = useState(false);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const playersData = await getAllPlayers();
        setPlayers(playersData);
      } catch (error) {
        console.error("Error fetching players: ", error);
      }
    };
    fetchPlayers();
    setPlayersChanged(false);
  }, [playersChanged]);

  return (
    <>
      {players.players.map((Player) => (
        <PlayerCard
          key={Player._id}
          PlayerData={Player}
          setPlayersChanged={setPlayersChanged}
        />
      ))}
      <AddPlayer setPlayersChanged={setPlayersChanged} />
    </>
  );
}

export default PlayerCardGrid;
