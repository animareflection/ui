import { Banner } from "components/client";
import { VStack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Banner visible>Banner</Banner>,
};
export const Subtle: Story = {
  render: () => (
    <Banner visible variant="subtle">
      Banner
    </Banner>
  ),
};
export const Outline: Story = {
  render: () => (
    <Banner visible variant="outline">
      Banner
    </Banner>
  ),
};

export const Sizes: Story = {
  render: () => (
    <VStack>
      <Banner position="relative" visible size="sm">
        Banner
      </Banner>
      <Banner position="relative" visible>
        Banner
      </Banner>
      <Banner position="relative" visible size="lg">
        Banner
      </Banner>
    </VStack>
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
