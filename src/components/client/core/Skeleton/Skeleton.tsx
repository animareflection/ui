import { Flex, panda } from "generated/panda/jsx";

import type { FlexProps } from "generated/panda/jsx";

export interface Props extends FlexProps {
  isLoaded?: boolean;
}

const Skeleton = ({ isLoaded, children, ...rest }: Props) => {
  return (
    <Flex pos="relative" h="fit-content" w="fit-content" {...rest}>
      <panda.div
        pos="absolute"
        inset={0}
        w="full"
        h="full"
        animation={{ base: "skeleton-light", _dark: "skeleton-dark" }}
        borderRadius="sm"
        visibility={isLoaded ? "hidden" : "visible"}
      />
      {children}
    </Flex>
  );
};

export default Skeleton;
