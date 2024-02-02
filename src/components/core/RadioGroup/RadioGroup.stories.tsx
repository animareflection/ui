import { radioGroupState } from "./RadioGroup.spec";
import { RadioGroup } from "components/core";
import { HStack, VStack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof RadioGroup>;

const ITEMS = [
  { value: "react", label: "React" },
  { value: "solid", label: "Solid" },
  { value: "svelte", label: "Svelte", disabled: true },
  { value: "vue", label: "Vue" },
];

export const Default: Story = {
  render: () => <RadioGroup items={ITEMS} />,
};

export const Sizes: Story = {
  render: () => (
    <HStack gap={8} alignItems="start">
      <RadioGroup size="sm" items={ITEMS} />
      <RadioGroup items={ITEMS} />
      <RadioGroup size="lg" items={ITEMS} />
    </HStack>
  ),
};

export const Orientation: Story = {
  render: () => (
    <VStack gap={8} alignItems="start">
      <RadioGroup items={ITEMS} />
      <RadioGroup orientation="horizontal" items={ITEMS} />
    </VStack>
  ),
};

export const DefaultValue: Story = {
  render: () => <RadioGroup defaultValue="solid" items={ITEMS} />,
};

export const RadioGroupState: Story = {
  ...Default,
  play: radioGroupState,
  name: "[TEST] RadioGroup State",
  tags: ["test"],
};

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Core/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
