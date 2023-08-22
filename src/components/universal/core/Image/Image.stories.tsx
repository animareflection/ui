import { Image } from "components/universal";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Image src="img/logo.png" alt="A beautiful beach" h={40} w={40} />
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker);
const meta: Meta<typeof Image> = {
  title: "Components/Universal/Core/Image",
  component: Image,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} as Meta<typeof Image>;

export default meta;
