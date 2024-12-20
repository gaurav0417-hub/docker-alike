import axios from "axios";

// Configure Axios
const api = axios.create({
  baseURL: "http://localhost:5000",
});

// Get list of running containers
export const getContainers = async () => {
  const response = await api.get("/list");
  return response.data;
};

// Start a new container
export const startContainer = async (image, command) => {
  const response = await api.post("/start", { image, command });
  return response.data;
};
