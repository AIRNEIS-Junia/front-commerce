import axios, { AxiosRequestConfig } from "axios";
import * as localforage from "localforage";

export const airneisStore = localforage.createInstance({
  name: "airneis",
});

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
});

export default axiosInstance;
