import { useState } from "react";

import { Toggle } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Toggle>;

const DefaultToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Toggle
      label="Switch Label"
      isChecked={isChecked}
      setIsChecked={setIsChecked}
    />
  );
};

export const Default: Story = {
  render: () => <DefaultToggle />,
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Toggle> = {
  title: "Components/Client/Core/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Toggle>;

export default meta;
