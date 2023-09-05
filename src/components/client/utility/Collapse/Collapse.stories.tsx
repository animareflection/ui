import { Collapse } from "components/client";
import { Image, Text } from "components/universal";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Collapse>;

export const Vertical: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Collapse label="Show More">
        <Image src="/img/logo.png" alt="AR logo" height={40} width={40} />
      </Collapse>
      <Text p={2} bgColor="bg.muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Flex>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Flex gap={2}>
      <Collapse orientation="horizontal">
        <Image src="/img/logo.png" alt="AR logo" height={40} width={40} />
      </Collapse>
      <Text p={2} bgColor="bg.muted" maxW="sm" h="fit-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Flex>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Collapse> = {
  title: "Components/Client/Core/Collapse",
  component: Collapse,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Collapse>;

export default meta;
