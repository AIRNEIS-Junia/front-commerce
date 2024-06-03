import { Category } from "@/types/Category";
import axiosInstance from "@/clients/storeFrontClient";

export const getCategoryBySlug = async (
  categorySlug: string,
): Promise<Category | undefined> => {
  try {
    const response = await axiosInstance.get(
      "products/categories/slug/" + categorySlug,
    );

    if (response.data.slug === categorySlug) {
      return response.data;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCategoryById = async (
  categoryId: string,
): Promise<Category | undefined> => {
  try {
    const response = await axiosInstance.get(
      `products/categories/${categoryId}`,
    );

    return response.data;
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
