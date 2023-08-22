import { Image } from "components/universal";
import { panda } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Image src="img/logo.png" alt="AR logo" h={40} w={40} />,
};

export const LayoutFill: Story = {
  render: () => (
    <panda.div h={40} w={40}>
      <Image src="img/logo.png" alt="AR logo" layout="fill" />
    </panda.div>
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