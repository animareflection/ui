import { textareaState } from "./Textarea.spec";
import { Textarea } from "components/core";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => <Textarea label="Textarea Label" placeholder="Placeholder" />,
};

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Textarea placeholder="Default" />
      <Textarea variant="filled" placeholder="Filled" />
      <Textarea variant="flushed" placeholder="Flushed" />
      <Textarea variant="unstyled" placeholder="Unstyled" />
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Textarea label="Input Label" size="xs" placeholder="Placeholder" />
      <Textarea label="Input Label" size="sm" placeholder="Placeholder" />
      <Textarea label="Input Label" placeholder="Placeholder" />
      <Textarea label="Input Label" size="lg" placeholder="Placeholder" />
      <Textarea label="Input Label" size="xl" placeholder="Placeholder" />
    </Flex>
  ),
};

export const TextareaState: Story = {
  ...Default,
  play: textareaState,
  name: "[TEST] Textarea State",
  tags: ["test"],
};

const meta = {
  title: "Components/Core/Textarea",
  component: Textarea,
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
