import "./App.css";
import PlayerCardGrid from "./components/PlayerCardGrid";
import { PlayersProvider } from "./contexts/PlayersContext";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      {/* Provides all children with global player context */}
      <PlayersProvider value={[]}>
        <Header />
        <PlayerCardGrid />
      </PlayersProvider>
    </>
  );
}

export default App;
