import { Kbd } from "components/core";
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
  title: "Components/Core/Kbd",
  component: Kbd,
} satisfies Meta<typeof Kbd>;

export default meta;
