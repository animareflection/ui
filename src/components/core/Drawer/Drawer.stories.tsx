import { drawerState } from "./Drawer.spec";
import { Drawer, Text } from "components/core";
import { Flex } from "generated/panda/jsx";
import { useBreakpointValue } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";
import type { DrawerProps } from "components/core";

type Story = StoryObj<typeof Drawer>;

interface TemplateProps extends DrawerProps {
  triggerLabel: string;
}

const DrawerTemplate = ({ triggerLabel, ...rest }: TemplateProps) => (
  <Drawer
    trigger={
      <Flex minW={24} w="100%" justify="center">
        {triggerLabel}
      </Flex>
    }
    title="Drawer Title"
    description="Drawer Description"
    {...rest}
  >
    <Text mt={2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </Text>
  </Drawer>
);

const BreakpointExample = () => {
  const placement: DrawerProps["placement"] = useBreakpointValue({
    base: "bottom",
    md: undefined,
  });

  return (
    <Drawer
      trigger={<Text>Open Drawer</Text>}
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

export const Placements: Story = {
  render: () => (
    <Flex direction={{ base: "column", md: "row" }} gap={2}>
      <DrawerTemplate triggerLabel="Right" />
      <DrawerTemplate placement="left" triggerLabel="Left" />
      <DrawerTemplate placement="bottom" triggerLabel="Bottom" />
      <DrawerTemplate placement="top" triggerLabel="Top" />
    </Flex>
  ),
};

export const BreakpointPlacement: Story = {
  render: () => <BreakpointExample />,
};

export const WithContext: Story = {
  render: () => (
    <Drawer
      trigger={<Text>Open Drawer</Text>}
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
