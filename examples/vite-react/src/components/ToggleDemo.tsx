import { Toggle } from "@animareflection/ui";
import { useState } from "react";

import { Wrapper } from "components";

const ToggleDemo = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Wrapper title="Toggle">
      <Toggle
        checked={isChecked}
        defaultChecked
        onChange={() => setIsChecked(!isChecked)}
        label={isChecked ? "Checked" : "Unchecked"}
      />
    </Wrapper>
  );
};

export default ToggleDemo;
