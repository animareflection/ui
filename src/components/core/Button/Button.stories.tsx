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

export const Variants: Story = {
  render: () => (
    <Flex gap={2}>
      <Button>Click me 🏝️</Button>
      <Button variant="secondary">Click me 🏝️</Button>
      <Button variant="ghost">Click me 🏝️</Button>
      <Button variant="round">Click me 🏝️</Button>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap={2}>
      <Button variant="primary" size="xs">
        Click me 🏝️
      </Button>
      <Button variant="primary" size="sm">
        Click me 🏝️
      </Button>
      <Button variant="primary">Click me 🏝️</Button>
      <Button variant="primary" size="lg">
        Click me 🏝️
      </Button>
    </Flex>
  ),
};

export const OnClickEvent: Story = {
  render: () => <ButtonTest />,
  play: onClickEvent,
  name: "[TEST] onClick Event",
  tags: ["test"],
};

const meta = {
  title: "Components/Core/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Button>;

export default meta;
