import { RadioGroup } from "@animareflection/ui/client";

import { Wrapper } from "components";

const ITEMS = [
  { id: "react", label: "React" },
  { id: "solid", label: "Solid" },
  { id: "svelte", label: "Svelte", disabled: true },
  { id: "vue", label: "Vue" },
];

const RadioGroupDemo = () => (
  <Wrapper title="Radio Group">
    <RadioGroup orientation="vertical" items={ITEMS} />
  </Wrapper>
);

export default RadioGroupDemo;
