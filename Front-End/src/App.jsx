import "./App.css";
import PlayerCardGrid from "./components/PlayerCardGrid";
import { PlayersProvider } from "./contexts/PlayersContext";

function App() {
  return (
    <>
      <PlayersProvider value={[]}>
        <PlayerCardGrid />
      </PlayersProvider>
    </>
  );
}

export default App;
