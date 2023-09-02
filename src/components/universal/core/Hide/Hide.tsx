import { Flex } from "generated/panda/jsx";

import type { FlexProps } from "generated/panda/jsx";
import type { JsxStyleProps } from "generated/panda/types";

export interface Props extends Omit<FlexProps, "hideBelow" | "hideFrom"> {
  below?: JsxStyleProps["hideBelow"];
  from?: JsxStyleProps["hideFrom"];
}

const Hide = ({ children, below, from, ...rest }: Props) => {
  // TODO: remove when `hideBelow` issue is fixed upstream (panda).
  const belowValue = (): JsxStyleProps["hideBelow"] => {
    switch (below) {
      case "md":
        return "sm";
      case "lg":
        return "md";
      case "xl":
        return "lg";
      case "2xl":
        return "xl";
      case "sm":
      default:
        return undefined;
    }
  };

  return (
    <Flex
      h="fit-content"
      w="fit-content"
      display="contents"
      // TODO: change to `hideBelow={below}` when `hideBelow` issue is fixed upstream (panda).
      hideBelow={belowValue()}
      hideFrom={from}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default Hide;
