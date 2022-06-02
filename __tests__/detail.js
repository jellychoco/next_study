import { getByTitle, render, screen } from "@testing-library/react";
import Detail from "../pages/Detail";
import "@testing-library/jest-dom";

describe("Detail", () => {
  it("renders a heading", () => {
    render(<Detail />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
