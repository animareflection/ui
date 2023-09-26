import { statState } from "./Stat.spec";
import { Stat } from "components/universal";
import { VStack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: () => <Stat label="Floor Price" value="$10.85" />,
};

export const Variants: Story = {
  render: () => (
    <VStack gap={2} alignItems="start">
      <Stat label="Floor Price" value="$10.85" />
      <Stat variant="subtle" label="Floor Price" value="$10.85" />
      <Stat variant="unstyled" label="Floor Price" value="$10.85" />
      <Stat variant="outline" label="Floor Price" value="$10.85" />
    </VStack>
  ),
};

export const Indicator: Story = {
  render: () => (
    <VStack alignItems="start" gap={2}>
      <Stat
        label="Floor Price"
        helpText="12.35%"
        indicator="increase"
        value="$10.85"
      />
      <Stat
        label="Floor Price"
        helpText="12.35%"
        orientation="horizontal"
        indicator="decrease"
        value="$10.85"
      />
    </VStack>
  ),
};

export const Orientation: Story = {
  render: () => (
    <VStack alignItems="start" gap={2}>
      <Stat
        orientation="horizontal"
        label="Floor Price"
        helpText="12.35%"
        indicator="increase"
        value="$10.85"
      />
      <Stat
        label="Floor Price"
        helpText="12.35%"
        indicator="decrease"
        value="$10.85"
      />
    </VStack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <VStack gap={2} alignItems="start">
      <Stat size="sm" label="Floor Price" value="$10.85" />
      <Stat label="Floor Price" value="$10.85" />
      <Stat size="lg" label="Floor Price" value="$10.85" />
      <Stat size="xl" label="Floor Price" value="$10.85" />
    </VStack>
  ),
};

export const StatState: Story = {
  ...Default,
  play: statState,
  name: "[TEST] Stat State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker);
const meta: Meta<typeof Stat> = {
  title: "Components/Universal/Core/Stat",
  component: Stat,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} as Meta<typeof Stat>;

export default meta;
