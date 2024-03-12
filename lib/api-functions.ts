import axiosInstance from "./client-api";
import { AddressType } from "../types/CommonTypes";

const getAddressesByUser = async (): Promise<AddressType[]> => {
  try {
    const response = await axiosInstance.get("user/address");
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getAddressesByUser;
