import axiosInstance from "@/clients/storeFrontClient";
import { CreditCard } from "@/types/CreditCard";

export const getPaymentCardsByUser = async (): Promise<CreditCard[]> => {
  try {
    const response = await axiosInstance.get("user/credit-card");
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
