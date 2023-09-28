import { useState } from "react";

import { avatarState } from "./Avatar.spec";
import { Avatar, Button } from "components/core";
import { Flex, HStack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Avatar>;

const AvatarToggle = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Flex direction="column" gap={2}>
      {isLoaded ? (
        <Avatar src="/img/logo.png" alt="avatar" />
      ) : (
        <Avatar src="" />
      )}
      <Button
        data-testid="toggle"
        variant="ghost"
        p={2}
        onClick={() => setIsLoaded(!isLoaded)}
      >
        {isLoaded ? "Toggle to fallback" : "Toggle to image"}
      </Button>
    </Flex>
  );
};

export const Toggle: Story = {
  render: () => <AvatarToggle />,
};

export const Variants: Story = {
  render: () => (
    <HStack gap={2}>
      <Avatar src="/img/logo.png" alt="avatar" />
      <Avatar variant="square" src="/img/logo.png" alt="avatar" />
    </HStack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <HStack gap={2}>
      <Avatar size="xs" src="/img/logo.png" alt="avatar" />
      <Avatar size="sm" src="/img/logo.png" alt="avatar" />
      <Avatar src="/img/logo.png" alt="avatar" />
      <Avatar size="lg" src="/img/logo.png" alt="avatar" />
      <Avatar size="xl" src="/img/logo.png" alt="avatar" />
      <Avatar size="2xl" src="/img/logo.png" alt="avatar" />
      <Avatar size="3xl" src="/img/logo.png" alt="avatar" />
    </HStack>
  ),
};

export const AvatarState: Story = {
  ...Toggle,
  play: avatarState,
  name: "[TEST] Avatar State",
  tags: ["test"],
};

const meta = {
  title: "Components/Core/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Avatar>;

export default meta;
