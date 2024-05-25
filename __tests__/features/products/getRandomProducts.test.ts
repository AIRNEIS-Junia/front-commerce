import "@testing-library/jest-dom";
import axiosInstance from "@/clients/storeFrontClient";
import { getProducts } from "@/services/product";

// Mock Axios to simulate API response
jest.mock("@/clients/storeFrontClient");

describe("geProducts function", () => {
  it("returns an array of products", async () => {
    // Define a mocked response
    const mockProducts = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ];

    // Define the expected behavior of the mocked Axios instance
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: mockProducts,
    });

    // Call the getRandomProducts function
    const result = await getProducts(2);

    // Verify that the function returns an array of products
    expect(result).toEqual(mockProducts);
  });

  it("throws an error if response data is not an array", async () => {
    // Define a non-conforming mocked response (not an array)
    const mockResponse = { data: "not an array" };

    // Define the expected behavior of the mocked Axios instance
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce(mockResponse);

    // Call the getRandomProducts function and expect it to throw an error
    await expect(getProducts(2)).rejects.toThrow(
      "Response data is not an array",
    );
  });
});
