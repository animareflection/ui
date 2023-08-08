import {
  Button,
  Modal,
  ModalBackdrop,
  ModalBody,
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
          <ModalCloseTrigger pos="absolute" top={3} right={3}>
            <Button bgColor="black" py={1}>
              Close
            </Button>
          </ModalCloseTrigger>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>Modal Description</ModalDescription>
          <ModalBody maxW={80}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ModalBody>
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
