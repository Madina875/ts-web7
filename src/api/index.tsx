import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

// //responce if maybe 401 || 403
// api.interceptors.request.use((config) => {});
// api.interceptors.request.use((config) => {});
