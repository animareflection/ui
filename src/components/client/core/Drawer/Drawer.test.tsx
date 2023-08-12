import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Button, Drawer } from "components/client";
import { Text } from "components/universal";

const MockDrawer = () => (
  <Drawer
    trigger={<Button>Open Drawer</Button>}
    title="Drawer Title"
    description="Drawer Description"
  >
    <Text mt={2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </Text>
  </Drawer>
);

describe("Drawer", () => {
  it("renders trigger correctly", () => {
    render(<MockDrawer />);

    expect(
      screen.getByRole("button", { name: "Open Drawer" }),
    ).toBeInTheDocument();
  });
});
