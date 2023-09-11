import { useEffect, useState } from "react";

import { Button, ToastProvider } from "components/client";
import { useToast } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ToastProvider>;

const ToastOnClick = () => {
  const toast = useToast();

  return (
    <Button
      onClick={() => {
        toast.create({
          title: "Toast Title",
          description: "Toast Description",
          placement: "top",
          duration: 3000,
        });
      }}
    >
      Open Toast
    </Button>
  );
};

const ToastOnStateChange = () => {
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined);

  const toast = useToast();

  useEffect(() => {
    if (isSuccess === true) {
      toast.create({
        title: "Success!",
        description: "Successful toast description",
      });

      setIsSuccess(undefined);
    }

    if (isSuccess === false) {
      toast.create({
        title: "Error",
        description: "Error toast description",
      });

      setIsSuccess(undefined);
    }
  }, [isSuccess]);

  const randomSuccess = () => setIsSuccess(Math.random() >= 0.5);

  return <Button onClick={randomSuccess}>Open Toast</Button>;
};

export const Click: Story = {
  render: () => (
    <ToastProvider>
      <ToastOnClick />
    </ToastProvider>
  ),
};

export const StateChange: Story = {
  render: () => (
    <ToastProvider>
      <ToastOnStateChange />
    </ToastProvider>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof ToastProvider> = {
  title: "Components/Client/Core/Toast",
  component: ToastProvider,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof ToastProvider>;

export default meta;
