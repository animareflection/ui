import { Button, Modal } from "components/client";
import { Text } from "components/universal";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>Open Modal</Button>,
    title: "Modal Title",
    description: "Modal Description",
    children: (
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    ),
  },
};

export const WithContext: Story = {
  args: {
    trigger: <Button>Open Modal</Button>,
    title: "Modal Title",
    description: "Modal Description",
    children: ({ isOpen }) => <Text mt={2}>Open: {String(isOpen)}</Text>,
  },
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Modal> = {
  title: "Components/Client/Core/Modal",
  component: Modal,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Modal>;

export default meta;
