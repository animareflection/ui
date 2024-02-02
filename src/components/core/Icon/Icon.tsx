import { ark } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { icon } from "generated/panda/recipes";

import type { ComponentProps, ReactElement } from "react";

export interface Props extends ComponentProps<typeof PandaIcon> {
  children: ReactElement;
}

const PandaIcon = panda(ark.svg, icon);

const Icon = ({ asChild = true, ...props }: Props) => {
  return <PandaIcon asChild={asChild} {...props} />;
};

export default Icon;
