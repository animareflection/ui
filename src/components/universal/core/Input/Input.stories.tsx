import { Input } from "components/universal";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => <Input label="Input Label" placeholder="Placeholder" />,
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Input label="Input Label" size="2xs" placeholder="Placeholder" />
      <Input label="Input Label" size="xs" placeholder="Placeholder" />
      <Input label="Input Label" size="sm" placeholder="Placeholder" />
      <Input label="Input Label" placeholder="Placeholder" />
      <Input label="Input Label" size="lg" placeholder="Placeholder" />
      <Input label="Input Label" size="xl" placeholder="Placeholder" />
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
