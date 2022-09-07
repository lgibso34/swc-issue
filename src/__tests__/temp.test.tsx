import { screen, render } from "@testing-library/react";
import Temp from "../temp";

it("should render button", () => {
  render(<Temp />);

  expect(screen.getByText(/yo yo yo/i)).toBeTruthy();
});
