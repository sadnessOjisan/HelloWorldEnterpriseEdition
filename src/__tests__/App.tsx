import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../App";

test("shows the children when the checkbox is checked", () => {
  const testMessage = "Test Message";
  render(<App message="Test Message"></App>);
  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
