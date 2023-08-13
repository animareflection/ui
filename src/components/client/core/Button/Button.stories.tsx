import { Button } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me 🏝️",
  },
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Button> = {
  title: "Client/Core/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "ghost", "round"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
