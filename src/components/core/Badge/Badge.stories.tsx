import { Badge } from "components/core";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => <Badge>Badge</Badge>,
};

export const Variants: Story = {
  render: () => (
    <Flex gap={2}>
      <Badge variant="primary">Badge</Badge>
      <Badge variant="subtle">Badge</Badge>
      <Badge variant="outline">Badge</Badge>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap={2} alignItems="center">
      <Badge size="sm">Badge</Badge>
      <Badge>Badge</Badge>
      <Badge size="lg">Badge</Badge>
    </Flex>
  ),
};

const meta = {
  title: "Components/Core/Badge",
  component: Badge,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Badge>;

export default meta;
