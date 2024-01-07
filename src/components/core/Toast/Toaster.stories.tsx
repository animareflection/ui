import { toast } from "sonner";

import { toastState } from "./Toast.spec";
import { Button, Toast, Toaster } from "components/core";
import { Flex, Grid } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

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
    toast(<Toast title={`Position set to ${position}`} />, { position });

  return (
    <Button
      justifyContent="center"
      variant="primary"
      minW={32}
      onClick={showToastPosition}
    >
      {position}
    </Button>
  );
};

export const Default: Story = {
  render: () => (
    <Button variant="primary" onClick={notify}>
      Make a Toast
    </Button>
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex gap={2}>
      <Button variant="primary" onClick={notify}>
        Default
      </Button>
      <Button variant="primary" onClick={success}>
        Success
      </Button>
      <Button variant="primary" onClick={error}>
        Error
      </Button>
      <Button variant="primary" onClick={promise}>
        Promise
      </Button>
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

export const ToastState: Story = {
  ...Default,
  play: toastState,
  name: "[TEST] Toast State",
  tags: ["test"],
};

const meta: Meta<typeof Toaster> = {
  title: "Components/Core/Toaster",
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
