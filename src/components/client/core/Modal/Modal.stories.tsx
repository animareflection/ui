import {
  Modal,
  ModalBackdrop,
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalDescription,
} from "components/client";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalBackdrop />
      <ModalContainer>
        <ModalContent>
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
