import { drawerState } from "./Drawer.spec";
import { Drawer, Text } from "components/core";
import { useBreakpointValue } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";
import type { DrawerProps } from "components/core";

type Story = StoryObj<typeof Drawer>;

const BreakpointExample = () => {
  const placement: DrawerProps["placement"] = useBreakpointValue({
    base: "bottom",
    md: undefined,
  });

  return (
    <Drawer
      trigger="Open Drawer"
      title="Drawer Title"
      description="Drawer Description"
      placement={placement}
    >
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Drawer>
  );
};

export const RightPlacement: Story = {
  render: () => (
    <Drawer
      trigger="Open Drawer"
      title="Drawer Title"
      description="Drawer Description"
      placement="bottom"
    >
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Drawer>
  ),
};

export const LeftPlacement: Story = {
  render: () => (
    <Drawer
      placement="left"
      trigger="Open Drawer"
      title="Drawer Title"
      description="Drawer Description"
    >
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Drawer>
  ),
};

export const TopPlacement: Story = {
  render: () => (
    <Drawer
      placement="top"
      trigger="Open Drawer"
      title="Drawer Title"
      description="Drawer Description"
    >
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Drawer>
  ),
};

export const BottomPlacement: Story = {
  render: () => (
    <Drawer
      placement="bottom"
      trigger="Open Drawer"
      title="Drawer Title"
      description="Drawer Description"
    >
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Drawer>
  ),
};

export const BreakpointPlacement: Story = {
  render: () => <BreakpointExample />,
};

export const WithContext: Story = {
  render: () => (
    <Drawer
      trigger="Open Drawer"
      title="Drawer Title"
      description="Drawer Description"
    >
      {({ isOpen }) => <Text mt={2}>Open: {String(isOpen)}</Text>}
    </Drawer>
  ),
};

export const DrawerState: Story = {
  ...WithContext,
  play: drawerState,
  name: "[TEST] Drawer State",
  tags: ["test"],
};

const meta = {
  title: "Components/Core/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Drawer>;

export default meta;
