import axiosInstance from "@/clients/storeFrontClient";

export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("user");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
