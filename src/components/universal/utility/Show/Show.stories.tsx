import { Text, Show } from "components/universal";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Show>;

export const ShowFrom: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Show from="md">
        <Text>Shown from md breakpoint and above (768px)</Text>
      </Show>
      <Show from="lg">
        <Text>Shown from lg breakpoint and above (1024px)</Text>
      </Show>
      <Show from="xl">
        <Text>Shown from xl breakpoint and above (1280px)</Text>
      </Show>
      <Show from="2xl">
        <Text>Shown from 2xl breakpoint and above (1536px)</Text>
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
        <Text>Shown from 2xl breakpoint (1536px)</Text>
      </Show>
    </Flex>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker);
const meta: Meta<typeof Show> = {
  title: "Components/Universal/Utility/Show",
  component: Show,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} as Meta<typeof Show>;

export default meta;
