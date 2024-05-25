import axiosInstance from "@/clients/storeFrontClient";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("products");

    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      throw new Error("Response data is not an array");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
