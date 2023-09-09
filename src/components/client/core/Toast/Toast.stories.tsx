import { Button, Toast } from "components/client";
import { useToast } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Toast>;

const ToastDemo = () => {
  const toast = useToast();

  return (
    <Toast>
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
    </Toast>
  );
};

export const Default: Story = {
  render: () => <ToastDemo />,
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Toast> = {
  title: "Components/Client/Core/Toast",
  component: Toast,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Toast>;

export default meta;
