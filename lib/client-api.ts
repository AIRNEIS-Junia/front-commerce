import axios from "axios";
import * as localforage from "localforage";

export const airneisStore = localforage.createInstance({
  name: "airneis",
});

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
});

axiosInstance.interceptors.request.use(async (config) => {
  // const token = await airneisStore.getItem("accessToken");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJzdHJpbmciLCJsYXN0TmFtZSI6InN0cmluZyIsInN1YiI6ImFlNzg2OGQxLTZhNGYtNDFjZC1iNWM3LTAxNTljNGIxNWVjNSIsInJvbGVzIjoiY2xpZW50IiwiaWF0IjoxNzEwMjQwNDE0fQ.FXBeU1Y-2KpAbbsCE2gmGWQ5ZosrXaNyFJp4LachX_Q";
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
