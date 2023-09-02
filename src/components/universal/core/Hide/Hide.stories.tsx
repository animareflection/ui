import { Image, Hide } from "components/universal";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Hide>;

export const HideBelow: Story = {
  render: () => (
    // TODO: update when `hideBelow` issue is fixed upstream (panda)
    <Hide hideBelow="sm">
      <Image src="/img/logo.png" alt="AR logo" height={40} width={40} />
    </Hide>
  ),
};

export const HideFrom: Story = {
  render: () => (
    <Hide hideFrom="md">
      <Image src="/img/logo.png" alt="AR logo" height={40} width={40} />
    </Hide>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker);
const meta: Meta<typeof Hide> = {
  title: "Components/Universal/Core/Hide",
  component: Hide,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} as Meta<typeof Hide>;

export default meta;
