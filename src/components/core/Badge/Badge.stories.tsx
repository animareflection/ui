import { Badge } from "components/core";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => <Badge>Badge</Badge>,
};
export const Subtle: Story = {
  render: () => <Badge variant="subtle">Badge</Badge>,
};
export const Outline: Story = {
  render: () => <Badge variant="outline">Badge</Badge>,
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

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Badge> = {
  title: "Components/Universal/Core/Badge",
  component: Badge,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Badge>;

export default meta;
