import { Hide, Text } from "components/universal";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Hide>;

export const HideBelow: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Hide below="sm">
        <Text>Hidden at and below sm breakpoint (640px)</Text>
      </Hide>
      <Hide below="md">
        <Text>Hidden at and below md breakpoint (768px)</Text>
      </Hide>
      <Hide below="lg">
        <Text>Hidden at and below lg breakpoint (1024px)</Text>
      </Hide>
      <Hide below="xl">
        <Text>Hidden at and below xl breakpoint (1280px)</Text>
      </Hide>
      <Hide below="2xl">
        <Text>Hidden at and below 2xl breakpoint (1536px)</Text>
      </Hide>
    </Flex>
  ),
};

export const HideFrom: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Hide from="sm">
        <Text>Hidden from sm breakpoint and above (640px)</Text>
      </Hide>
      <Hide from="md">
        <Text>Hidden from md breakpoint and above (768px)</Text>
      </Hide>
      <Hide from="lg">
        <Text>Hidden from lg breakpoint and above (1024px)</Text>
      </Hide>
      <Hide from="xl">
        <Text>Hidden from xl breakpoint and above (1280px)</Text>
      </Hide>
      <Hide from="2xl">
        <Text>Hidden from 2xl breakpoint and above (1536px)</Text>
      </Hide>
    </Flex>
  ),
};

const meta = {
  title: "Components/Universal/Utility/Hide",
  component: Hide,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} as Meta<typeof Hide>;

export default meta;
