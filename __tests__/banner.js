import { getByTitle, render, screen } from "@testing-library/react";
import Banner from "../components/Banner";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("배너가 렌더링 되어야 한다.", () => {
    const { getByRole } = render(<Banner />);

    const banner = getByRole("banner");

    expect(banner).toBeInTheDocument();
  });
});
