import { FiHeart } from "react-icons/fi";

import { Stat, Text } from "components/universal";
import { VStack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: () => (
    <Stat icon={<FiHeart />} minW={32} title="Likes">
      <Text>49</Text>
    </Stat>
  ),
};

export const Sizes: Story = {
  render: () => (
    <VStack>
      <Stat icon={<FiHeart />} size="sm" title="Likes">
        <Text>49</Text>
      </Stat>
      <Stat icon={<FiHeart />} title="Likes">
        <Text>49</Text>
      </Stat>
      <Stat icon={<FiHeart />} size="lg" title="Likes">
        <Text>49</Text>
      </Stat>
    </VStack>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker);
const meta: Meta<typeof Stat> = {
  title: "Components/Universal/Core/Stat",
  component: Stat,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} as Meta<typeof Stat>;

export default meta;
