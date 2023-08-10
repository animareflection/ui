import {
  FiHeart,
  FiCheck,
  FiExternalLink,
  FiAlertTriangle,
} from "react-icons/fi";

import { Icon } from "components/client";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Flex gap={2}>
      <Flex bgColor="red.100" p={2} borderRadius="md">
        <Icon as={FiHeart} color="red.500" />
      </Flex>
      <Flex bgColor="blue.100" p={2} borderRadius="md">
        <Icon as={FiCheck} color="blue.500" />
      </Flex>
      <Flex bgColor="gray.100" p={2} borderRadius="md">
        <Icon as={FiExternalLink} color="gray.500" />
      </Flex>
      <Flex bgColor="yellow.100" p={2} borderRadius="md">
        <Icon as={FiAlertTriangle} color="yellow.500" />
      </Flex>
    </Flex>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Icon> = {
  title: "Universal/Core/Icon",
  component: Icon,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Icon>;

export default meta;