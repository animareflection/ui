import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Spinner } from "components/universal";

describe("Spinner", () => {
  it("renders correctly", () => {
    render(<Spinner />);

    expect(screen.getByRole("spinner")).toHaveClass(
      "spinner",
      "animation_infinite-spin",
    );
  });
});
