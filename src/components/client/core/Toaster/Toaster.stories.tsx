import { default as toast } from "react-hot-toast";

import { Button, Toaster } from "components/client";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Toaster>;

const notify = () => toast("Hello World!");
const success = () => toast.success("Success!");
const error = () => toast.error("Error!");
const promise = () => {
  void toast.promise(
    new Promise((resolve, reject) =>
      setTimeout(Math.random() >= 0.5 ? resolve : reject, 2000),
    ),
    {
      loading: "Loading",
      success: "Success",
      error: "Error",
    },
  );
};

export const Default: Story = {
  render: () => <Button onClick={notify}>Make a Toast</Button>,
};

export const Variants: Story = {
  render: () => (
    <Flex gap={2}>
      <Button onClick={notify}>Default</Button>
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
      <Button onClick={promise}>Promise</Button>
    </Flex>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Toaster> = {
  title: "Components/Client/Core/Toaster",
  component: Toaster,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
} satisfies Meta<typeof Toaster>;

export default meta;
