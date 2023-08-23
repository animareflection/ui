import { Badge } from "components/universal";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  render: () => <Badge variant="solid">Test</Badge>,
};
export const Subtle: Story = {
  render: () => <Badge variant="subtle">Test</Badge>,
};
export const Outline: Story = {
  render: () => <Badge variant="outline">Test</Badge>,
};

export const WithContext: Story = {
  render: () => <Badge>Test</Badge>,
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Badge> = {
  title: "Components/Universal/Core/Badge",
  component: Badge,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Badge>;

export default meta;
