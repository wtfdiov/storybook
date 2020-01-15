import { render, getByText } from "@testing-library/react";
import React from "react";
import { Button } from "./styles";

describe("Button", () => {
  test("should display children content", () => {
    const text = "Label";
    const { container } = render(<Button>{text}</Button>);

    getByText(container, text);
  });
});
