import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.dev.myplazze.com/api/v1/practice",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default instance;
