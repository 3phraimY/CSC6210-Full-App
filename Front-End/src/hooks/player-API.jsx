import axios from "axios";

//functions for all API actions

const BaseUrl = "http://localhost:3000/api/players";
export async function postPlayer(playerJson) {
  try {
    await axios.post(`${BaseUrl}/`, playerJson);
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
    await axios.delete(`${BaseUrl}/${playerID}`);
  } catch (error) {
    console.error("Error deleting player: ", error);
  }
}
