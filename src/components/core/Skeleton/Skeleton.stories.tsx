import { useState } from "react";

import { skeletonState } from "./Skeleton.spec";
import { Button, Skeleton, Text } from "components/core";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Skeleton>;

const SkeletonToggle = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Flex direction="column" gap={2}>
      <Skeleton isLoaded={isLoaded} w="fit-content">
        <Text maxW="sm" mt={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Text>
      </Skeleton>

      <Button
        data-testid="toggle"
        variant="ghost"
        w="fit-content"
        p={2}
        onClick={() => setIsLoaded(!isLoaded)}
      >
        Toggle Skeleton
      </Button>
    </Flex>
  );
};

export const Toggle: Story = {
  render: () => <SkeletonToggle />,
};

export const CircleVariant: Story = {
  render: () => <Skeleton variant="circle" w={12} h={12} />,
};

export const TextVariant: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Skeleton variant="text" w="50%" />
      <Skeleton variant="text" w="75%" />
      <Skeleton variant="text" w="25%" />
      <Skeleton variant="text" w="2/5" />
    </Flex>
  ),
};

export const SkeletonState: Story = {
  ...Toggle,
  play: skeletonState,
  name: "[TEST] Skeleton State",
  tags: ["test"],
};

const meta = {
  title: "Components/Core/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
