import { inputState } from "./Input.spec";
import { Input } from "components/core";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => (
    <Input
      label="Input Label"
      inputLeftElement="🏝️"
      placeholder="Placeholder"
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Input placeholder="Default" />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="flushed" placeholder="Flushed" />
      <Input variant="unstyled" placeholder="Unstyled" />
      <Input
        label="Addons"
        leftAddon="https://"
        placeholder="mywebsite"
        rightAddon=".com"
      />
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Input
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="Input Label"
        size="2xs"
        placeholder="Placeholder"
      />
      <Input
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="Input Label"
        size="xs"
        placeholder="Placeholder"
      />
      <Input
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="Input Label"
        size="sm"
        placeholder="Placeholder"
      />
      <Input
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="Input Label"
        placeholder="Placeholder"
      />
      <Input
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="Input Label"
        size="lg"
        placeholder="Placeholder"
      />
      <Input
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="Input Label"
        size="xl"
        placeholder="Placeholder"
      />
    </Flex>
  ),
};

export const InputState: Story = {
  ...Default,
  play: inputState,
  name: "[TEST] Input State",
  tags: ["test"],
};

const meta: Meta<typeof Input> = {
  title: "Components/Core/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
