import { Input } from "components/core";
import { CopyToClipboard } from "components/utility";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof CopyToClipboard>;

export const Default: Story = {
  render: () => (
    <Flex align="center" gap={2}>
      <CopyToClipboard>Text to Copy</CopyToClipboard>
      <Input placeholder="Paste text here..." />
    </Flex>
  ),
};

export const CustomText: Story = {
  render: () => (
    <Flex align="center" gap={2}>
      <CopyToClipboard copyText="0xBd3531dA5CF5857e7CfAA92426877b022e612cf8">
        0xBd...2cf8
      </CopyToClipboard>
      <Input placeholder="Paste text here..." />
    </Flex>
  ),
};

export const CustomButton: Story = {
  render: () => (
    <Flex align="center" gap={2}>
      <CopyToClipboard
        color={{ base: "fg.default", _hover: "brand.primary.500" }}
      >
        Text to Copy
      </CopyToClipboard>
      <Input placeholder="Paste text here..." />
    </Flex>
  ),
};

const meta = {
  title: "Components/Utility/CopyToClipboard",
  component: CopyToClipboard,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
  // TODO: remove when portal issue / ref bug is fixed
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CopyToClipboard>;

export default meta;
