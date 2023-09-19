import { ark } from "@ark-ui/react";

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
  const PandaIcon = panda(ark.svg);
  const Component = panda(as);

  return (
    <PandaIcon className={className} asChild {...rest}>
      <Component />
    </PandaIcon>
  );
};

export default Icon;
