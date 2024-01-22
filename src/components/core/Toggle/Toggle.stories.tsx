import { useState } from "react";

import { toggleState } from "./Toggle.spec";
import { Toggle } from "components/core";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Toggle>;

const ControlledToggle = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Toggle
      label={isChecked ? "Checked" : "Unchecked"}
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      defaultChecked
    />
  );
};

export const Controlled: Story = {
  render: () => <ControlledToggle />,
};

export const Small: Story = {
  render: () => <Toggle size="sm" label="Toggle Label" />,
};

export const Medium: Story = {
  render: () => <Toggle label="Toggle Label" />,
};

export const Large: Story = {
  render: () => <Toggle size="lg" label="Toggle Label" />,
};

export const ToggleState: Story = {
  ...Controlled,
  play: toggleState,
  name: "[TEST] Toggle State",
  tags: ["test"],
};

const meta = {
  title: "Components/Core/Toggle",
  component: Toggle,
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;
