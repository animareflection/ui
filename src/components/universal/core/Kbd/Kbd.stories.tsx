import { Kbd } from "components/universal";
import { HStack, Stack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: () => (
    <Stack>
      <HStack gap={4}>
        <Kbd>⌘</Kbd>
        <Kbd>Ctrl</Kbd>
        <Kbd>⌘ + K</Kbd>
        <Kbd>Ctrl + K</Kbd>
      </HStack>
    </Stack>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Kbd> = {
  title: "Components/Universal/Core/Kbd",
  component: Kbd,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Kbd>;

export default meta;
