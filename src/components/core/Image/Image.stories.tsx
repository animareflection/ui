import { Image } from "components/core";
import { panda } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: () => (
    <Image src="/img/logo.png" alt="AR logo" height={40} width={40} />
  ),
};

export const LayoutFill: Story = {
  render: () => (
    <panda.div h={40} w={40}>
      <Image src="/img/logo.png" alt="AR logo" layout="fill" />
    </panda.div>
  ),
};

const meta = {
  title: "Components/Core/Image",
  component: Image,
  tags: ["autodocs"],
} as Meta<typeof Image>;

export default meta;
