import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PlayersProvider } from "./contexts/PlayersContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlayersProvider value={[]}>
      <App />
    </PlayersProvider>
  </StrictMode>
);
