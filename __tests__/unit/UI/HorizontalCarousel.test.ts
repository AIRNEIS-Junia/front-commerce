import { render, screen } from "@testing-library/react";
import HorizontalCarousel from "@/components/UI/Carousel/HorizontalCarousel/HorizontalCarousel";
import "@testing-library/jest-dom";

// Mock data
const categories = [
  {
    id: 1,
    images: ["/images/Home/Hero.web"],
    alt: "Product 1",
    name: "Product name 1",
  },
  {
    id: 2,
    images: ["/images/Home/Hero.web"],
    alt: "Product 2",
    name: "Product name 2",
  },
  {
    id: 3,
    images: ["/images/Home/Hero.web"],
    alt: "Product 3",
    name: "Product name 3",
  },
  {
    id: 4,
    images: ["/images/Home/Hero.web"],
    alt: "Product 4",
    name: "Product name 5",
  },
];

describe("HorizontalCarousel", () => {
  test("renders carousel with all items correctly", async () => {
    render(HorizontalCarousel({ categories }));

    categories.forEach((category) => {
      const productNames = screen.getAllByText(category.name);
      const productAlts = screen.getAllByAltText(category.alt);

      productNames.forEach((element) => {
        expect(element).toBeInTheDocument();
      });

      productAlts.forEach((element) => {
        expect(element).toBeInTheDocument();
        expect(element.getAttribute("src")).not.toBeUndefined();
        expect(element.getAttribute("src")).not.toEqual("");
      });
    });
  });
});
