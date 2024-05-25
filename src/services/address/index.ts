import { AddressInput } from "@/types/Address";
import axiosInstance from "@/clients/storeFrontClient";

export const getAddressesByUser = async (): Promise<AddressInput[]> => {
  try {
    const response = await axiosInstance.get("user/address");
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
