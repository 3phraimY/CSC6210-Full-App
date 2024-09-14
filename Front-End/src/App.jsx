import "./App.css";
import PlayerCardGrid from "./components/PlayerCardGrid";
import { PlayersProvider } from "./contexts/PlayersContext";

function App() {
  return (
    <>
      {/* Provides all children with global player context */}
      <PlayersProvider value={[]}>
        <PlayerCardGrid />
      </PlayersProvider>
    </>
  );
}

export default App;
