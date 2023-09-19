import { ark } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type { HTMLPandaProps } from "generated/panda/types/jsx";
import type { ElementType } from "react";

export interface Props extends HTMLPandaProps<"svg"> {
  as: ElementType;
}

/**
 * Core UI icon.
 */
const Icon = ({ as, ...rest }: Props) => {
  const PandaIcon = panda(ark.svg);
  const Component = panda(as);

  return (
    <PandaIcon asChild {...rest}>
      <Component />
    </PandaIcon>
  );
};

export default Icon;
