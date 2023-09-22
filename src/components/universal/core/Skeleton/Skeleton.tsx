import { Flex, panda } from "generated/panda/jsx";
import { skeleton } from "generated/panda/recipes";

import type { FlexProps } from "generated/panda/jsx";
import type { SkeletonVariantProps } from "generated/panda/recipes";

export interface Props extends FlexProps, SkeletonVariantProps {
  isLoaded?: boolean;
}

const Skeleton = ({ isLoaded, variant, children, ...rest }: Props) => {
  const classNames = skeleton({ variant });

  return (
    <Flex className={classNames.root} {...rest}>
      <panda.div
        data-testid="skeleton"
        className={classNames.skeleton}
        visibility={isLoaded ? "hidden" : "visible"}
      />
      {children}
    </Flex>
  );
};

export default Skeleton;
