import { Modal, Text } from "components/core";
import { useDisclosure } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentType } from "react";

type Story = StoryObj<typeof useDisclosure>;

const DisclosureExample = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Modal
      trigger="Open Modal"
      title="Modal Title"
      description="Modal Description"
      open={isOpen}
      onOpenChange={onToggle}
    >
      <Text mt={2}>{isOpen ? "Open" : "Closed"}</Text>
    </Modal>
  );
};

export const Default: Story = {
  render: () => <DisclosureExample />,
};

const meta = {
  title: "Hooks/useDisclosure",
  tags: ["autodocs"],
  // NB: type coercion here to allow `useDisclosure` Storybook metadata to render (e.g. JSDoc, hook parameters)
  component: useDisclosure as unknown as ComponentType,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof useDisclosure>;

export default meta;
