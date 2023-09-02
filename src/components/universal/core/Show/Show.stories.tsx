import { Image, Show } from "components/universal";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Show>;

export const ShowFrom: Story = {
  render: () => (
    <Show from="md">
      <Image src="/img/logo.png" alt="AR logo" height={40} width={40} />
    </Show>
  ),
};

export const ShowBelow: Story = {
  render: () => (
    <Show below="md">
      <Image src="/img/logo.png" alt="AR logo" height={40} width={40} />
    </Show>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker);
const meta: Meta<typeof Show> = {
  title: "Components/Universal/Core/Show",
  component: Show,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} as Meta<typeof Show>;

export default meta;
