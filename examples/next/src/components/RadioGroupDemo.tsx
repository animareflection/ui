import { RadioGroup } from "@animareflection/ui";

import { Wrapper } from "components";

import type { RadioGroupRecord } from "@animareflection/ui";

const ITEMS: RadioGroupRecord[] = [
  { value: "react", label: "React" },
  { value: "solid", label: "Solid" },
  { value: "svelte", label: "Svelte", disabled: true },
  { value: "vue", label: "Vue" },
];

const RadioGroupDemo = () => (
  <Wrapper title="Radio Group">
    <RadioGroup orientation="vertical" items={ITEMS} />
  </Wrapper>
);

export default RadioGroupDemo;
