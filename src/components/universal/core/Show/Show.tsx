import { panda } from "generated/panda/jsx";
import { show } from "generated/panda/recipes";

import type { ShowVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof panda.div> & ShowVariantProps;

/**
 * Core UI show.
 */
const Hide = ({ children, below, from, ...rest }: Props) => {
  return (
    <panda.div className={show({ below, from })} {...rest}>
      {children}
    </panda.div>
  );
};

export default Hide;
