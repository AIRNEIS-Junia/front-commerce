import axios from "axios";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (typeof window === "undefined") {
      // Server context
      const session = await getServerSession(authOptions);
      if (session && session.user.token.accessToken) {
        config.headers["Authorization"] =
          `Bearer ${session.user.token.accessToken}`;
      }
    } else {
      // client context
      const session: Session | null = await getSession();
      if (session && session.user.token.accessToken) {
        config.headers["Authorization"] =
          `Bearer ${session.user.token.accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
