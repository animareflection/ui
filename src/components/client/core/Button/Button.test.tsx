import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";

import { Button } from "components/client";

describe("Button", () => {
  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    render(<Button>Click Me!</Button>);
  });
});
