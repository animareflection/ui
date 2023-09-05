import { Banner } from "components/client";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Banner>Banner</Banner>,
};
export const Subtle: Story = {
  render: () => <Banner variant="subtle">Banner</Banner>,
};
export const Outline: Story = {
  render: () => <Banner variant="outline">Banner</Banner>,
};

export const Sizes: Story = {
  render: () => (
    <Flex gap={2} alignItems="center">
      <Banner size="sm">Banner</Banner>
      <Banner>Banner</Banner>
      <Banner size="lg">Banner</Banner>
    </Flex>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Banner> = {
  title: "Components/Client/Core/Banner",
  component: Banner,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Banner>;

export default meta;
