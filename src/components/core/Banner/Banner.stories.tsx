import { bannerState } from "./Banner.spec";
import { Banner } from "components/core";
import { VStack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <VStack position="absolute" inset={0}>
      <Banner>Banner</Banner>
    </VStack>
  ),
};

export const Closeable: Story = {
  render: () => (
    <VStack position="absolute" inset={0}>
      <Banner closable>Banner</Banner>
    </VStack>
  ),
};

export const Gradient: Story = {
  render: () => (
    <VStack position="absolute" inset={0}>
      <Banner closable variant="gradient">
        Banner
      </Banner>
    </VStack>
  ),
};

export const Stacked: Story = {
  render: () => (
    <VStack gap={0} position="absolute" inset={0}>
      <Banner variant="gradient">Banner</Banner>
      <Banner>Banner</Banner>
    </VStack>
  ),
};

export const BannerState: Story = {
  ...Closeable,
  play: bannerState,
  name: "[TEST] Banner State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Banner> = {
  title: "components/Core/Banner",
  component: Banner,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Banner>;

export default meta;
