import { useEffect, useState } from "react";

import { Button, Toast, ToastProvider } from "components/client";
import { useToast } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ToastProvider>;

const ToastOnClick = () => {
  const toast = useToast();

  return (
    <Toast>
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
    </Toast>
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
        onClose: () => {
          setIsSuccess(undefined);
        },
      });
    }

    if (isSuccess === false) {
      toast.create({
        title: "Error",
        description: "Error toast description",
        onClose: () => {
          setIsSuccess(undefined);
        },
      });
    }
  }, [isSuccess]);

  const randomizeSuccess = () => setIsSuccess(Math.random() >= 0.5);

  return (
    <Toast state={isSuccess ? "success" : "error"}>
      <Button onClick={randomizeSuccess}>Open Toast</Button>
    </Toast>
  );
};

export const Click: Story = {
  render: () => <ToastOnClick />,
};

export const StateChange: Story = {
  render: () => <ToastOnStateChange />,
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof ToastProvider> = {
  title: "Components/Client/Core/Toast",
  component: ToastProvider,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ToastProvider
        defaultOptions={{
          placement: "top",
          duration: 3000,
        }}
      >
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof ToastProvider>;

export default meta;
