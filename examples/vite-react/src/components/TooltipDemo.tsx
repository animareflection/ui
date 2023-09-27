import { Tooltip } from "@animareflection/ui";

import { Wrapper } from "components";

const TooltipDemo = () => {
  return (
    <Wrapper title="Tooltip">
      <Tooltip
        positioning={{
          placement: "top",
        }}
        trigger="Open Tooltip"
        content="Tooltip Title"
      />
    </Wrapper>
  );
};

export default TooltipDemo;
