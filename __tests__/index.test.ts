import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("renders a heading", async () => {
    render(await Home());

    const heading = screen.getByText("Enjoy our feature categories");

    expect(heading).toBeInTheDocument();
  });
});
