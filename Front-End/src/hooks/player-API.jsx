import axios from "axios";

const BaseUrl = "http://localhost:3000/api/players";
export async function postPlayer(playerJson) {
  try {
    const response = await axios.post(`${BaseUrl}/`, playerJson);
    console.log("Post player", response);
  } catch (error) {
    console.error("Error posting player: ", error);
  }
}
export async function getAllPlayers() {
  try {
    const response = await axios.get(`${BaseUrl}/`);
    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.error("Error getting all players: ", error);
  }
}
export async function deletePlayer(playerID) {
  try {
    const response = await axios.delete(`${BaseUrl}/${playerID}`);
    console.log("Player Deleted", response);
  } catch (error) {
    console.error("Error deleting player: ", error);
  }
}
