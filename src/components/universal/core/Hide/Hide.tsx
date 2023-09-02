import { Flex } from "generated/panda/jsx";

import type { FlexProps } from "generated/panda/jsx";
import type { JsxStyleProps } from "generated/panda/types";

export interface Props extends Omit<FlexProps, "hideBelow" | "hideFrom"> {
  below?: JsxStyleProps["hideBelow"];
  from?: JsxStyleProps["hideFrom"];
}

const Hide = ({ children, below, from, ...rest }: Props) => {
  return (
    <Flex
      h="fit-content"
      w="fit-content"
      display="contents"
      hideBelow={below}
      hideFrom={from}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default Hide;
