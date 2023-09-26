import { useState } from "react";

import { avatarState } from "./Avatar.spec";
import { Avatar, Button } from "components/client";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Avatar>;

const AvatarToggle = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Flex direction="column" gap={2}>
      {isLoaded ? (
        <Avatar src="/img/logo.png" alt="avatar" />
      ) : (
        <Avatar src="" alt="" />
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

export const AvatarState: Story = {
  ...Toggle,
  play: avatarState,
  name: "[TEST] Avatar State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Avatar> = {
  title: "Components/Client/Core/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Avatar>;

export default meta;
