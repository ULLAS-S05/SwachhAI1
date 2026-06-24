import axios from "axios";

const api = axios.create({
  baseURL: "https://swachhai1-1.onrender.com/"
});

export default api;
