import { getByTitle, render, screen } from "@testing-library/react";
import Index from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("강의목록이 렌더링 되어야 한다.", () => {
    const { getByTitle } = render(<Index />);

    const lectureList = getByTitle("lectureList");

    expect(lectureList).toBeInTheDocument();
  });

  it("renders a heading", () => {
    render(<Index />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
