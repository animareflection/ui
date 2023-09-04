"use client";

import { Checkbox } from "@animareflection/ui/client";
import { useState } from "react";

import { Wrapper } from "components";

const CheckboxDemo = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Wrapper title="Checkbox">
      <Checkbox
        checked={isChecked}
        defaultChecked
        onChange={() => setIsChecked(!isChecked)}
        label={isChecked ? "Checked" : "Unchecked"}
      />
    </Wrapper>
  );
};

export default CheckboxDemo;
