import axiosInstance from "../../../lib/client-api";

export const getRandomProducts = async (numberOfProduct: number) => {
  try {
    const response = await axiosInstance.get("products");
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
