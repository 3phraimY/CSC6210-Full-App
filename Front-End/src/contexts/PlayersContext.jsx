import { createContext, useContext, useState } from "react";

const PlayersContext = createContext();
const UpdatePlayersContext = createContext();

export const usePlayers = () => {
  return useContext(PlayersContext);
};

export const useUpdatePlayers = () => {
  return useContext(UpdatePlayersContext);
};

export const PlayersProvider = ({ value, children }) => {
  const [players, setPlayers] = useState(value);

  return (
    <PlayersContext.Provider value={{ players }}>
      <UpdatePlayersContext.Provider value={setPlayers}>
        {children}
      </UpdatePlayersContext.Provider>
    </PlayersContext.Provider>
  );
};
export default PlayersProvider;
