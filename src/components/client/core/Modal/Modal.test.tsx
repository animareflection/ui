import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Button, Modal } from "components/client";
import { Text } from "components/universal";

const MockModal = () => (
  <Modal
    trigger={<Button>Open Modal</Button>}
    title="Modal Title"
    description="Modal Description"
  >
    <Text mt={2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </Text>
  </Modal>
);

describe("Modal", () => {
  it("renders trigger correctly", () => {
    render(<MockModal />);

    expect(
      screen.getByRole("button", { name: "Open Modal" }),
    ).toBeInTheDocument();
  });
});
