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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJzdHJpbmciLCJsYXN0TmFtZSI6InN0cmluZyIsImVtYWlsIjoic3RyaW5nNUBnbWFpbC5jb20iLCJzdWIiOiIzNTNkYzYyZi1lZmVlLTQ2NzctYmY3NC02ZGZjYTJhZWE0YmQiLCJyb2xlcyI6ImNsaWVudCIsImlhdCI6MTcxMDQ5ODM2N30.iYkQrX83gxunE_v5KNeQZg-oyb9sbElK_bYyOzvAMag";
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
