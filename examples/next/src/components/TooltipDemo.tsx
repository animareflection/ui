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
        // TODO: figure out why the panda style props aren't working
        triggerProps={{
          bgColor: "bg.default",
        }}
      />
    </Wrapper>
  );
};

export default TooltipDemo;
