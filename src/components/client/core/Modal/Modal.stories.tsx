import { modalState } from "./Modal.spec";
import { Button, Modal } from "components/client";
import { Text } from "components/universal";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Modal>;

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

export const ModalState: Story = {
  ...WithContext,
  play: modalState,
  name: "[TEST] Modal State",
  tags: ["test"],
};

const meta = {
  title: "Components/Client/Core/Modal",
  component: Modal,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Modal>;

export default meta;
