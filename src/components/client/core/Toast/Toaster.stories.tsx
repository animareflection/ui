import { default as toast } from "react-hot-toast";

import { Button, Toast, Toaster } from "components/client";
import { Flex, Grid } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";
import type { ToastPosition } from "react-hot-toast";

type Story = StoryObj<typeof Toaster>;

const closeToast = () => toast.dismiss();

const notify = () =>
  toast(
    <Toast
      title="Hello!"
      description="toast description"
      onClose={closeToast}
    />,
    { icon: "🏝" },
  );
const success = () =>
  toast.success(
    <Toast
      variant="success"
      title="Success!"
      description="toast description"
    />,
  );
const error = () =>
  toast.error(
    <Toast variant="error" title="Error" description="toast description" />,
  );
const promise = () => {
  void toast.promise(
    new Promise((resolve, reject) =>
      setTimeout(Math.random() >= 0.5 ? resolve : reject, 2000),
    ),
    {
      loading: (
        <Toast
          variant="loading"
          title="Loading..."
          description="toast description"
        />
      ),
      success: (
        <Toast
          variant="success"
          title="Success!"
          description="toast description"
        />
      ),
      error: (
        <Toast variant="error" title="Error" description="toast description" />
      ),
    },
  );
};

const PositionTemplate = ({ position }: { position: ToastPosition }) => {
  const showToastPosition = () =>
    toast(`Position set to ${position}`, { position });

  return (
    <Button minW={32} onClick={showToastPosition}>
      {position}
    </Button>
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

export const Positions: Story = {
  render: () => (
    <Flex h="screen" w="full" justify="center" align="center">
      <Grid columns={{ base: 2, sm: 3 }} justifyContent="center">
        <PositionTemplate position="top-left" />
        <PositionTemplate position="top-center" />
        <PositionTemplate position="top-right" />
        <PositionTemplate position="bottom-left" />
        <PositionTemplate position="bottom-center" />
        <PositionTemplate position="bottom-right" />
      </Grid>
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
