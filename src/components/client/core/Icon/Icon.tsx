import { panda } from "generated/panda/jsx";
import { icon } from "generated/panda/recipes";

import type { IconVariantProps } from "generated/panda/recipes";
import type { HTMLPandaProps } from "generated/panda/types/jsx";
import type { ElementType } from "react";

export interface Props extends HTMLPandaProps<"svg">, IconVariantProps {
  as: ElementType;
}

/**
 * Core UI icon.
 */
const Icon = ({ as, size, ...rest }: Props) => {
  const className = icon({ size });
  const Component = panda(as);

  return <Component className={className} {...rest} />;
};

export default Icon;
