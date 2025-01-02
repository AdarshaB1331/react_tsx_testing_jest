/// <reference types="@testing-library/jest-dom" />
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";
describe("Greet", () => {
  it(" tests correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});
describe("Nested", () => {
  it(" renders with a name ", () => {
    render(<Greet name="Adarsha" />);
    const textElement = screen.getByText("Hello Adarsha");
    expect(textElement).toBeInTheDocument();
  });
});
