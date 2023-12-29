"use client";

import { Combobox } from "@animareflection/ui";

import { Wrapper } from "components";

const fruitBasket = [
  { label: "Apple", icon: "🍎" },
  { label: "Banana", icon: "🍌" },
  { label: "Orange", icon: "🍊" },
  { label: "Grape", icon: "🍇" },
];

const CheckboxDemo = () => (
  <Wrapper title="Checkbox">
    <Combobox
      label={{
        id: "fruit",
        display: true,
        singular: "Fruit",
        plural: "Fruit",
      }}
      items={fruitBasket.map(({ label, icon }, idx) => ({
        label,
        icon,
        value: label,
        disabled: idx === 2,
      }))}
    />
  </Wrapper>
);

export default CheckboxDemo;
