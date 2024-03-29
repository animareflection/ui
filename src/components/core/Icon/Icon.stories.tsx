import {
  FiBattery,
  FiBell,
  FiHeart,
  FiCheck,
  FiExternalLink,
  FiAlertTriangle,
} from "react-icons/fi";

import { Icon } from "components/core";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Icon>;

export const Variants: Story = {
  render: () => (
    <Flex gap={2}>
      <Flex h="fit-content" bgColor="purple.100" p={2} borderRadius="md">
        <Icon size="xs" color="purple.500">
          <FiBell />
        </Icon>
      </Flex>
      <Flex h="fit-content" bgColor="red.100" p={2} borderRadius="md">
        <Icon size="sm" color="red.500">
          <FiHeart />
        </Icon>
      </Flex>
      <Flex h="fit-content" bgColor="blue.100" p={2} borderRadius="md">
        <Icon color="blue.500">
          <FiCheck />
        </Icon>
      </Flex>
      <Flex h="fit-content" bgColor="gray.100" p={2} borderRadius="md">
        <Icon size="lg" color="gray.500">
          <FiExternalLink />
        </Icon>
      </Flex>
      <Flex h="fit-content" bgColor="yellow.100" p={2} borderRadius="md">
        <Icon size="xl" color="yellow.500">
          <FiAlertTriangle />
        </Icon>
      </Flex>
      <Flex h="fit-content" bgColor="green.100" p={2} borderRadius="md">
        <Icon size="2xl" color="green.500">
          <FiBattery />
        </Icon>
      </Flex>
    </Flex>
  ),
};

const meta = {
  title: "Components/Core/Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
