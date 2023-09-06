import { bannerState } from "./Banner.spec";
import { Banner } from "components/client";
// import { Flex, VStack } from "generated/panda/jsx";

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

export const SizeSmall: Story = {
  render: () => (
    <Banner visible size="sm">
      Banner
    </Banner>
  ),
};
export const SizeLarge: Story = {
  render: () => (
    <Banner visible size="lg">
      Banner
    </Banner>
  ),
};

export const Stacked: Story = {
  render: () => (
    <>
      <Banner visible size="lg">
        Banner
      </Banner>
      <Banner variant="outline" visible size="lg">
        Banner
      </Banner>
    </>
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
