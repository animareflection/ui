import { panda } from "generated/panda/jsx";

import type { HTMLPandaProps } from "generated/panda/types/jsx";
import type { ElementType } from "react";

export interface Props extends HTMLPandaProps<ElementType> {
  as: ElementType;
}

/**
 * Core UI icon.
 */
const Icon = ({ as, ...rest }: Props) => {
  const Component = panda(as);

  return <Component {...rest} />;
};

export default Icon;
