import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
});

axiosInstance.interceptors.request.use(async (config) => {
  try {
    if (typeof window === "undefined") {
      // Requête depuis le serveur
      const session = await getServerSession(authOptions);

      if (session && session.accessToken) {
        const token = session.accessToken;
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  } catch (e) {
    console.error("Error in request interceptor:", e);
    throw e;
  }
});

export default axiosInstance;
