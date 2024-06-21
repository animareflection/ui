import { drawerState } from "./Drawer.spec";
import { Button, Drawer, Text } from "components/core";
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
      <Button
        variant="primary"
        w="fit-content"
        justifyContent="center"
        minW={24}
      >
        {triggerLabel}
      </Button>
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
      trigger={<Button variant="primary">Open Drawer</Button>}
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
      trigger={<Button variant="primary">Open Drawer</Button>}
      title="Drawer Title"
      description="Drawer Description"
    >
      {/* @ts-ignore TODO */}
      {({ open }) => <Text mt={2}>Open: {String(open)}</Text>}
    </Drawer>
  ),
};

export const DrawerState: Story = {
  ...WithContext,
  play: drawerState,
  name: "[TEST] Drawer State",
  tags: ["test"],
};

const meta: Meta = {
  title: "Components/Core/Drawer",
  component: Drawer,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;
