import { Image } from "components/next";
import { panda } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: () => (
    <Image
      src="/img/logo.png"
      alt="AR logo"
      containerProps={{
        h: 40,
        w: 40,
      }}
    />
  ),
};

export const LayoutFill: Story = {
  render: () => (
    <panda.div h={40} w={40}>
      <Image src="/img/logo.png" alt="AR logo" fill />
    </panda.div>
  ),
};

const meta = {
  title: "Components/Next/Image",
  component: Image,
  tags: ["autodocs"],
} as Meta<typeof Image>;

export default meta;
