"use client";

import { Combobox } from "@animareflection/ui";

import { Wrapper } from "components";

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

const CheckboxDemo = () => (
  <Wrapper title="Checkbox">
    <Combobox
      label={{
        singular: "Fruit or Vegetable",
        plural: "Fruit or Vegetables",
        display: true,
      }}
      groups={groups}
    />
  </Wrapper>
);

export default CheckboxDemo;
