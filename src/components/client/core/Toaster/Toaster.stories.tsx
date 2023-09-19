import { default as toast } from "react-hot-toast";
import { FiX } from "react-icons/fi";

import { Button, Icon, Toaster } from "components/client";
import { Flex, Grid, panda } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";
import type { JsxStyleProps } from "generated/panda/types";
import type { ToastPosition } from "react-hot-toast";

type Story = StoryObj<typeof Toaster>;

interface Props extends JsxStyleProps {
  title: string;
}
const Toast = ({ title, ...rest }: Props) => (
  <Flex direction="column">
    <panda.button
      pos="absolute"
      cursor="pointer"
      top={2}
      right={2}
      _hover={{ opacity: 0.8 }}
      onClick={(e) => {
        e.stopPropagation();
        toast.dismiss();
      }}
    >
      <Icon as={FiX} h={4} w={4} {...rest} />
    </panda.button>

    <panda.p fontWeight="semibold">{title}</panda.p>
    <panda.p fontSize="sm" {...rest}>
      toast description
    </panda.p>
  </Flex>
);

const notify = () =>
  toast(<Toast title="Hello!" color="fg.muted" />, { icon: "🏝" });
const success = () =>
  toast.success(<Toast title="Success!" color="green.500" />);
const error = () => toast.error(<Toast title="Error" color="red.500" />);
const promise = () => {
  void toast.promise(
    new Promise((resolve, reject) =>
      setTimeout(Math.random() >= 0.5 ? resolve : reject, 2000),
    ),
    {
      loading: <Toast title="Loading..." color="brand.primary.500" />,
      success: <Toast title="Success!" color="green.500" />,
      error: <Toast title="Error" color="red.500" />,
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
