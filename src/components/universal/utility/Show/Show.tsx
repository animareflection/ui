import { panda } from "generated/panda/jsx";
import { show } from "generated/panda/recipes";

import type { ShowVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof panda.div> & ShowVariantProps;

/**
 * Utility component to conditionally render child elements from or below defined breakpoints.
 */
const Show = ({ children, below, from, ...rest }: Props) => {
  return (
    <panda.div className={show({ below, from })} {...rest}>
      {children}
    </panda.div>
  );
};

export default Show;
