import { comboboxState } from "./Combobox.spec";
import { Combobox } from "components/core";

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
