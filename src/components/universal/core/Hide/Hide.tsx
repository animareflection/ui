import { panda } from "generated/panda/jsx";
import { hide } from "generated/panda/recipes";

import type { HideVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof panda.div> & HideVariantProps;

/**
 * Core UI hide.
 */
const Hide = ({ children, below, from, ...rest }: Props) => {
  return (
    <panda.div className={hide({ below, from })} {...rest}>
      {children}
    </panda.div>
  );
};

export default Hide;
