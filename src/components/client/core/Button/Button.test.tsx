import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Button } from "components/client";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button color="brand.primary.900">Click Me!</Button>);

    expect(screen.getByText(/click me!/i)).toHaveClass(
      "text_brand.primary.900",
      "bg_brand.primary.400",
    );
  });
});
