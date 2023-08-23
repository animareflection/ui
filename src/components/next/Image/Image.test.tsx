import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Image } from "components/next";

describe("Image", () => {
  it("renders correctly", () => {
    render(
      <Image
        src="/img/logo.png"
        alt="AR logo"
        containerProps={{
          h: 40,
          w: 40,
        }}
      />,
    );

    expect(screen.getByAltText(/ar logo/i)).toBeInTheDocument();
  });
});
