import { Box, Flex } from "generated/panda/jsx";
import { skeleton, type SkeletonVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { FlexProps } from "generated/panda/jsx";

export interface Props extends FlexProps, SkeletonVariantProps {
  /** Whether the content is loaded. */
  isLoaded?: boolean;
}

const { withProvider, withContext } = createStyleContext(skeleton);

const SkeletonRoot = withProvider(Flex, "root");

const SkeletonSkeleton = withContext(Box, "skeleton");

/**
 * Core Skeleton component.
 */
const Skeleton = ({ isLoaded, children, ...rest }: Props) => (
  <SkeletonRoot {...rest}>
    <SkeletonSkeleton
      data-testid="skeleton"
      visibility={isLoaded ? "hidden" : "visible"}
    />
    {children}
  </SkeletonRoot>
);

export default Skeleton;
