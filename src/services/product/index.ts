import axiosInstance from '@/clients/storeFrontClient';
import { Product } from '@/types/Product';


export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("products");

    if (Array.isArray(response.data.results)) {
      return response.data.results.map((product: Record<string, any>) => {
        const updatedAtTimestamp = Date.parse(product.updatedAt) / 1000;
        const createdAtTimestamp = Date.parse(product.createdAt) / 1000;
        return {
          ...product,
          updatedAt: updatedAtTimestamp.toFixed(0),
          createdAt: createdAtTimestamp.toFixed(0),
        };
      });
    } else {
      console.error("Response data results is not an array");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductBySlug = async (
  productSlug: string,
): Promise<Product | undefined> => {
  try {
    const response = await axiosInstance.get(
      "products/search/slug/" + productSlug,
    );

    if (response.data.slug === productSlug) {
      return response.data;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductsByCategoryId = async (
  categoryId: string,
): Promise<Product[] | undefined> => {
  try {
    const response = await axiosInstance.get(`products/search/category/${categoryId}`);

    return response.data;
  } catch (error) {
    console.error("Error while fetching product by category :", error);
    throw error;
  }
};
