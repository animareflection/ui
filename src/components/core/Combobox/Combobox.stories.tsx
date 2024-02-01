import { comboboxState } from "./Combobox.spec";
import { Combobox, Image, Text } from "components/core";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Combobox>;

const fruitBasket = [
  { label: "Apple", icon: "🍎" },
  { label: "Banana", icon: "🍌" },
  { label: "Orange", icon: "🍊" },
  { label: "Grape", icon: "🍇" },
];

const vegetableBasket = [
  { label: "Carrot", icon: "🥕" },
  { label: "Broccoli", icon: "🥦" },
  { label: "Corn", icon: "🌽" },
  { label: "Cucumber", icon: "🥒" },
];

const groups = [
  {
    label: {
      id: "fruit",
      singular: "Fruit",
      plural: "Fruit",
      display: true,
    },
    items: fruitBasket.map(({ label, icon }, idx) => ({
      label,
      icon,
      value: label,
      disabled: idx === 2,
    })),
  },
  {
    label: {
      id: "vegetable",
      singular: "Vegetable",
      plural: "Vegetables",
      display: true,
    },
    items: vegetableBasket.map(({ label, icon }, idx) => ({
      label,
      icon,
      value: label,
      disabled: idx === 2,
    })),
  },
];

export const Default: Story = {
  args: {
    size: "md",
    label: {
      singular: "Fruit or Vegetable",
      plural: "Fruit or Vegetables",
      display: true,
    },
    groups,
  },
};

export const ImageIcons: Story = {
  args: {
    ...Default.args,
    groups: [
      {
        label: {
          id: "items",
          singular: "Item",
          plural: "Items",
          display: true,
        },
        items: fruitBasket.map(({ label }, idx) => ({
          label,
          icon: <Image src="/img/logo.png" alt={label} w={4} h={4} />,
          value: label,
          disabled: idx === 2,
        })),
      },
    ],
  },
};

/**
 * Custom content can be passed to override the default content render.
 */
export const CustomContent: Story = {
  args: {
    ...Default.args,
    content: (
      <Flex direction="column">
        <Text>All the fruit!</Text>

        {fruitBasket.map(({ label, icon }) => (
          <Flex key={label} align="center">
            <Text>{icon}</Text>
            <Text>{label}</Text>
          </Flex>
        ))}
      </Flex>
    ),
  },
};

export const ComboboxState: Story = {
  args: {
    ...Default.args,
    openOnClick: true,
  },
  play: comboboxState,
  name: "[TEST] Combobox State",
  tags: ["test"],
};

const meta = {
  title: "Components/Core/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
      defaultValue: "md",
    },
  },
} satisfies Meta<typeof Combobox>;

export default meta;
