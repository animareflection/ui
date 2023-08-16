import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Text } from "components/universal";

describe("Text", () => {
  it("renders primary variant correctly", () => {
    render(<Text fontFamily="primary">Hello!</Text>);

    expect(screen.getByText(/hello!/i)).toHaveClass("font_primary");
  });

  it("renders code variant correctly", () => {
    render(<Text fontFamily="code">Code demo</Text>);

    expect(screen.getByText(/code demo/i)).toHaveClass("font_code");
  });

  it("renders font styles correctly", () => {
    render(
      <Text fontWeight={400} fontStyle="italic">
        Hello!
      </Text>,
    );

    expect(screen.getByText(/hello!/i)).toHaveClass(
      "font_400",
      "font-style_italic",
    );
  });
});
