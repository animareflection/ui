import { Combobox } from "components/core";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Combobox>;

const fruitBasket = [
  { label: "Apple", icon: "🍎" },
  { label: "Banana", icon: "🍌" },
  { label: "Orange", icon: "🍊" },
  { label: "Grape", icon: "🍇" },
];

export const Default: Story = {
  args: {
    size: "sm",
    label: {
      id: "fruit",
      singular: "Fruit",
      plural: "Fruit",
    },
    items: fruitBasket.map(({ label, icon }, idx) => ({
      label,
      icon,
      value: label,
      disabled: idx === 2,
    })),
  },
};

const meta = {
  title: "Components/Core/Combobox",
  component: Combobox,
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox>;

export default meta;
