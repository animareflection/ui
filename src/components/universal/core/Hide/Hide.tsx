import { Flex } from "generated/panda/jsx";

import type { FlexProps } from "generated/panda/jsx";

export type Props = FlexProps;

const Hide = ({ children, ...rest }: Props) => {
  return (
    <Flex h="fit-content" w="fit-content" display="contents" {...rest}>
      {children}
    </Flex>
  );
};

export default Hide;
