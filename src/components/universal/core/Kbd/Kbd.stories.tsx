import { Kbd } from "components/universal";
import { HStack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: () => (
    <HStack gap={4}>
      <Kbd>⌘</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>⌘ + K</Kbd>
      <Kbd>Ctrl + K</Kbd>
    </HStack>
  ),
};

const meta = {
  title: "Components/Universal/Core/Kbd",
  component: Kbd,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Kbd>;

export default meta;
