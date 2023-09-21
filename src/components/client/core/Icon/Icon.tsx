import { ark } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { icon } from "generated/panda/recipes";

import type { HTMLPandaProps } from "generated/panda/jsx";
import type { IconVariantProps } from "generated/panda/recipes";
import type { ReactElement } from "react";

export interface Props extends IconVariantProps, HTMLPandaProps<"svg"> {
  children: ReactElement;
}

const PandaIcon = panda(ark.svg, icon);

const Icon = ({ ...props }: Props) => {
  return <PandaIcon asChild {...props} />;
};

export default Icon;
