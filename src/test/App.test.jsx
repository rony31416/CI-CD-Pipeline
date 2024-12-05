import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  it("renders Hello World message", () => {
    render(<App />);
    const message = screen.getByText(/Hello World from DevOps Pipeline!/i);
    expect(message).toBeInTheDocument(); // Now this will work
  });
});
