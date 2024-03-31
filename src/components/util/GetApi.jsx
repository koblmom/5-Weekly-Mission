import axios from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr/";

async function fetchData(url) {
  try {
    const response = await axios.get(`${BASE_URL}${url}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchUserData() {
  return await fetchData("api/sample/user");
}

export async function fetchFolderData() {
  return await fetchData("api/sample/folder");
}
