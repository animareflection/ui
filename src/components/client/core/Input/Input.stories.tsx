import { Input } from "components/client";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => <Input label="Input Label" placeholder="Placeholder" />,
};

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Input placeholder="Default" />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="flushed" placeholder="Flushed" />
      <Input variant="unstyled" placeholder="Unstyled" />
      <Input leftAddon="https://" placeholder="mywebsite" rightAddon=".com" />
    </Flex>
  ),
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
  title: "Components/Client/Core/Input",
  component: Input,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Input>;

export default meta;
