import { useState } from "react";

import { Checkbox } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Checkbox>;

const ControlledCheckbox = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Checkbox
      label={isChecked ? "Checked" : "Unchecked"}
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      defaultChecked
    />
  );
};

export const Default: Story = {
  render: () => <ControlledCheckbox />,
};

export const Small: Story = {
  render: () => <Checkbox size="sm" label="Label" />,
};

export const Medium: Story = {
  render: () => <Checkbox label="Label" />,
};

export const Large: Story = {
  render: () => <Checkbox size="lg" label="Label" />,
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Checkbox> = {
  title: "Components/Client/Core/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Checkbox>;

export default meta;
