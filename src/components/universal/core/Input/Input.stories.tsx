import { Input } from "components/universal";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => <Input placeholder="Placeholder" />,
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Input size="2xs" placeholder="Placeholder" />
      <Input size="xs" placeholder="Placeholder" />
      <Input size="sm" placeholder="Placeholder" />
      <Input placeholder="Placeholder" />
      <Input size="lg" placeholder="Placeholder" />
      <Input size="xl" placeholder="Placeholder" />
      <Input size="2xl" placeholder="Placeholder" />
    </Flex>
  ),
};

const meta: Meta<typeof Input> = {
  title: "Components/Universal/Core/Input",
  component: Input,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Input>;

export default meta;
