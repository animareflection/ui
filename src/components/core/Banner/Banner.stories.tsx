import { bannerState } from "./Banner.spec";
import { Banner } from "components/core";
import { VStack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Banner>;

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
      <Banner closable layerStyle="defaultGradient">
        Banner
      </Banner>
    </VStack>
  ),
};

export const Stacked: Story = {
  render: () => (
    <VStack gap={0} position="absolute" inset={0}>
      <Banner layerStyle="defaultGradient">Banner</Banner>
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

const meta = {
  title: "Components/Core/Banner",
  component: Banner,
  tags: ["autodocs"],
} satisfies Meta<typeof Banner>;

export default meta;
