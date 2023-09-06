import { bannerState } from "./Banner.spec";
import { Banner } from "components/client";
import { VStack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Banner>Banner</Banner>,
};

export const Closeable: Story = {
  render: () => <Banner closable>Banner</Banner>,
};

export const Gradient: Story = {
  render: () => (
    <Banner closable variant="gradient">
      Banner
    </Banner>
  ),
};

export const Stacked: Story = {
  render: () => (
    <VStack gap={0} position="absolute" inset={0}>
      <Banner position="relative" variant="gradient">
        Banner
      </Banner>
      <Banner position="relative">Banner</Banner>
    </VStack>
  ),
};

export const BannerState: Story = {
  ...Default,
  play: bannerState,
  name: "[TEST] Banner State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Banner> = {
  title: "Components/Client/Core/Banner",
  component: Banner,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Banner>;

export default meta;
