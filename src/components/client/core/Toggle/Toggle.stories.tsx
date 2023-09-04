import { useState } from "react";

import { Toggle } from "components/client";

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

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Toggle> = {
  title: "Components/Client/Core/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Toggle>;

export default meta;
