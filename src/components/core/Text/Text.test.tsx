import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";

import Text from "./Text";

describe("Text", () => {
  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    render(<Text>Hello!</Text>);
  });
});
