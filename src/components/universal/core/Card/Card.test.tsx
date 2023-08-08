import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";

import { Card, CardHeader, CardBody, CardFooter } from "components/universal";

describe("Card", () => {
  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    render(
      <Card>
        <CardHeader>This is the Header</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </CardBody>
        <CardFooter>This is the Footer</CardFooter>
      </Card>,
    );
  });
});
