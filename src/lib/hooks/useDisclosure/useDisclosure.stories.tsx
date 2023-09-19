import { Button, Modal } from "components/client";
import { Text } from "components/universal";
import { useDisclosure } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Modal>;

const DisclosureExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({});

  return (
    <Modal
      trigger={<Button>Open Modal</Button>}
      title="Modal Title"
      description="Modal Description"
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Text mt={2}>{isOpen ? "Open" : "Closed"}</Text>
    </Modal>
  );
};

export const Default: Story = {
  render: () => <DisclosureExample />,
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Modal> = {
  title: "Hooks/useDisclosure",
  component: Modal,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Modal>;

export default meta;
