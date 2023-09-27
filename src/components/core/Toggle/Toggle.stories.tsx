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

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Toggle> = {
  title: "Components/Core/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Toggle>;

export default meta;
