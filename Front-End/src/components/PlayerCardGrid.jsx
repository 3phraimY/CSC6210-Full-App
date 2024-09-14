import { useEffect, useState } from "react";
import { getAllPlayers } from "../hooks/player-API";
import { PlayerCard } from "./PlayerCard";
import { usePlayers, useUpdatePlayers } from "../contexts/PlayersContext";
import { AddPlayer } from "./AddPlayer";

//function for grid of player cards

function PlayerCardGrid() {
  const players = usePlayers();
  const setPlayers = useUpdatePlayers();

  //used as flag for when players are changed through delete or insert
  const [playersChanged, setPlayersChanged] = useState(false);

  //fetches all player data
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
    //calls useEffect whenever flag changes
  }, [playersChanged]);

  return (
    <>
      {/* iterates through all elements in players array and creates player card for each */}
      {players.players.map((Player) => (
        <PlayerCard
          key={Player._id}
          PlayerData={Player}
          setPlayersChanged={setPlayersChanged}
        />
      ))}
      {/* creates an add player card to end of grid */}
      <AddPlayer setPlayersChanged={setPlayersChanged} />
    </>
  );
}

export default PlayerCardGrid;
