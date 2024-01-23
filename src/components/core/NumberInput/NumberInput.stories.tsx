import { numberInputState } from "./NumberInput.spec";
import { NumberInput } from "components/core";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  render: () => (
    <NumberInput
      inputLeftElement="🏝️"
      label="NumberInput Label"
      placeholder="Placeholder"
    />
  ),
};

export const Addons: Story = {
  render: () => (
    <NumberInput
      leftAddon="Steps"
      placeholder="0"
      min={0}
      max={5}
      step={0.1}
      stepper
      disabled
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <NumberInput placeholder="Default" />
      <NumberInput variant="filled" placeholder="Filled" />
      <NumberInput variant="flushed" placeholder="Flushed" />
      <NumberInput variant="unstyled" placeholder="Unstyled" />
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <NumberInput
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="NumberInput Label"
        size="2xs"
        placeholder="0"
      />
      <NumberInput
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="NumberInput Label"
        size="xs"
        placeholder="0"
      />
      <NumberInput
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="NumberInput Label"
        size="sm"
        placeholder="0"
      />
      <NumberInput
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="NumberInput Label"
        placeholder="0"
      />
      <NumberInput
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="NumberInput Label"
        size="lg"
        placeholder="0"
      />
      <NumberInput
        inputLeftElement="🏝️"
        inputRightElement="BEACH"
        label="NumberInput Label"
        size="xl"
        placeholder="0"
      />
    </Flex>
  ),
};

export const NumberInputState: Story = {
  ...Addons,
  play: numberInputState,
  name: "[TEST] NumberInput State",
  tags: ["test"],
};

const meta: Meta<typeof NumberInput> = {
  title: "Components/Core/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
} satisfies Meta<typeof NumberInput>;

export default meta;
