import React, { useState } from "react";
import { postPlayer } from "../hooks/player-API";
import "./AddPlayer.css";

export function AddPlayer({ setPlayersChanged }) {
  //tracks whether user has clicked on add button
  const [displayAddPlayer, setDisplayAddPlayer] = useState(false);
  const [playerName, setPlayerName] = useState("Name");
  const [playerNumber, setPlayerNumber] = useState(99);
  const [playerPosition, setPlayerPosition] = useState("Pos");
  const [playerAge, setPlayerAge] = useState(99);
  const [playerExperience, setPlayerExperience] = useState(99);

  const createPlayerJson = () => {
    // json is same structure as database
    // takes in the values of all inputs in forms and converts to json
    const json = {
      Name: playerName,
      Number: playerNumber,
      Position: playerPosition,
      Age: playerAge,
      Experience: playerExperience,
    };
    return json;
  };
  function handleSubmit(event) {
    //stops default behavior of refreshing page
    event.preventDefault();
    //posts the json created
    postPlayer(createPlayerJson());
    //sets flag for playerGrid to refresh players data
    setPlayersChanged(true);
  }
  return (
    <>
      {/* only renders when user has not clicked add button */}
      {!displayAddPlayer && (
        <button
          className="add-player-button"
          onClick={() => setDisplayAddPlayer(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="48px"
            width="100px"
            className="add-player-icon"
          >
            <path d="M256 0c70.68 0 134.68 28.66 181.01 74.99C483.34 121.32 512 185.32 512 256c0 70.68-28.66 134.68-74.99 181.01C390.68 483.34 326.68 512 256 512c-70.68 0-134.68-28.66-181.01-74.99C28.66 390.68 0 326.68 0 256c0-70.68 28.66-134.68 74.99-181.01C121.32 28.66 185.32 0 256 0zm0 366.69c-14.07 0-25.59-11.55-25.59-25.59v-59.52H170.9c-14.05 0-25.6-11.54-25.6-25.6 0-14.05 11.52-25.59 25.6-25.59h59.51v-59.51c0-14.05 11.53-25.59 25.59-25.59s25.59 11.51 25.59 25.59v59.51h59.52c14.07 0 25.6 11.52 25.6 25.59 0 14.08-11.55 25.6-25.6 25.6h-59.52v59.52c0 14.07-11.52 25.59-25.59 25.59zM412.87 99.13C372.73 58.99 317.26 34.16 256 34.16c-61.26 0-116.73 24.83-156.87 64.97S34.16 194.74 34.16 256c0 61.26 24.83 116.73 64.97 156.87s95.61 64.97 156.87 64.97c61.26 0 116.73-24.83 156.87-64.97s64.97-95.61 64.97-156.87c0-61.26-24.83-116.73-64.97-156.87z" />
          </svg>
        </button>
      )}
      {/* renders when user has clicked on add button */}
      {displayAddPlayer && (
        <>
          <form className="add-player-form" onSubmit={(e) => handleSubmit(e)}>
            <input
              className="add-player-input"
              // updates current value whenever user types
              value={playerName}
              // passes in the value of this element for json construction
              onChange={(e) => setPlayerName(e.target.value)}
            ></input>
            <input
              className="add-player-input"
              value={playerNumber}
              onChange={(e) => setPlayerNumber(e.target.value)}
            ></input>
            <input
              className="add-player-input"
              value={playerPosition}
              onChange={(e) => setPlayerPosition(e.target.value)}
            ></input>
            <input
              className="add-player-input"
              value={playerAge}
              placeholder="Enter Player Age"
              onChange={(e) => setPlayerAge(e.target.value)}
            ></input>
            <input
              className="add-player-input"
              value={playerExperience}
              onChange={(e) => setPlayerExperience(e.target.value)}
            ></input>
            <button className="add-player-submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
            </button>
          </form>
        </>
      )}
    </>
  );
}
