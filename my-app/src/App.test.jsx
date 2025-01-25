import React from "react";  // ✅ Explicitly import React
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Counter increments when button is clicked", () => {
  render(<App />); // Render the App component



  // Find the button with text "count is 0"
  const button = screen.getByRole("button", { name: /count is 0/i });


  // Ensure the button initially shows "count is 0"
  expect(button).toHaveTextContent("count is 0");


  // Click the button
  fireEvent.click(button);

  // Now the button should show "count is 1"
  expect(button).toHaveTextContent("count is 1");

  // Click again
  fireEvent.click(button);

  // Now the button should show "count is 2"
  expect(button).toHaveTextContent("count is 2");
});
