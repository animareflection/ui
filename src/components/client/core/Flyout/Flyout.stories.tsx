import { flyoutState } from "./Flyout.spec";
import { Button, Flyout } from "components/client";
import { Text } from "components/universal";
import { Flex, Grid } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Flyout>;

type Placement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

const FlyoutTemplate = ({ placement }: { placement: Placement }) => (
  <Flyout
    positioning={{
      placement: placement,
    }}
    trigger={<Button minW={32}>{placement}</Button>}
    title="Flyout Title"
  >
    <Text mt={2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </Text>
  </Flyout>
);

export const Default: Story = {
  render: () => (
    <Flyout trigger={<Button>Open Flyout</Button>} title="Flyout Title">
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Flyout>
  ),
};

export const Placement: Story = {
  render: () => (
    <Flex h="screen" w="full" justify="center" align="center">
      <Grid columns={{ base: 2, sm: 3 }} justifyContent="center">
        <FlyoutTemplate placement="bottom-start" />
        <FlyoutTemplate placement="bottom" />
        <FlyoutTemplate placement="bottom-end" />
        <FlyoutTemplate placement="left-start" />
        <FlyoutTemplate placement="left" />
        <FlyoutTemplate placement="left-end" />
        <FlyoutTemplate placement="right-start" />
        <FlyoutTemplate placement="right" />
        <FlyoutTemplate placement="right-end" />
        <FlyoutTemplate placement="top-start" />
        <FlyoutTemplate placement="top" />
        <FlyoutTemplate placement="top-end" />
      </Grid>
    </Flex>
  ),
};

export const FlyoutState: Story = {
  ...Default,
  play: flyoutState,
  name: "[TEST] Flyout State",
  tags: ["test"],
};

// NB: type annotation resolves type portability error
const meta: Meta = {
  title: "Components/Client/Core/Flyout",
  component: Flyout,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Flyout>;

export default meta;
