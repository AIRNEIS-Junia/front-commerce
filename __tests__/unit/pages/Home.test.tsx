import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders all components correctly", () => {
    render(<Home />);

    // Vérifie si le composant Hero est rendu
    expect(screen.getByTestId("hero")).toBeInTheDocument();

    // Vérifie si le composant HorizontalCarousel est rendu
    expect(screen.getByTestId("horizontal-carousel")).toBeInTheDocument();

    // Vérifie si le composant ProductHighlight est rendu
    expect(screen.getByTestId("product-highlight")).toBeInTheDocument();
  });
});
