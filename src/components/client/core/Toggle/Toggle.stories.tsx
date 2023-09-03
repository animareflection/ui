import { useState } from "react";

import { Toggle } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Toggle>;

// NB: Seemingly, `Toggle` must be in a controlled state to work, so the state is managed internally until a workaround / fix is applied. This is an example of how to mimic that state for usage outside of the component.
const ExampleToggle = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Toggle
      label={isChecked ? "Checked" : "Unchecked"}
      onChange={() => setIsChecked(!isChecked)}
      defaultChecked
    />
  );
};

export const Default: Story = {
  render: () => <ExampleToggle />,
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Toggle> = {
  title: "Components/Client/Core/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Toggle>;

export default meta;
