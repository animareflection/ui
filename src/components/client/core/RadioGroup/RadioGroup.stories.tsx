import { radioGroupState } from "./RadioGroup.spec";
import { RadioGroup } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof RadioGroup>;

const ITEMS = [
  { id: "react", label: "React" },
  { id: "solid", label: "Solid" },
  { id: "svelte", label: "Svelte", disabled: true },
  { id: "vue", label: "Vue" },
];

export const Default: Story = {
  render: () => <RadioGroup orientation="vertical" items={ITEMS} />,
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
