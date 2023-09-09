import { useEffect, useState } from "react";

import { Button, Toast } from "components/client";
import { useToast } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Toast>;

const ToastOnClick = () => {
  const toast = useToast();

  return (
    <Button
      onClick={() => {
        toast.create({
          title: "Toast Title",
          description: "Toast Description",
          placement: "top-end",
          removeDelay: 3,
        });
      }}
    >
      Open Toast
    </Button>
  );
};

const ToastOnStateChange = () => {
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);

  // NB: timeout is set to demonstrate state change behavior
  useEffect(() => {
    if (isOpen) {
      toast.create({
        title: "Toast Title",
        description: "Toast Description",
        placement: "top-end",
        removeDelay: 3,
      });

      setIsOpen(false);
    }
  }, [isOpen]);

  return (
    <Button
      onClick={() => {
        setTimeout(() => {
          setIsOpen(true);
        }, 1000);
      }}
    >
      Open Toast
    </Button>
  );
};

export const Click: Story = {
  render: () => (
    <Toast>
      <ToastOnClick />
    </Toast>
  ),
};

export const StateChange: Story = {
  render: () => (
    <Toast>
      <ToastOnStateChange />
    </Toast>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Toast> = {
  title: "Components/Client/Core/Toast",
  component: Toast,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Toast>;

export default meta;
