import { openState } from "./Modal.spec";
import { Button, Modal } from "components/client";
import { Text } from "components/universal";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
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
  ),
};

export const WithContext: Story = {
  render: () => (
    <Modal
      trigger={<Button>Open Modal</Button>}
      title="Modal Title"
      description="Modal Description"
    >
      {({ isOpen }) => <Text mt={2}>Open: {String(isOpen)}</Text>}
    </Modal>
  ),
};

export const OpenState: Story = {
  ...WithContext,
  play: openState,
  name: "[TEST] Open State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Modal> = {
  title: "Components/Client/Core/Modal",
  component: Modal,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Modal>;

export default meta;
