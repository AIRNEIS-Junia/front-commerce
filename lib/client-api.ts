import axios from "axios";
import * as localforage from "localforage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const airneisStore = localforage.createInstance({
  name: "airneis",
});

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
});

axiosInstance.interceptors.request.use(async (config) => {
  const session = await getServerSession(authOptions);
  const token = session.accessToken;

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
