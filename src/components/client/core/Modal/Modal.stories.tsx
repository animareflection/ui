import {
  Button,
  Modal,
  ModalBackdrop,
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalCloseTrigger,
  ModalTrigger,
} from "components/client";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalBackdrop />
      <ModalContainer>
        <ModalContent>
          <ModalCloseTrigger>X</ModalCloseTrigger>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>Modal Description</ModalDescription>
        </ModalContent>
      </ModalContainer>
    </Modal>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Modal> = {
  title: "Client/Core/Modal",
  component: Modal,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Modal>;

export default meta;
