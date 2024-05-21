import React from "react";
import { render, screen, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductHighlight from "@/components/Home/ProductHighlight"; // Assurez-vous que le chemin est correct

jest.mock("next/image", () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
));
jest.mock("next/link", () =>
  // eslint-disable-next-line react/display-name
  ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
);
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

interface Product {
  images: string[];
  name: string;
  description: string;
}

describe("ProductHighlight", () => {
  const product: Product = {
    images: ["/images/placeholder-image.jpg"],
    name: "Product Name",
    description: "Product Description",
  };

  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<ProductHighlight product={product} />);
  });

  it("renders correctly with product data", () => {
    // Vérifie si le nom du produit est rendu
    expect(screen.getByText(product.name)).toBeInTheDocument();

    // Vérifie si la description du produit est rendue
    expect(screen.getByText(product.description)).toBeInTheDocument();

    // Vérifie si le lien 'VIEW PRODUCT' est rendu avec le bon href
    expect(screen.getByText("VIEW PRODUCT")).toBeInTheDocument();
    expect(screen.getByText("VIEW PRODUCT").closest("a")).toHaveAttribute(
      "href",
      "/",
    );

    // Vérifie si l'image est rendue avec le bon src
    const img = screen.getByAltText("") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("/images/placeholder-image.jpg");
  });
});
