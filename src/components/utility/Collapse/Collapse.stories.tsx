import { collapseState } from "./Collapse.spec";
import { Image, Text } from "components/core";
import { Collapse } from "components/utility";
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
      <Collapse collapseDirection="horizontal">
        <Image src="/img/logo.png" alt="AR logo" height={40} width={40} />
      </Collapse>
      <Text p={2} bgColor="bg.muted" maxW="sm" h="fit-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Flex>
  ),
};

export const CollapseState: Story = {
  ...Vertical,
  play: collapseState,
  name: "[TEST] Collapse State",
  tags: ["test"],
};

const meta = {
  title: "Components/Utility/Collapse",
  component: Collapse,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Collapse>;

export default meta;
