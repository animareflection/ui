import { Spinner } from "components/universal";
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

const meta = {
  title: "Components/Universal/Core/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Spinner>;

export default meta;
