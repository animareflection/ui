import { modalState } from "./Modal.spec";
import { Modal, Text } from "components/core";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <Modal
      trigger="Open Modal"
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
      trigger="Open Modal"
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
  title: "Components/Core/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
