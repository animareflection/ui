import { Spinner } from "components/core";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Spinner>;

export const Sizes: Story = {
  render: () => (
    <Flex gap={4}>
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
    </Flex>
  ),
};

const meta: Meta<typeof Spinner> = {
  title: "Components/Core/Spinner",
  component: Spinner,
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
