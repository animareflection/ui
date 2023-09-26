import { drawerState } from "./Drawer.spec";
import { Button, Drawer } from "components/client";
import { Text } from "components/universal";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Drawer>;

export const RightPlacement: Story = {
  render: () => (
    <Drawer
      trigger={<Button>Open Drawer</Button>}
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

export const LeftPlacement: Story = {
  render: () => (
    <Drawer
      placement="left"
      trigger={<Button>Open Drawer</Button>}
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

export const WithContext: Story = {
  render: () => (
    <Drawer
      trigger={<Button>Open Drawer</Button>}
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
  title: "Components/Client/Core/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Drawer>;

export default meta;
