import { useState } from "react";

import { Button, Skeleton } from "components/client";
import { Text } from "components/universal";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Skeleton>;

const SkeletonToggle = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Flex direction="column" gap={2}>
      <Skeleton isLoaded={isLoaded}>
        <Text maxW="sm" mt={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Text>
      </Skeleton>
      <Button variant="ghost" p={2} onClick={() => setIsLoaded(!isLoaded)}>
        Toggle Skeleton
      </Button>
    </Flex>
  );
};

export const Default: Story = {
  render: () => <SkeletonToggle />,
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Skeleton> = {
  title: "Components/Client/Core/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Skeleton>;

export default meta;
