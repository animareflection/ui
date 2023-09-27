import { NumberInput } from "@animareflection/ui";

import { Wrapper } from "components";

const NumberInputDemo = () => (
  <Wrapper title="Number Input">
    <NumberInput
      leftAddon="Steps"
      placeholder="0"
      min={0}
      max={5}
      step={0.1}
      stepper
    />
  </Wrapper>
);

export default NumberInputDemo;
