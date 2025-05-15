import axios from "axios";

const API_KEY = "AIzaSyAHWqMYjoeWtPO6TDnjHagPJ2nbe_x7KiI";

export const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: API_KEY,
  },
});
