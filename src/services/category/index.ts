import { Category } from "@/types/Category";
import axiosInstance from "@/clients/storeFrontClient";

export const getCategoryByName = async (
  categoryName: string,
): Promise<Category> => {
  try {
    const response = await axiosInstance.get(
      "products/categories/" + categoryName,
    );

    // Vérifiez que la réponse correspond à l'interface Category
    if (response.data && typeof response.data === "object") {
      return response.data as Category;
    } else {
      throw new Error("Response data is not of type Category");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("products/categories");

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
