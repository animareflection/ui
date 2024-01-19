import { Text } from "components/core";
import { Show } from "components/utility";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Show>;

export const ShowFrom: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Show from="sm">
        <Text>Shown above sm breakpoint (640px)</Text>
      </Show>
      <Show from="md">
        <Text>Shown above md breakpoint (768px)</Text>
      </Show>
      <Show from="lg">
        <Text>Shown above lg breakpoint (1024px)</Text>
      </Show>
      <Show from="xl">
        <Text>Shown above xl breakpoint (1280px)</Text>
      </Show>
      <Show from="2xl">
        <Text>Shown above 2xl breakpoint (1536px)</Text>
      </Show>
    </Flex>
  ),
};

export const ShowBelow: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Show below="sm">
        <Text>Shown below sm breakpoint (640px)</Text>
      </Show>
      <Show below="md">
        <Text>Shown below md breakpoint (768px)</Text>
      </Show>
      <Show below="lg">
        <Text>Shown below lg breakpoint (1024px)</Text>
      </Show>
      <Show below="xl">
        <Text>Shown below xl breakpoint (1280px)</Text>
      </Show>
      <Show below="2xl">
        <Text>Shown below 2xl breakpoint (1536px)</Text>
      </Show>
    </Flex>
  ),
};

const meta = {
  title: "Components/Utility/Show",
  component: Show,
  tags: ["autodocs"],
} as Meta<typeof Show>;

export default meta;
