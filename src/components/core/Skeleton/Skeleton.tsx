import { Flex, panda } from "generated/panda/jsx";

import type { FlexProps } from "generated/panda/jsx";
import type { SkeletonVariantProps } from "generated/panda/recipes";

export interface Props extends FlexProps, SkeletonVariantProps {
  isLoaded?: boolean;
}

/**
 * Core Skeleton component.
 */
const Skeleton = ({ isLoaded, children, ...rest }: Props) => (
  <Flex {...rest}>
    <panda.div
      data-testid="skeleton"
      visibility={isLoaded ? "hidden" : "visible"}
    />
    {children}
  </Flex>
);

export default Skeleton;
