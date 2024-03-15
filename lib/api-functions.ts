import axiosInstance from "./client-api";
import { AddressType, UserType } from "../types/CommonTypes";

export const getAddressesByUser = async (): Promise<AddressType[]> => {
  try {
    const response = await axiosInstance.get("user/address");
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCurrentUser = async (): Promise<UserType> => {
  try {
    const response = await axiosInstance.get("user");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
