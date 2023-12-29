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
      inputProps={{
        placeholder: "Placeholder",
      }}
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Input
        inputProps={{
          placeholder: "Default",
        }}
      />
      <Input
        variant="filled"
        inputProps={{
          placeholder: "Filled",
        }}
      />
      <Input
        variant="flushed"
        inputProps={{
          placeholder: "Flushed",
        }}
      />
      <Input
        variant="unstyled"
        inputProps={{
          placeholder: "Unstyled",
        }}
      />
      <Input
        label="Addons"
        leftAddon="https://"
        inputProps={{
          placeholder: "mywebsite",
        }}
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
        inputProps={{
          placeholder: "Placeholder",
        }}
      />
      <Input
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="Input Label"
        size="xs"
        inputProps={{
          placeholder: "Placeholder",
        }}
      />
      <Input
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="Input Label"
        size="sm"
        inputProps={{
          placeholder: "Placeholder",
        }}
      />
      <Input
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="Input Label"
        inputProps={{
          placeholder: "Placeholder",
        }}
      />
      <Input
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="Input Label"
        size="lg"
        inputProps={{
          placeholder: "Placeholder",
        }}
      />
      <Input
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="Input Label"
        size="xl"
        inputProps={{
          placeholder: "Placeholder",
        }}
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
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Input>;

export default meta;
