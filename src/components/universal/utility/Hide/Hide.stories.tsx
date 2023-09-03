import { Image, Hide } from "components/universal";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Hide>;

export const HideBelow: Story = {
  render: () => (
    <Hide below="md">
      <Image src="/img/logo.png" alt="AR logo" height={40} width={40} />
    </Hide>
  ),
};

export const HideFrom: Story = {
  render: () => (
    <Hide from="md">
      <Image src="/img/logo.png" alt="AR logo" height={40} width={40} />
    </Hide>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker);
const meta: Meta<typeof Hide> = {
  title: "Components/Universal/Utility/Hide",
  component: Hide,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} as Meta<typeof Hide>;

export default meta;
