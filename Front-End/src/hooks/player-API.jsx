import axios from "axios";

const BaseUrl = "http://localhost:3000/api/players";
export function postPlayer(playerJson) {
  try {
    const response = axios.post(`${BaseUrl}/${playerJson}`);
    console.log("Post player", response);
  } catch (error) {
    console.error("Error posting player: ", error);
  }
}
export function getAllPlayers() {
  try {
    const response = axios.get(`${BaseUrl}/`);
    console.log("Get all players", response);
  } catch (error) {
    console.error("Error getting all players: ", error);
  }
}
