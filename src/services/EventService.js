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
  async getEvents(perPage = 5, page = 1) {
    const url = `/events/?_limit=${perPage}&_page=${page}`;
    const response = await apiClient.get(url);
    const { data } = response;
    const maxItems = response.headers["x-total-count"];
    return { data, maxItems };
  },
  async getEventDetails(id) {
    const response = await apiClient.get(`/events/${id}`);
    return response.data;
  },
};
