import { Text, Tooltip } from "@animareflection/ui";

import { Wrapper } from "components";

const TooltipDemo = () => {
  return (
    <Wrapper title="Tooltip">
      <Tooltip
        positioning={{
          placement: "top",
        }}
        trigger={<Text>Open Tooltip</Text>}
        content="Tooltip Title"
        triggerProps={{
          bgColor: "brand.primary.500",
          p: 3,
          borderRadius: "md",
          color: "accent.fg",
          fontWeight: "bold",
        }}
      />
    </Wrapper>
  );
};

export default TooltipDemo;
