import { Spinner } from "components/universal";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <Flex gap={4}>
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
    </Flex>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker);
const meta: Meta<typeof Spinner> = {
  title: "Components/Universal/Core/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Spinner>;

export default meta;
