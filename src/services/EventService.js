import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/petrfaitl/mockdb",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    ContentType: "application/json",
  },
});

export default {
  async getEvents() {
    const response = await apiClient.get("/events");
    return response.data;
  },
  async getEventDetails(id) {
    const response = await apiClient.get(`/events/${id}`);
    return response.data;
  },
};
