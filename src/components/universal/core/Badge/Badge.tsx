import { panda } from "generated/panda/jsx";
import { badge } from "generated/panda/recipes";

import type { BadgeVariantProps } from "generated/panda/recipes";
import type { ComponentPropsWithoutRef } from "react";

export type Props = ComponentPropsWithoutRef<typeof panda.div> &
  BadgeVariantProps;

/**
 * Core UI Badge
 */

export const Badge = ({ variant, children, ...props }: Props) => {
  return (
    <panda.div className={badge({ variant })} {...props}>
      {children}
    </panda.div>
  );
};

export default Badge;
