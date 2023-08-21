import { Button } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Button>Click me 🏝️</Button>,
};

export const Secondary: Story = {
  render: () => <Button variant="secondary">Click me 🏝️</Button>,
};

export const Ghost: Story = {
  render: () => <Button variant="ghost">Click me 🏝️</Button>,
};

export const Round: Story = {
  render: () => <Button variant="round">Click me 🏝️</Button>,
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Button> = {
  title: "Components/Client/Core/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Button>;

export default meta;
