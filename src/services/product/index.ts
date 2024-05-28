import axiosInstance from "@/clients/storeFrontClient";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("products");

    if (Array.isArray(response.data)) {
      const products = response.data.map((product) => {
        const updatedAtTimestamp = Date.parse(product.updatedAt) / 1000;
        const createdAtTimestamp = Date.parse(product.createdAt) / 1000;

        return {
          ...product,
          updatedAt: updatedAtTimestamp.toFixed(0),
          createdAt: createdAtTimestamp.toFixed(0),
        };
      });
      return products;
    } else {
      throw new Error("Response data is not an array");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
