import React from "react";
import ReactDOM from "react-dom/client";
import HelloWorld from "./HelloWorld";

test("renders Hello, Vite + Jest + TypeScript!", () => {
  // Create a mock DOM container
  const container = document.createElement("div");
  document.body.appendChild(container);

  // Render component into container
  const root = ReactDOM.createRoot(container);
  root.render(<HelloWorld />);

  // Assert that the rendered HTML contains the expected text
  expect(container.innerHTML).toContain("Hello, Vite + Jest + TypeScript!");

  // Clean up
  root.unmount();
});
