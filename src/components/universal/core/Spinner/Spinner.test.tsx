import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Spinner } from "components/universal";

describe("Spinner", () => {
  it("renders correctly", () => {
    render(<Spinner color="brand.primary.500" h={8} w={8} />);

    expect(screen.getByRole("spinner")).toHaveClass(
      "text_brand.primary.500",
      "animation_infinite-spin",
    );
  });
});
