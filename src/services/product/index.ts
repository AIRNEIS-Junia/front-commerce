import axiosInstance from "../../../lib/client-api";

export const getRandomProducts = async (numberOfProduct: number) => {
  try {
    const response = await axiosInstance.get("products");
    console.log("response.data", response.data);

    // Assurez-vous que response.data est un tableau avant de le retourner
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
