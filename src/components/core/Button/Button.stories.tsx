import { useState } from "react";

import { onClickEvent } from "./Button.spec";
import { Button } from "components/core";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Button>;

const ButtonTest = () => {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(count + 1)}>🏝️ Clicks: {count}</Button>
  );
};

export const Primary: Story = {
  render: () => <Button>Click me 🏝️</Button>,
};

export const Secondary: Story = {
  render: () => <Button variant="secondary">Click me 🏝️</Button>,
};

export const Ghost: Story = {
  render: () => <Button variant="ghost">Click me 🏝️</Button>,
};

export const Round: Story = {
  render: () => <Button variant="round">Click me 🏝️</Button>,
};

export const Sizes: Story = {
  render: () => (
    <Flex gap={2}>
      <Button size="xs">Click me 🏝️</Button>
      <Button size="sm">Click me 🏝️</Button>
      <Button>Click me 🏝️</Button>
      <Button size="lg">Click me 🏝️</Button>
    </Flex>
  ),
};

export const OnClickEvent: Story = {
  render: () => <ButtonTest />,
  play: onClickEvent,
  name: "[TEST] onClick Event",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Button> = {
  title: "components/Core/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Button>;

export default meta;
