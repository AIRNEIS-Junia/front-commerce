import { AddressInput } from "../types/Address";
import axiosInstance from "./client-api";

export const getAddressesByUser = async (): Promise<AddressInput[]> => {
  try {
    const response = await axiosInstance.get("user/address");
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("user");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
