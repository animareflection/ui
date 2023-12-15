import { Text, Tooltip } from "@animareflection/ui";

import { Wrapper } from "components";

const TooltipDemo = () => {
  return (
    <Wrapper title="Tooltip">
      <Tooltip
        positioning={{
          placement: "top",
        }}
        trigger={
          <Text
            bgColor="brand.primary.500"
            p={3}
            borderRadius="md"
            color="accent.fg"
            fontWeight="bold"
          >
            Open Tooltip
          </Text>
        }
        bgColor="accent.default"
        contentProps={{
          color: "white",
        }}
        tooltipContent="Tooltip Title"
      />
    </Wrapper>
  );
};

export default TooltipDemo;
