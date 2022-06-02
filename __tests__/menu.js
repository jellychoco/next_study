import { getByTitle, render, screen } from "@testing-library/react";
import Menu from "../components/Menu";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("메뉴가 렌더링 되어야 한다.", () => {
    const { getByRole } = render(<Menu />);

    const menu = getByRole("navigation", {
      name: "fastcampus",
    });

    expect(menu).toBeInTheDocument();
  });
});
