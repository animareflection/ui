import { radioGroupState } from "./RadioGroup.spec";
import { RadioGroup } from "components/client";
import { HStack } from "generated/panda/jsx";

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
  title: "Components/Client/Core/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof RadioGroup>;

export default meta;
