import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";
import { FiHeart } from "react-icons/fi";

import { Icon } from "components/universal";

describe("Icon", () => {
  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    render(<Icon as={FiHeart} color="brand.primary.900" />);
  });
});
